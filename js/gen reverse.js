const jwt = require('jsonwebtoken');
const fs = require('fs');

// Загрузка приватного ключа из файла
const privateKey = fs.readFileSync('PrivateKeypr.pem', 'utf8');

// Данные, которые будут включены в токен
const payload = {
    "M_INFO": "ewoiYnJvd3Nlckxhbmd1YWdlIjoiZW4iLAoiYnJvd3NlckNvbG9yRGVwdGgiOiIzMiIsCiJicm93c2VyU2NyZWVuSGVpZ2h0IjoiMTkyMCIsCiJicm93c2VyU2NyZWVuV2lkdGgiOiIxMDgwIiwKImJyb3dzZXJUWiI6IjAiLAoiYnJvd3NlclVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMTsgV2luNjQ7IHg2NDsgcnY6NDcuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC80Ny4wIgp9",
    "ORDER": "1011834119122000063",
    "AMOUNT": "0.10",
    "CURRENCY": "BYN",
    "MERCHANT": "E0700001",
    "TRTYPE": "22",
    "isShowCheque": "false",
    "DESC": "111"
  };

// Пользовательские заголовки
const header = {
    alg: 'RS256',
    exp: Math.floor(Date.now() / 1000) + (60 * 60) // Токен будет действителен в течение 1 часа
};

// Опции токена
const options = {
    algorithm: 'RS256',
    header: header
};

// Генерация токена
const token = jwt.sign(payload, privateKey, options);

console.log('Generated JWT:', token);