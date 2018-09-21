FROM node:8
WORKDIR /home/arthur/Desktop/dockerApp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD [ "npm", "start" ]