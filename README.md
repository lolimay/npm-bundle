# Rocket.Chat Apps NPM Bundle Example

## Get Started

First of all, install the dependencies by the comamnd:

```bash
npm i # install dependencies
```

Then, Edit `.rcappsconfig` and replace username and password to your own ones and make sure your local Rocket.Chat instance is running.

```
// .rcappsconfig
{
    "url": "http://localhost:3000",
    "username": "root", 👈 replace it to your own one!
    "password": "root", 👈 replace it to your own one!
...
```

Lastly, bundle the dependencies and deploy the app by the comamnd:

```bash
npm start
```

Check the result! You will possibly see the following message in the terminal:

```
I20210505-22:40:49.479(8)?
I20210505-22:40:52.949(8)? 4.17.21 [
I20210505-22:40:52.949(8)?    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
I20210505-22:40:52.949(8)?   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
I20210505-22:40:52.949(8)?   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
I20210505-22:40:52.949(8)?   37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
I20210505-22:40:52.949(8)?   49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
I20210505-22:40:52.949(8)?   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
I20210505-22:40:52.949(8)?   73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
I20210505-22:40:52.950(8)?   85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
I20210505-22:40:52.950(8)?   97, 98, 99
I20210505-22:40:52.950(8)? ]
```

## Know Issues

1. `import` syntax is not supported for importing `deps.ts`, use `const deps = require('./deps')` instead.

The potential reasons is that TypeScript use `__importStart` as a wrapper for module importing, that would cause the conflicts with rollup bundle.
