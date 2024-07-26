# Dockerize React app using Docker Compose

**Create react app using vite:**

```bash
npm create vite react-compose
```

go to the new directory

```bash
cd react-compose
```

Install the dependencies

```bash
npm i
```

**Initialize Docker:**

```bash
docker init
```

It will ask multiple questions.

- Choose your application platform (language | runtime)
- Choose the version
- Choose package manager
- Choose starting server `npm run dev`
- Add listening port

Docker compose will create a bunch of files.

- .dockerignore
- Readme.Docker.md
- Dockerfile
- compose.yaml

The `compose.yaml` file contains the following instructions

```yaml
services:
  server:
    build:
      context: .
    environment:
      NODE_ENV: production
    ports:
      - 5173:5173
```

**Update the code just like that:**

```yaml
services:
  web:
    build:
      context: .
    ports:
      - 5173:5173
    volumes:
       - .:/app
       - /app/node_modules
```

The `DockerFile` contains the following instructions.

```DockerFile

# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production


WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD npm run dev

```

Remove all of this and copy the code from [DockerFile](../../3-dockerize-react-app/react-docker/Dockerfile) and paste in it.

**Add --host:**

Go to `package.json` file and add this in scripts in dev.

```json
"scripts": {
    "dev": "vite --host",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

**Run:**

```bash
docker compose up
```
