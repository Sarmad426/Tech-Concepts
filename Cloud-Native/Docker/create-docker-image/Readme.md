# Docker Documentation

## Containerizing a Node.js Application with Docker

This documentation explains how to containerize a Node.js application named "docker-start" and push it to Docker Hub. Ensure you have Docker installed on your system before proceeding.

### Prerequisites

- Docker installed on your local machine
- A Node.js application with a single file named `app.js`
- Docker Hub account (username: sarmad426)

### Steps

1. **Create Dockerfile**

    Create a file named `Dockerfile` in the root of your project directory (`docker-start`) with the following content:

    ```Dockerfile
    # Use Node.js version 14 as the base image
    FROM node:20

    # Set the working directory inside the container
    WORKDIR /usr/src/app

    # Copy package.json and package-lock.json to the working directory
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Expose the port your app runs on
    EXPOSE 3000

    # Command to run the application
    CMD ["node", "app.js"]
    ```

    This Dockerfile contains the necessary instructions to build a Docker image for your Node.js application. Let's go through each command:

    - **FROM**: Specifies the base image for your Docker image. Here, we're using the official Node.js version 14 image.
    - **WORKDIR**: Sets the working directory inside the container where your application code will be copied.
    - **COPY**: Copies `package.json` and `package-lock.json` files to the working directory, and then installs dependencies using `npm install`.
    - **COPY**: Copies the rest of your application code to the working directory.
    - **EXPOSE**: Informs Docker that the container listens on port 3000.
    - **CMD**: Defines the command to run your Node.js application.

2. **Build the Docker Image**

    Open a terminal, navigate to your project directory, and run the following command:

    ```bash
    docker build -t docker-start .
    ```

    This command builds a Docker image named `docker-start` based on the Dockerfile in the current directory.

3. **Tag the Docker Image**

    Tag the built image with your Docker Hub username and the image name:

    ```bash
    docker tag docker-start sarmad426/docker-start:latest
    ```

    This command tags the image with the username `sarmad426` and repository name `docker-start` on Docker Hub.

4. **Log in to Docker Hub**

    If you haven't logged in to Docker Hub in this session, use the following command:

    ```bash
    docker login
    ```

    Enter your Docker Hub username (`sarmad426`) and password when prompted.

5. **Push the Docker Image to Docker Hub**

    Finally, push the tagged image to Docker Hub:

    ```bash
    docker push sarmad426/docker-start:latest
    ```

    This command pushes your "docker-start" image to your Docker Hub repository.

### Conclusion

Following these steps will containerize your Node.js application and publish it to Docker Hub under your username `sarmad426`. Ensure you replace any placeholders with your actual project and Docker Hub details.
