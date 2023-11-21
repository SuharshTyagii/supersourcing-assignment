FROM mcr.microsoft.com/playwright:v1.17.0-focal

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npx playwright install

RUN npx playwright install-deps

COPY . .

EXPOSE 9323

# Run the test
CMD ["npm", "run", "test:form"]
