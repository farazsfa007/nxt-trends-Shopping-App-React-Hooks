# Nxt Trends Shopping App 🛍️

A modern, fast, and fully responsive e-commerce web application built using **React (Functional Components & Hooks)**, **React Router v6**, and styled with custom responsive CSS layouts. The application integrates secure JWT-based authentication, interactive product filtering, sorting, real-time cart state management, and an absolute fluid checkout summary.

### 🌐 Live Demo & Repository
* **Live Deployment Url:** [nxt-trends-shopping-app.netlify.app](https://nxt-trends-shopping-app.netlify.app/login)
* **GitHub Repository:** [farazsfa007/nxt-trends-Shopping-App-React-Hooks](https://github.com/farazsfa007/nxt-trends-Shopping-App-React-Hooks)

---

## 🔐 Demo Credentials

To explore the protected features of the e-commerce store, use the following verified credentials on the login screen:

* **Username:** `rahul`
* **Password:** `rahul@2021`

---

## ✨ Features

### 1. Authentication & Route Guarding
* **Secure Token Handshake:** Authorizes users via a central POST API call, persisting session state using browser cookies (`js-cookie`) for a `30-day` expiry cycle.
* **Declarative Layout Shielding:** Implements structural route shielding using an `<Outlet />` element to verify token presence dynamically before mounting protected layouts (`/`, `/products`, `/cart`).
* **Authenticated Direct Bypass:** Automatically reroutes users traveling to `/login` straight back to the dashboard if a valid session state token is detected.

### 2. Advanced Product Discovery Engine
* **Contextual Filter Array:** Instantly scopes product indexes by categories (Clothing, Electronics, Appliances, Grocery, Toys) and relative minimum customer rating intervals.
* **Debounced Text Queries:** Real-time search processing executed natively via strict enter key event blocks or immediate manual form query triggers.
* **Dynamic Sorting Matrix:** Sorts live product metrics dynamically by price indexes (`High-Low` or `Low-High`).
* **Stateful View Switching:** Built-in semantic rendering trees that toggle gracefully between `Success Layouts`, empty `No Products Found` visual alerts, standard `ThreeDots` async loader overlays, or network `Failure Boundaries`.

### 3. Deep Product Details & Context Sync
* **Dynamic Route Hooks:** Extracts parameters dynamically using `useParams` to fetch highly explicit, context-driven target metrics on-demand.
* **E-Commerce Interaction Mechanics:** Local quantitative boundary rules that control increments, decrements, and total items to prepare for batch context commits.
* **Cross-Selling Recommendations:** Aggregates, normalizes, and lists complex JSON maps into secondary structured recommendations natively using `<SimilarProductItem />`.

### 4. Flawless Cart Architecture
* **Global Hooks State Consumption:** Implements an optimization strategy built with `useContext(CartContext)` to seamlessly sync atomic state changes across distant components (`Header`, `Cart`, `CartListView`, `CartItem`, `CartSummary`) without prop-drilling.
* **Intelligent Item Deduplication:** Checks item payloads during addition; if the item already exists in the cart list, it mathematically combines the item quantity state instead of duplicating lines.
* **Auto-Purge Safeguards:** Automatically drops an active item out of the cart array if a user decrements its quantitative selection balance to absolute zero.
* **Functional Reducer Summary:** Uses functional programming pipelines (`Array.reduce`) to execute instant, dynamic cost calculations for the entire order summary total on every state modification.

---

## 🛠️ Technology Stack

* **Frontend Library:** React (Functional Components, Hooks Architecture)
* **Build System & Dev Server:** Vite (Fast ESM-based bundling)
* **Routing Engine:** React Router v6
* **State Context:** React Context API (`useContext`)
* **Icons & Animation Ecosystem:** `react-icons` (Bootstrap & Font Awesome suites), `react-loader-spinner`
* **Network & Storage Utilities:** Native Fetch API, `js-cookie`
* **Styling Framework:** Custom Vanilla CSS with Mobile-First Media Layout Blocks

---

## 🗂️ Project Directory Architecture

```text
src/
├── components/
│   ├── AllProductsSection/   # Handles master catalog layout and filter sync
│   ├── Cart/                 # Core cart routing view and validation rules
│   ├── CartItem/             # Quantified line product rows inside the cart list
│   ├── CartListView/         # Array map processor for active cart lines
│   ├── CartSummary/          # Pure reducer processor calculating final costs
│   ├── EmptyCartView/        # Presentational layout if the cart is blank
│   ├── FiltersGroup/         # Highly decoupled stateful sidebar for category/rating trees
│   ├── Header/               # Responsive top navigation with automated cart counter badge
│   ├── Home/                 # Primary static landing promotional layout
│   ├── LoginForm/            # Handles validation states and token management
│   ├── NotFound/             # Explicit fallback view for invalid routing endpoints
│   ├── ProductCard/          # Dashboard display grid block layout 
│   ├── ProductItemDetails/   # Explicit details, item counters, and similar items layout
│   ├── Products/             # Container wrapping prime deals and general inventories
│   ├── ProductsHeader/       # Catalog contextual sorting toolbar
│   ├── ProtectedRoute/       # Layout route gateway component using React Router Outlets
│   └── SimilarProductItem/   # Presentational items for the relative carousel array
├── context/
│   └── CartContext.js        # Global Context structure providing state contracts
├── App.js                    # The root orchestrator holding states, routes, and provider contexts
├── App.css                   # Global core framework overrides
├── index.css                 # Document design token properties
└── main.jsx                  # Direct mounting entry hook for Vite's virtual DOM

```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation & Initialization

1. Clone the repository down to your desktop environment:
```bash
git clone [https://github.com/farazsfa007/nxt-trends-Shopping-App-React-Hooks.git](https://github.com/farazsfa007/nxt-trends-Shopping-App-React-Hooks.git)

```


2. Traverse directly inside the root working pathway:
```bash
cd nxt-trends-Shopping-App-React-Hooks

```


3. Trigger your package installer to assemble dependencies safely:
```bash
npm install

```


4. Boot the optimized compilation server via Vite:
```bash
npm run dev

```


5. Open your browser and navigate to the local server address displayed in your terminal (typically `http://localhost:5173`).