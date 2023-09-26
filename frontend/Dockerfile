# Use an official Node.js runtime as the base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your project files to the container
COPY . .

# Expose the port your SvelteKit app will run on
EXPOSE 5173

# Start your SvelteKit app when the container starts
CMD ["node", "build"]
