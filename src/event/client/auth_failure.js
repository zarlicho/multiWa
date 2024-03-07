/*
 * Bot for WhatsApp
 * Copyright (C) 2023 Pikzy
 */

module.exports = (client, clientId, session) => {
	console.log(`Client ID ${clientId} :Gagal menautentikasi whatsapp, memulai ulang...`, session);
  client.restart();
}