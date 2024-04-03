## Centro Oftalmológico del Este - Next.JS Frontend

### Index and features

- Clean Architecture
- Dependency Injection with Inversify
- Typescript
- Class transformers
- Styled components
- Prettier

### Prerequisites

This project uses the following packages

- [nvm](https://github.com/nvm-sh/nvm) (Node version manager)
- [Just](https://just.systems/man/en/chapter_4.html) (For justfile usage)

Run the following command to install the node version declared in the `.nvmrc`
file for this project:

```shell
nvm install
```

Finally, enable [corepack](https://github.com/nodejs/corepack) so the correct
version of yarn is used.

```shell
just corepack-enable
```

### First steps

**Install dependencies**

```shell
just install-deps
```

**Run project**

```shell
just dev
```

**See a list of available commands**

```shell
just
```

**Proxy commands through nvm**

```shell
just nvm-exec "yarn add @front_web_mrmilu/hooks"
```

### Environment variables

Create a `.env.development.local` file with your environment variables with the following defaults for dev server

```
NEXT_PUBLIC_STRAPI_URL=XXXXX
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=XXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=XXXXX
```

Also create a `.env.production.local` file with your environment variables with the following defaults for production build

```
NEXT_PUBLIC_STRAPI_URL=XXXXX
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=XXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=XXXXX
```
