# serverless memory leak

This is a minimal repo with basic serverless hello-world example to demonstrate a memory leak in the local serverless stack.

## Usage

### With Docker

```sh
$ docker-compose up -d
```

It'll start the container along with [prometheus](https://prometheus.io/) to collect & plot the memory usage graph.

Or, the memory can also be monitored using `docker stats`.

### Without Docker on host

```sh
$ npm start
```

It'll start the serverless-offline server on port 5000.
