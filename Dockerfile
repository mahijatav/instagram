# Use official Node image
FROM node:22

# Create app directory
WORKDIR /instagram-clone

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
