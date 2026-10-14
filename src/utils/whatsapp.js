import { siteConfig } from '../data/site';

/**
 * Builds a direct WhatsApp chat URL with encoded pre-filled text.
 * @param {string} [customMessage] - Optional message override.
 * @returns {string} wa.me URL
 */
export function getWhatsAppUrl(customMessage) {
  const number = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const message = customMessage || siteConfig.messages.general;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp URL for requesting a free demo.
 * @param {string} [businessName] - Optional business name.
 * @returns {string} wa.me URL
 */
export function getDemoWhatsAppUrl(businessName = '') {
  const text = businessName
    ? `${siteConfig.messages.freeDemo}${businessName}`
    : siteConfig.messages.freeDemo;
  return getWhatsAppUrl(text);
}
