#Build the project
FROM node:20.12.2-alpine3.19 AS build

RUN mkdir /TicTacToeThreeFile

WORKDIR /TicTacToeThreeFile

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

#Serve the project
FROM nginx:1.25-alpine

COPY --from=build /TicTacToeThreeFile/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]