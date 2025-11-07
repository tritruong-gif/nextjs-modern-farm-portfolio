# Agrimo - Modern Farm Portfolio Website

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind 4](https://img.shields.io/badge/Tailwind_4_(Alpha)-CSS-blue?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Ready_to_Deploy-Vercel-black?logo=vercel)

A modern, high-performance, and fully responsive static portfolio website for a fictional farm named 'Agrimo'. This project is built from the ground up using the latest Next.js 14 App Router, TypeScript, and the experimental Tailwind 4 (Alpha) with a CSS-first, `@theme`-based approach.

### Live Demo
**(https://nextjs-modern-farm-portfolio.vercel.app/)**

<br>

<details>
  <summary><b>Click to view Full Homepage Screenshot</b></summary>
  <img src="/public/images/Home.png" alt="Agrimo Homepage Mockup"/>
</details>

<br>

## 🚀 Core Technologies

* **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind 4 (Alpha)](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
    * CSS-first, `@theme`-based configuration (see `app/globals.css`).
    * No `tailwind.config.ts`; a minimal `tailwind.config.js` is used for content scanning only.
* **Architecture:** [React Server Components (RSC)](https://nextjs.org/docs/app/building-your-application/rendering/server-components) (Server-first, with "islands" of interactivity).
* **Data:** Local static files (`/components/data/*.ts`) acting as a pseudo-database.
* **Form Handling:** [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) for the Contact Us form.
* **Image Handling:** A custom `CustomImage` component with a built-in fallback to `/public/image-not-found.jpg`.

## ✨ Key Features

This project isn't just a simple static site; it leverages modern Next.js patterns to create a fast, maintainable, and rich user experience.

* **Fully Responsive Design** for all pages and components.
* **Complete Static Site Generation (SSG)** for all pages, including dynamic routes.
* **Dynamic Breadcrumb Hero:** A reusable client component (`<BreadcrumbHero />`) that automatically generates the page title and breadcrumb path from the URL (`usePathname`).
* **Reusable Server Component Wrappers:** The `<ServiceCarousel />` component is a client component that handles all carousel logic, but it accepts server-rendered children. This means the HTML for the cards is fully static, and the client only loads the JavaScript for the slider logic.
* **Dynamic Filtering & Pagination:** The `/blog` and `/services` pages are server components that read URL `searchParams` (`?category=...` & `?page=...`) to filter and paginate data on the server *before* sending the final HTML.
* **Server Actions:** The contact form submits directly to a Server Action (`/app/contact/actions.ts`) without needing a separate API route.
* **Interactive Accordion:** A reusable, stateful client component (`<AccordionItem />`) used on the FAQ and Service Detail pages.

### Included Pages
* **Home:** A full landing page showcasing all major sections.
* **About Us:** A detailed page with multiple content sections.
* **Our History:** A page featuring a custom timeline.
* **Services (with Pagination):** A grid of all services with pagination.
* **Service Detail (`/services/[slug]`):** A dynamic page for each service with a scrolling sidebar nav.
* **Blog (with Filtering & Pagination):** A grid of blog posts with category filtering and pagination.
* **Blog Detail (`/blog/[slug]`):** A dynamic page for each blog post.
* **FAQ:** A page with multiple, interactive accordion lists.
* **Contact Us:** A page with a functional contact form.

## 📂 Project Structure

The project follows a feature-colocated structure within the `components` directory, with `app` routes assembling the final pages.

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about-us
├ ○ /blog
├ ● /blog/[slug]
│ ├ /blog/vertical-farming
│ ├ /blog/farming-types
│ ├ /blog/farmers-sentiment
│ └ [+7 more paths]
├ ○ /contact
├ ○ /faq
├ ○ /our-history
├ ○ /services
└ ● /services/[slug]
  ├ /services/harvest-concepts
  ├ /services/farming-products
  ├ /services/harvest-concepts-3
  └ [+7 more paths]
  
## 🚀 Getting Started

To run this project locally, you'll need Node.js (v18.17 or later).

### 1. Clone the Repository

```bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```

### 2. Install Dependencies
This project uses npm (but yarn or pnpm will also work).

```bash

npm install

```

### 3. Run the Development Server

```bash

npm run dev

```

Open http://localhost:3000 in your browser to see the result.

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
