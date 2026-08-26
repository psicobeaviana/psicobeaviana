// Configurações de contato centralizadas.
// Atualize aqui o número ou a mensagem e todos os botões do site refletem a mudança.

const WHATSAPP_NUMBER = '5511950055301';
const WHATSAPP_MESSAGE =
  'Olá! Vim através do site e gostaria de saber mais sobre as consultas e os preços.';

/** Link completo do WhatsApp com mensagem pré-definida. */
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
