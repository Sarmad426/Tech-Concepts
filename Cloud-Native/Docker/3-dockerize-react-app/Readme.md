# Step by step process of creating Docker image of React app, running container and publishing it to docker hub

## Create react app using vite

```bash
npm create vite react-docker
```

go to the new directory

```bash
cd react-docker
```

Install the dependencies

```bash
npm i
```

## Steps of creating a Docker image

1. Create a file named `Dockerfile`
2. Write Instructions to the Dockerfile
3. Create another file named `.dockerignore`
4. Ignore `node_modules` & any other dependencies if required
5. Build an image
6. Run a container (Port mapping)
7. Tag the image
8. Publish the image to Docker hub

> Before creating a docker image, in `package.json` in `scrips`, in `dev` write `vite --host`.

```json
"scripts": {
    "dev": "vite --host",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
},
```

### Write Docker File

- Create a file named `Dockerfile`
- Write the following to the file

```Dockerfile
# set the base image to create the image for react app
FROM node:20-alpine

# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# This is done to avoid running the app as root
# If the app is run as root, any vulnerability in the app can be exploited to gain access to the host system
# It's a good practice to run the app as a non-root user
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# sometimes the ownership of the files in the working directory is changed to root
# and thus the app can't access the files and throws an error -> EACCES: permission denied
# to avoid this, change the ownership of the files to the root user
USER root

# change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R app:app .

# change the user back to the app user
USER app

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5173

# command to run the app
CMD npm run dev
```

### Building a `react app` Docker image

```bash
docker build -t react-docker .
```

### To run the image

```bash
docker run react-docker
```

But you won't be able to see it running in your local machine. Even though it is specified in the `Dockerfile` to `EXPOSE 5173`. It is because `EXPOSE` only did one job, it tells the Docker that
the container should listen to the port `5173`, but our host machine is not listening to the port.
To make it work on host machine we need to do **Port Mapping**. It allows us to map ports between the docker container and the host machine.

### Port Mapping

```bash
docker run --name react-server -p 5173:5173 react-docker
```

- `--name` assigns a name to running container.
- `-p` is mapping the container port `5173` to the host machine port `5173`.

Now open `http://localhost:5173/` , if you see your app running then the image was successfully created and now you can publish it to docker hub. But wait if you make any changes to your code the container is still the same. It is because the container does not have access to our latest codebase. To do that we can modify the run command like that.

### Reflect Changes to running container

```bash
docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker
```

This can lead to issues on a **Windows** machine. So we can modify the command to provide the absolute path.

Go to the `react-docker` directory and run the following command.

```bash
docker run -p 5173:5173 -v "%cd%:/app" -v /app/node_modules react-docker
```

- `-v` is for volume. It ensures that the data is always stored somewhere in the container.
- `"$(pwd):/app"` or `"%cd%:/app"` reflects the code changes to the container in the app directory.
- `/app/node_modules` uses the existing `node_modules` stored in the volumes

This will now ensure that the latest code changes immediately reflect to the container.

### Publish the image

- First Login
- Tag the image
- Publish the image

1. **Login**

    ```bash
    docker login
    ```

2. **Tag the image**

    ```bash
    docker tag react-docker sarmad426/react-docker
    ```

    Replace your docker hub username

3. **Publish the image**

   ```bash
   docker push sarmad426/react-docker
   ```
