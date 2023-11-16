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

| **Question** | **Answer** |
|--------------|------------|
| What is the difference between CSR and SSR? | CSR stands for Client-Side Rendering, while SSR stands for Server-Side Rendering. In CSR, the client browser downloads a minimal HTML page and then renders the page using JavaScript. In SSR, the server generates the HTML and sends it to the client. |
| What is the difference between getStaticProps and getServerSideProps? | getStaticProps is used to fetch data at build time, while getServerSideProps is used to fetch data at request time. |
| What is the difference between getStaticPaths and getServerSidePaths? | getStaticPaths is used to generate dynamic routes based on data at build time, while getServerSidePaths is used to generate dynamic routes based on data at request time. |
| What is the difference between getInitialProps and getServerSideProps? | getInitialProps is used in Next.js versions less than 9.3, while getServerSideProps is used in Next.js versions greater than or equal to 9.3. |
| What is the difference between a static route and a dynamic route? | A static route is a route that does not have any parameters, while a dynamic route is a route that has parameters. |
| What is the difference between a page and a component in Next.js? | A page is a React component that is automatically associated with a route based on its file name, while a component is a reusable piece of code that can be used in multiple pages. |
| What is the difference between a layout and a component in Next.js? | A layout is a higher-order component that wraps other components to provide a consistent look and feel, while a component is a reusable piece of code that can be used in multiple layouts. |
| What is the difference between a hook and a component in Next.js? | A hook is a function that allows you to use state and other React features without writing a class, while a component is a reusable piece of code that can be used in multiple hooks. |
| What is the difference between a context and a component in Next.js? | A context is a way to pass data through the component tree without having to pass props down manually at every level, while a component is a reusable piece of code that can be used in multiple contexts. |
| What is the difference between a middleware and a component in Next.js? | A middleware is a function that runs before the page is rendered, while a component is a reusable piece of code that can be used in multiple middlewares. |
| What is the difference between a plugin and a component in Next.js? | A plugin is a package that extends the functionality of Next.js, while a component is a reusable piece of code that can be used in multiple plugins. |
| What is the difference between a server and a client in Next.js? | The server is responsible for rendering the initial HTML, while the client is responsible for rendering the page after it has been loaded. |
| What is the difference between a module and a component in Next.js? | A module is a file that exports a single value, while a component is a reusable piece of code that can be used in multiple modules. |
| What is the difference between a package and a component in Next.js? | A package is a collection of files that can be installed using a package manager like npm, while a component is a reusable piece of code that can be used in multiple packages. |
| What is the difference between a library and a component in Next.js? | A library is a collection of packages that can be used to solve a specific problem, while a component is a reusable piece of code that can be used in multiple libraries. |

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

5. What is the difference between CSR and SSR?
    - [ ] CSR stands for Client-Side Rendering, while SSR stands for Server-Side Rendering. In CSR, the server generates the HTML and sends it to the client, while in SSR, the client browser downloads a minimal HTML page and then renders the page using JavaScript.
    - [x] CSR stands for Client-Side Rendering, while SSR stands for Server-Side Rendering. In CSR, the client browser downloads a minimal HTML page and then renders the page using JavaScript. In SSR, the server generates the HTML and sends it to the client.
    - [ ] CSR and SSR are the same thing.

6. What is the difference between getStaticProps and getServerSideProps?
    - [ ] getStaticProps is used to fetch data at request time, while getServerSideProps is used to fetch data at build time.
    - [x] getStaticProps is used to fetch data at build time, while getServerSideProps is used to fetch data at request time.
    - [ ] getStaticProps and getServerSideProps are the same thing.
