# Dockerize React app using Docker Compose

**Create React app using Vite:**

```bash
npm create vite react-compose
```

Go to the new directory

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

Docker Compose will create a bunch of files.

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

**Update the code to the following:**

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

The `Dockerfile` contains the following instructions.

```Dockerfile
# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

USER node

COPY . .

EXPOSE 5173

CMD npm run dev
```

Remove all of this and copy the code from [DockerFile](../../3-dockerize-react-app/react-docker/Dockerfile) and paste it in.

**Add --host:**

Go to the `package.json` file and add this in the scripts section for dev.

```json
"scripts": {
    "dev": "vite --host",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
}
```

**Run:**

```bash
docker compose up
```

**Sync Rebuild and Restart:**

Docker compose does three things:

- **Sync:** Sync the changes from codebase to container
- **Rebuild:** Rebuild the container
- **Restart:** Restart the container

To rebuild the images and restart the containers, you can use:

```bash
docker compose up --build
```

To restart the containers, use:

```bash
docker compose restart
```

**Using Docker Compose Watch:**

`docker compose watch` can be used to watch for changes in the project files and automatically restart the services.

Then, you can run:

```bash
docker compose watch
```

This will automatically watch for changes and restart the services as needed.

With these additions, your Docker Compose setup will be more efficient and responsive to changes in your development environment.
