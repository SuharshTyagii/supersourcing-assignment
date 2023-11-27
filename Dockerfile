# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
# Note: Playwright requires additional dependencies to run browsers
RUN npm install
RUN npx playwright install
RUN npx playwright install-deps


# Bundle the app source inside the Docker image
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD [ "node", "api.js" ]
