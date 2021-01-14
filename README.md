# micro

This repo demonstrates interoperability of a small microservices graph.

## Running locally

Choose one of this methods:

#### Kubernetes with Tilt (recommended)

Follow [Tilt](https://docs.tilt.dev/install.html) installation instructions, then run:

- Start: `tilt up`
- Stop: `tilt down`

#### Docker Compose

If you prefer not using Tilt, just install [Docker Compose](https://docs.docker.com/compose/install/) and you are ready to go:

- Start: `docker-compose up --build`
- Stop: `docker-compose down`

## Making changes

First of all, thanks for contributing.

### Building

In case of editing `.proto` files, you will need to rebuild and propagate stub codes to services.

Ensure you have this dependencies installed, then run `make` for propagating changes to services.

Dependencies:
- [NPM](https://www.npmjs.com/get-npm)
- [GO](https://golang.org/doc/install)
- [protoc](http://google.github.io/proto-lens/installing-protoc.html)
- [buf](https://docs.buf.build/installation/)

### Versioning

This project adheres to [Semantic Versioning](https://semver.org) and documents changes in a CHANGELOG.md following [keep a changelog](http://keepachangelog.com).

See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

Run `npx standard-version` for automatic changelog generation and version numbering when releasing a version.

## Architetural Decisions

[This log](./docs/adr/index.md) lists the architectural decisions.

Run `npx adr-log -i -d ./` after documenting a decision, for automatic indexing.

## Issues reporting

Issues can be reported at https://github.com/edinella/micro/issues.

## License

- [ISC](./LICENSE)
