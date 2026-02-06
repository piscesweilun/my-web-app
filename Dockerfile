# 1. 告訴電腦我們要用 Node.js 第 18 版的基底
FROM node:18-alpine

# 2. 在容器內建立一個工作夾
WORKDIR /app

# 3. 把 package.json 複製進去
COPY package*.json ./

# 4. 安裝程式需要的套件
RUN npm install

# 5. 把剩下的程式碼全部複製進去
COPY . .

# 6. 設定啟動指令
CMD ["node", "server.js"]