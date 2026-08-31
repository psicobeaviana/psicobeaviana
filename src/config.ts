// Configurações de contato centralizadas.
// Atualize aqui os dados e todo o site (botões, rodapé) reflete a mudança.

const WHATSAPP_NUMBER = '5511950055301';
const WHATSAPP_MESSAGE =
  'Olá! Vim através do site e gostaria de saber mais sobre as consultas e os preços.';

/** Link completo do WhatsApp com mensagem pré-definida. */
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Telefone formatado para exibição. */
export const phoneDisplay = '(11) 95005-5301';

/** E-mail de contato. */
export const email = 'psicologabeatrizgomes@gmail.com';

/** Perfil do Instagram. */
export const instagramUrl = 'https://www.instagram.com/psicobeatrizviana/';

/** Registro no Conselho Regional de Psicologia (obrigatório em material de divulgação, CFP). */
export const crp = 'CRP 06/177412';

/**
 * ID de Medição do Google Analytics (formato "G-XXXXXXXXXX").
 * Deixe vazio para manter o Analytics desligado — o site funciona
 * normalmente sem ele. Assim que a conta do GA4 for criada, cole o ID aqui
 * e o script é carregado automaticamente.
 */
export const gaMeasurementId = '';
