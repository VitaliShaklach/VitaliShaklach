const jwt = require('jsonwebtoken');
const fs = require('fs');

// Загрузка приватного ключа из файла
const privateKey = fs.readFileSync('PrivateKeypr.pem', 'utf8');

// Данные, которые будут включены в токен
const payload = {
    "ORDER": "7011834119122100063",
    "DESC": "some test",
    "AMOUNT": "0.10",
    "CURRENCY": "BYN",
    "MERCHANT": "E0700001",
    "isShowCheque": "false",
    "M_INFO": "ewoiYnJvd3Nlckxhbmd1YWdlIjoiZW4iLAoiYnJvd3NlckNvbG9yRGVwdGgiOiIzMiIsCiJicm93c2VyU2NyZWVuSGVpZ2h0IjoiMTkyMCIsCiJicm93c2VyU2NyZWVuV2lkdGgiOiIxMDgwIiwKImJyb3dzZXJUWiI6IjAiLAoiYnJvd3NlclVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMTsgV2luNjQ7IHg2NDsgcnY6NDcuMCkgR2Vja28vMjAxMDAxMDEgRmlyZWZveC80Ny4wIgp9",
    "TRTYPE": "1",
    "CARD_FROM": "2204120110597990",
    "EXP": "03",
    "EXP_YEAR": "28",
    "CVC2": "910",
    "MERCH_ADD_INFO": "Дополнительная информация",
    "MERCH_NAME": "Test <bePaid>",
    "MERCH_ORG_NAME": "ООО «ИКомЧардж»",
    "MERCH_ADDR": "г. Минск, пр. Дзержинского, 104, офис 1403/1",
    "MERCH_3D_TERM_URL": "https://demo-gateway-staging.begateway.com/process/testcase22/return"
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