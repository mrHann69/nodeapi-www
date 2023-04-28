FROM node:18
WORKDIR /app
COPY ./package* ./
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "dev"]