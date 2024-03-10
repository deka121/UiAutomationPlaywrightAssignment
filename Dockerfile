# Use an official Node.js runtime as the base image with a version that supports Cucumber.js
#Cucumber support 18 or above version of Node
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
# Note: Playwright needs to be installed after copying the package.json files
RUN npm install

# Copy the test scripts into the container
COPY . .

# Run the tests
CMD ["npm", "test"]