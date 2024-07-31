This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
npm install
npm i --save-dev ts-node
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init // Create Database File (.db)
npx shadcn-ui@latest init // install shadcn

```bash
npm install
npm i --save-dev ts-node
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init // Create Database File (.db)
npx shadcn-ui@latest init // install shadcn
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
