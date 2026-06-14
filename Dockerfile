FROM node:22-bookworm
RUN apt-get update && apt-get install -y rsync findutils procps && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5800
CMD ["node", "server.js"]
