#!/usr/bin/env node
const wa = require('./multi');
const autoChat = require('./autoChat');
const readline = require('readline');

// Fungsi untuk membaca input dari user
function getUserInput(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
            rl.close();
        });
    });
}

// Fungsi untuk menjalankan aplikasi
async function run() {
    const choice = await getUserInput('Pilih opsi (1. Login WhatsApp, 2. Auto Chat): ');
    if (choice === '1') {
        const loginOption = await getUserInput('Masukkan jumlah devices (contoh: 2): ');
        wa.Login(loginOption);
    } else if (choice === '2') {
        const autoChatOption = await getUserInput('Masukkan jumlah devices: ');
        const message = await getUserInput('Masukkan pesan yang ingin dikirim: ');
        autoChat.AutoChat(autoChatOption, message);
    } else {
        console.log('Pilihan tidak valid.');
    }
}

// Menjalankan aplikasi
run();
