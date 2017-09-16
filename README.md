# WTTJ challenge

Here is the result of the Welcome to the Jungle challenge.
It consists of a Trello-like UI using websockets for real time interactions.

The app runs in a Docker container and relies on Docker Compose for building and running the container.

## Install and run

#### 1. Install Docker and Docker Compose

- Docker: https://docs.docker.com/engine/installation/
- Docker Compose: https://docs.docker.com/compose/install/

#### 2. Install dependencies

Go in project folder and run `yarn` (or `npm i`)

#### 3. Run

```
docker-compose run -p 3000:3000 --rm web npm run serve
```

then go to `http://localhost:3000`