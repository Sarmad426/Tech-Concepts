# Next js

Next.js is a React framework that enables you to create full-stack web applications by extending
the latest React features and integrating powerful Rust-based JavaScript tooling for the fastest builds.

## Data Cache

Next.js has a built-in Data Cache that persists the result of data fetches across incoming server requests and deployments.
This is possible because Next.js extends the native fetch API to allow each request on the server to set its own persistent
caching semantics.

![image](https://github.com/Sarmad426/Documentation/assets/112152732/5014affc-1e44-472b-8913-25616a93f947)

## Incremental Static Regeneration (ISR)?

Incremental Static Regeneration (ISR) is a feature in Next.js that allows you to update static pages without rebuilding the entire site. This can help improve performance and reduce build times. Here’s an example of how to use ISR:

| **Question** | **Answer** |
|--------------|------------|
| What is Next.js? | Next.js is an open-source, lightweight React.js framework that facilitates developers to build static and server-side rendering web applications. It was created by Zeit. |
| Why is Next.js used for? / Why do world's leading companies prefer Next.js? | Next.js fulfills the following requirements: bundling code using a bundler like webpack and transforming using a compiler like Babel, production optimizations such as code splitting, pre-rendering some pages for performance and SEO statically, server-side rendering or client-side rendering, and writing server-side code to connect your React app to your data store. Reasons why the world's leading companies prefer Next.js: Zero Setup, Fully Extensible, Ready for Production, and Next.js can Deploy Anywhere. |
| What is the process to install Next.js? / How to install Next.js? | Before installing Next.js, you must have installed Node.js on your system. Learn how to install Node.js on your system: ⁷. It requires NPM to start installing Next.js with all its dependencies. Follow the steps given below to install Next.js: First, create a directory to keep the Next.js project and go into it: `mkdir my-portfolio-site` `cd my-portfolio-site`. Now, initialize this with a package.json file. Use the y flag by `npm init -y`. Use the following syntax to install Next.js `npm install react react-dom next`. Update package.json with run script languages to start the initialization of the Next.js application. Now, find the package.json file on the root folder and add the below mentioned script: `{ "scripts": { "dev": "next", "build": "next build", "start": "next start" } }`. After that, the filesystem is the main API. Every ".js" file becomes a route that gets automatically processed and rendered. |

Here are some MCQ questions with answers:

1. What is Next.js?
    - [ ] A lightweight Angular.js framework
    - [x] An open-source, lightweight React.js framework
    - [ ] A server-side rendering web application framework
    - [ ] A Node.js framework

2. What is the process to install Next.js?
    - [ ] Install Next.js with yarn
    - [x] Install Node.js and NPM, then install Next.js with NPM
    - [ ] Install Next.js with pip
    - [ ] Install Next.js with apt-get

3. What are the reasons why the world's leading companies prefer Next.js?
    - [ ] It is a lightweight Angular.js framework
    - [ ] It is a server-side rendering web application framework
    - [x] Zero Setup, Fully Extensible, Ready for Production, and Next.js can Deploy Anywhere
    - [ ] It is a Node.js framework

4. What are the requirements that Next.js fulfills?
    - [ ] Bundling code using a compiler like Babel
    - [ ] Production optimizations such as code splitting
    - [ ] Pre-rendering some pages for performance and SEO statically
    - [ ] Writing server-side code to connect your React app to your data store
    - [x] All of the above
