# Development

## Installation

Use npm package manager (https://www.npmjs.com/) to install dependencies.

```bash
npm i
npm run dev
```

# Testing

tests are in **test** folder within same folder of file to test
all test files are nameed <filename>.test.tsx

```bash
npm run test
```

# Production

## Installation

Use npm package manager (https://www.npmjs.com/) to install dependencies.

Docker - build image
```bash
docker build -t <user>/<container name> {latest is automatically appended to this “:latest”} .
```
PM2 to handle live production app: https://pm2.keymetrics.io/

```bash
npm i
npm run build
pm2 start npm --name "client" -- start

To Stop pm2 instance: pm2 stop cinderblox
To Restart pm2 instance: pm2 restart cinderblox
To Delete pm2 instance: pm2 delete cinderblox
```

# Overview

![GitHub Logo](https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png)
