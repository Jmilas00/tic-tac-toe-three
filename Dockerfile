FROM node:20.12.2-alpine3.19

RUN mkdir /TicTacToeThreeFile

WORKDIR /TicTacToeThreeFile

COPY . .

RUN npm ci

ENTRYPOINT [ "npm", "run", "build" ]