// server.js
const express = require('express');
const app = express();

// 這裡很重要：我們不把設定寫死，而是去讀取 "process.env" (環境變數)
// 如果系統沒給變數，就用後面的預設值
const PORT = process.env.PORT || 8080;
const ENV_NAME = process.env.ENV_NAME || 'Local-Dev'; // 現在是哪個環境？

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <p>Current Environment: <b>${ENV_NAME}</b></p>
    <p>Time: ${new Date().toISOString()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});