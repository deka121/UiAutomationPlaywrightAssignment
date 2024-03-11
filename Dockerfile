# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
# Note: Playwright needs to be installed after copying the package.json files
RUN npm install

# Install Playwright browsers
RUN npx playwright install

# Copy the test scripts into the container
COPY . .

# Run the tests
# Note: Adjust the "test" script in your package.json to run the tests as you want
CMD ["npm", "test"]
