# Development

## Installation

Use npm package manager [npmjs](https://www.npmjs.com/) to install dependencies.

```bash
npm i
npm run dev
```

# Testing

[JEST](https://jestjs.io/docs/en/getting-started)

tests are in `__test__` folders within same folder of files to test
all test files are nameed <filename>.test.tsx

```bash
npm run test
```

# Production

## Installation

Docker - build image

```bash
docker build -t <user>/<container name> {latest is automatically appended to this “:latest”} .
```

PM2 to handle live production app: [pm2](https://pm2.keymetrics.io/)

Use npm package manager [npmjs](https://www.npmjs.com/) to install dependencies.

```bash
npm i
npm run build
pm2 start npm --name "client" -- start

To Stop pm2 instance: pm2 stop client
To Restart pm2 instance: pm2 restart client
To Delete pm2 instance: pm2 delete client
```

## [nextjs](https://nextjs.org/) docs

![GitHub Logo](https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png)

## Styling

### [blueprintjs](https://blueprintjs.com/docs/) is a React-based UI toolkit for the web.

Blueprint is a React-based UI toolkit for the web.
It is optimized for building complex data-dense interfaces for desktop applications.

### [styled-components](https://styled-components.com/) css in js

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.
