// Consentiment de cookies (Directiva ePrivacy art. 5.3, RGPD, LSSI art. 22.2 i Guia de cookies de l'AEPD).
//
// - Per defecte no hi ha consentiment: res no essencial es carrega fins que l'usuari accepta.
// - La decisió es desa en localStorage (emmagatzematge tècnic exempt de consentiment) amb data i versió.
// - Caduca als 12 mesos (l'AEPD en recomana un màxim de 24) i quan canvia CONSENT_VERSION,
//   que cal incrementar sempre que s'afegeixin cookies o finalitats noves a la política.

export const CONSENT_VERSION = 1;
const STORAGE_KEY = 'brigada-cookie-consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
export const CONSENT_EVENT = 'cookie-consent-change';

export interface Consent {
  /** Contingut de tercers incrustat que instal·la cookies (informe de Microsoft Power BI). */
  embeds: boolean;
}

interface StoredConsent extends Consent {
  version: number;
  date: string;
}

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as StoredConsent;
    const age = Date.now() - new Date(stored.date).getTime();
    if (stored.version !== CONSENT_VERSION || !(age >= 0 && age < MAX_AGE_MS)) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return { embeds: stored.embeds === true };
  } catch {
    return null;
  }
}

export function setConsent(consent: Consent): void {
  const stored: StoredConsent = { ...consent, version: CONSENT_VERSION, date: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Sense emmagatzematge (navegació privada, etc.): la decisió val només per a aquesta pàgina.
  }
  document.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: consent }));
}

export function hasEmbedsConsent(): boolean {
  return getConsent()?.embeds === true;
}
