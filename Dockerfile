# Use an official Node runtime as a parent image
FROM mcr.microsoft.com/playwright:v1.17.0-focal

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

RUN npx playwright install

RUN npx playwright install-deps
# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

EXPOSE 9323

# Run the test
CMD ["npm", "run", "test:form"]
