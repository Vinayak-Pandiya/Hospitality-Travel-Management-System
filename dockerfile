#build
FROM oven/bun:latest AS build       #installs bun and sets up the environment for building the application (bun lightweight replacement for node and npmfor nodejs and npm)

WORKDIR /app                        #sets the working directory to /app inside the container, where the application code will be copied and built

COPY package.json bun.lockb ./      #Copies dependency files into the container
RUN bun install --frozen-lockfile   #Installs dependencies

COPY . .                            #Copies the rest of the application code into the container
RUN bun run build                   #Builds the application, typically generating static files in a dist directory that are optimized for production

FROM nginx:alpine                   #uses a lightweight nginx image serve the static files

#static files from the build stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80                           #Exposes port 80, which is the default port for nginx to listen for incoming HTTP requests

CMD ["nginx", "-g", "daemon off;"]  #Starts nginx in the foreground, ensuring that the container remains running and can serve the application when accessed.