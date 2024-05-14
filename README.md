# aws-sdk-js-webpack-bundle

This project contains a minimal repro for bundle size comparisons between AWS
SDK for JavaScript v2 vs v3.

## Pre-requisites

Complete the following tasks:

- Install **Node.js** using version manager of your choice. These steps show how to use **nvm**:

1. Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update).
1. Use node v20.x.x by running `nvm use` or `nvm use 20` in a terminal window.
1. Verify that node is installed by running `node -v` in a terminal window and confirm that it shows Node.js >=20, such as `v20.13.1`).
1. Enable corepack by running `corepack enable` in a terminal window.

## Setup

Switch to branch `sdk-v2`, install dependencies and build production bundle using webpack:

```console
$ git checkout sdk-v2

$ yarn

$ npx webpack

$ du -sh dist/main.js
336K    dist/main.js
```

Switch to branch `sdk-v3`, install dependencies and build production bundle using webpack:

```console
$ git checkout sdk-v3

$ yarn

$ npx webpack

$ du -sh dist/main.js
188K    dist/main.js
```
