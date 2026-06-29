# Nxt Trendz — E-Commerce Shopping App.

A modern, highly responsive e-commerce shopping app built with React, styled natively with CSS, and optimized using Vite. This project represents a complete architectural React functional paradigms using React Hooks and Context API management.

**Live Demo:** [Nxt Trendz Storefront](https://nxt-trends-shopping-app.netlify.app/login)  
**Repository:** [GitHub Link](https://github.com/farazsfa007/nxt-trends-Shopping-App-React-Hooks)

---

## 🚀 Key Features & Architectural Migrations

* **Class Components to Hooks Refactor:** Migrated the entire codebase from complex stateful class configurations to lightweight Functional Components.
* **Global State with Context API:** Managed e-commerce workflow states (adding items, mutating quantities dynamically, dropping items below zero, recalculating totals) natively via `useContext` instead of multi-tiered `<CartContext.Consumer>` structures.
* **Secure Route Shielding (React Router v6):** Implemented modern layout security mechanisms using standard nested `<Routes>` paired with `<Outlet />` and `<Navigate />` parameters to seal off private user actions.
* **Component Sync & Search Optimization:** Synchronized parameter variations, categorizations, rating changes, and API data transactions securely using isolated state layers (`useCallback` and `useEffect`).

---

## 🛠️ Tech Stack & Utilities

* **Frontend Library:** React (Functional View Engine)
* **Build Tooling & Bundler:** Vite (ESM-Strict Environment)
* **Routing Architecture:** React Router v6
* **Icons Framework:** React Icons (`bs`, `ai`)
* **State Utilities:** React Context API & Core React Hooks (`useState`, `useEffect`, `useContext`, `useCallback`)
* **Token & Network Management:** `js-cookie` (JWT Token Tracking), Native Fetch API

---

## 📁 Repository Structure

```text
src/
├── components/
│   ├── AllProductsSection/    # Product feeds, filtering arrays, layout switchboards
│   ├── Cart/                  # Stateful basket orchestrator
│   ├── CartItem/              # Isolated card item with individual quantity updates
│   ├── CartListView/          # Unified view layout passing cart datasets
│   ├── CartSummary/           # Array reducer calculating final checkout price matrices
│   ├── EmptyCartView/         # Clean fallback viewport for empty cart states
│   ├── FiltersGroup/          # Intercepts search triggers, categories, and rating nodes
│   ├── Header/                # Global navbar with reactive cart badges and logout handlers
│   ├── Home/                  # Responsive landing hero section
│   ├── LoginForm/             # JWT credential handler with explicit history isolation
│   ├── NotFound/              # Missing path fallback wrapper
│   ├── ProductCard/           # Presentational card component for product listings
│   ├── ProductItemDetails/    # Individual product dynamic router, details fetching, and similar feeds
│   ├── Products/              # Integrates Prime deals and main product feeds
│   ├── ProductsHeader/        # Presentational select filter component for price sorting
│   ├── ProtectedRoute/        # Authentication boundary layout shell utilizing <Outlet />
│   └── SimilarProductItem/    # Grid presentation elements for identical collections
├── context/
│   └── CartContext.js         # Initial context layout structures and global interfaces
├── App.css
├── App.jsx                    # Root state holder and router orchestrator
└── index.css                  # Global structural styling rules

```

---

## 🗺️ Application Routing Strategy

The platform segregates public access zones from identity-verified shopping states using structural layout routes:

| Route Route | Component Class | Verification Shielding | Target Output Screen |
| --- | --- | --- | --- |
| `/login` | `LoginForm` | **Public Only** | Redirects to `/` if active cookie exists |
| `/` | `Home` | **Authenticated** | Brand identity messaging layout |
| `/products` | `Products` | **Authenticated** | Prime sales feeds, search bars, category parameters |
| `/products/:id` | `ProductItemDetails` | **Authenticated** | Item specific details, quantity selectors, and similar lists |
| `/cart` | `Cart` | **Authenticated** | Final list modification and price reducers |
| `/not-found` | `NotFound` | **Fallback** | Display resource missing alerts |
| `*` | — | **Auto-Redirect** | Forwards non-registered links to `/not-found` |

---

## 💻 Local Sandbox Setup Instructions

Follow these clear configuration steps to spinning up your own isolated dev instance locally:

### 1. Replicate Project Repositories

```bash
git clone [https://github.com/farazsfa007/nxt-trends-Shopping-App-React-Hooks.git](https://github.com/farazsfa007/nxt-trends-Shopping-App-React-Hooks.git)
cd nxt-trends-Shopping-App-React-Hooks

```

### 2. Resolution of Dependency Frameworks

```bash
npm install

```

### 3. Run Development Server

Spin up the local Vite-powered environment:

```bash
npm run dev

```

Open your browser and navigate to the local server port displayed in your terminal (typically `http://localhost:5173`).

---