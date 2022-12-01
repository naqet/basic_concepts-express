FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

ENV DATABASE_URL="file:./dev.db"
ENV PORT=1337
ENV JWT_SECRET="dc527e15ce8a9941530979e20bba1418530b0e2c876806e1a00869b432ff122c0f9d1d3ec78caa8c78636007fdbfaceb6629673f2d2b68711f3459c75a998d9d"

EXPOSE 1337

CMD ["npm", "start"]
