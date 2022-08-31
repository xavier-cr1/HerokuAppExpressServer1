FROM node:18-alpine3.15

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  