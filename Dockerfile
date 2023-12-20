FROM node:20.10-alpine
RUN mkdir /app
COPY package.json /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://poc-5xwr3324aa-uc.a.run.app

RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run","start"]