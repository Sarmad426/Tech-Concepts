# Docker Documentation

## Introduction to Docker

Docker is a platform that enables developers to build, ship, and run applications in containers. Containers allow developers to package an application and its dependencies into a standardized unit for software development. Docker provides an efficient way to create, deploy, and manage applications across different environments, including development, testing, and production.

### Uses of Docker

- **Application Isolation**: Docker containers provide a lightweight and isolated environment for applications, ensuring that they run consistently across different systems.
- **Microservices Architecture**: Docker facilitates the implementation of microservices architecture by enabling developers to deploy individual services as containers, each with its own environment.
- **Continuous Integration/Continuous Deployment (CI/CD)**: Docker streamlines the CI/CD process by allowing developers to package their applications into containers and deploy them consistently across different stages of the development pipeline.
- **DevOps Practices**: Docker promotes DevOps practices by providing a consistent environment for development, testing, and production, enabling teams to collaborate more efficiently.
- **Scaling**: Docker allows applications to be scaled quickly and efficiently by deploying multiple instances of containers across different hosts.

### Benefits of Docker

- **Portability**: Docker containers can run on any platform that supports Docker, providing consistent behavior across different environments.
- **Efficiency**: Containers use fewer resources compared to virtual machines, leading to faster startup times and improved resource utilization.
- **Isolation**: Docker containers isolate applications and their dependencies, preventing conflicts and ensuring consistent behavior.
- **Flexibility**: Docker enables developers to use a wide range of programming languages, frameworks, and tools within containers.
- **Scalability**: Docker simplifies the process of scaling applications by allowing containers to be quickly replicated and deployed across different hosts.

### Docker Infrastructure

Docker consists of the following components:

- **Docker Engine**: The core component of Docker, responsible for building, running, and managing containers.
- **Docker Images**: Lightweight, standalone, executable packages that contain all the necessary dependencies and configuration to run a specific application.
- **Docker Containers**: Instances of Docker images that can be run as isolated processes on a host machine.
- **Docker Registry**: A repository for storing and sharing Docker images, such as Docker Hub or a private registry.

## Docker Commands

Here are some of the most commonly used Docker commands:

### 1. `docker run`

- **Description**: Used to run a Docker container from an image.
- **Syntax**: `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`
- **Example**: `docker run -it ubuntu bash` - This command runs a new Ubuntu container in interactive mode with the `bash` shell.

### 2. `docker build`

- **Description**: Builds a Docker image from a Dockerfile.
- **Syntax**: `docker build [OPTIONS] PATH | URL | -`
- **Example**: `docker build -t myapp .` - This command builds a Docker image tagged as `myapp` from the current directory (`.`).

### 3. `docker ps`

- **Description**: Lists all running Docker containers.
- **Syntax**: `docker ps [OPTIONS]`
- **Example**: `docker ps` - This command lists all running containers along with their IDs, names, and status.

### 4. `docker stop`

- **Description**: Stops one or more running Docker containers.
- **Syntax**: `docker stop [OPTIONS] CONTAINER [CONTAINER...]`
- **Example**: `docker stop container1 container2` - This command stops the containers with the IDs `container1` and `container2`.

### 5. `docker rm`

- **Description**: Removes one or more Docker containers.
- **Syntax**: `docker rm [OPTIONS] CONTAINER [CONTAINER...]`
- **Example**: `docker rm container1 container2` - This command removes the containers with the IDs `container1` and `container2`.

### 6. `docker images`

- **Description**: Lists all Docker images on the local machine.
- **Syntax**: `docker images [OPTIONS] [REPOSITORY[:TAG]]`
- **Example**: `docker images` - This command lists all Docker images along with their repository, tag, and size.

### 7. `docker pull`

- **Description**: Pulls a Docker image from a registry.
- **Syntax**: `docker pull [OPTIONS] NAME[:TAG|@DIGEST]`
- **Example**: `docker pull ubuntu:latest` - This command pulls the latest version of the Ubuntu image from Docker Hub.

### 8. `docker exec`

- **Description**: Executes a command in a running Docker container.
- **Syntax**: `docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`
- **Example**: `docker exec -it container1 ls /app` - This command lists the contents of the `/app` directory in the container with ID `container1`.

These are just a few of the many commands available in Docker. For a complete list of commands and options, refer to the [Docker documentation](https://docs.docker.com/).
