# Rancher UI driver for OCP

Rancher UI driver for the OCP GraphQL node driver.

## Setup

- `npm install`

## Development

- `npm start`
- The dev server serves `http://localhost:3000/component.js`.
- Override driver name: `npm start -- --name=ocp`.

## Build

- `npm run build`
- Output is written to `dist/component.js`.

## Release (component.js)

- Build locally: `npm run build`
- Publish `dist/component.js` and `dist/component.css` to GitHub Releases or the `gh-pages` branch.
- Use the published `component.js` URL as the Custom UI URL in Rancher.

## CI/CD (GitHub Actions)

- `build.yml` publishes `dist/` to `gh-pages/master` on pushes to `master` or `main`.
- `build-dev.yml` publishes `dist/` to `gh-pages/dev` on non-main branches.
- `build-rel.yml` publishes `dist/` to `gh-pages/<tag>` for version tags like `v0.1.0`.

## Rancher usage

- Add a Node Driver in Rancher (Global -> Node Drivers).
- Name: `ocp`.
- Download URL: the node driver binary release URL.
- Custom UI URL: the published `component.js` URL.
