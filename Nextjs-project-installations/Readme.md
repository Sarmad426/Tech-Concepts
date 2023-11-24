# Next.js Project Installation Instructions

## Create Next.js Project

```npm
npx create-next-app@latest app-name --typescript --tailwind --eslint
```

This will create a new Next.js project with typescript, tailwind and eslint installed.
Change the Project name from `app-name` to your project name.

## Install Shadcn-UI

```npm
npx shadcn-ui@latest init
```

This will initialize `shadcn-ui` in the project.

### Add Shadcn Components

```npm
npx shadcn-ui@latest add button input form separator popover command  
```

These all are various components of shadcn.

## React Icons

```npm
npm i lucide-react
```

## Toast Notifications

```npm
npm i react-hot-toast
```

## State Management (Zustand)

```npm
npm i zustand
```

Check out prisma setup docs here. <https://github.com/sarmad426/Documentation/tree/master/prisma>

## Form Validation Zod

> Although **shadcn-ui** `form` component comes with `react-hook-form` and `zod`. But if somehow it is not mannualy
> install it using this command.

```npm
npm i zod react-hook-form
```

## Image Upload (Cloudinary)

```npm
npm i cloudinary
```

## Auth and User Management (Clerk)

Checkout Clerk Docs here. <https://github.com/Sarmad426/Documentation/tree/master/clerk%20auth%20nextjs>
