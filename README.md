# micro

This repo demonstrates interoperability of a small microservices graph.

## Development

In case of editing `definitions.proto`, run `make` for propagating changes to services.

### Versioning

This project adheres to [Semantic Versioning](https://semver.org) and documents changes in a CHANGELOG.md following [keep a changelog](http://keepachangelog.com).

See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

Run `npx standard-version` for automatic changelog generation and version numbering when releasing a version.

### Architetural Decisions

[This log](./docs/adr/index.md) lists the architectural decisions.

Run `npx adr-log -i -d ./` after documenting a decision, for automatic indexing.

### Issues

Issues can be reported at https://github.com/edinella/micro/issues.

## License

- [ISC](./LICENSE)
