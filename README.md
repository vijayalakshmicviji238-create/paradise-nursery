# Paradise Nursery

A responsive plant-shopping website built with React and Redux Toolkit.

## Features
- Welcome landing page with company introduction and Get Started button
- Plant products grouped by categories
- Add plants to the cart
- Cart badge showing item count
- Increase/decrease quantities and remove items
- Automatic subtotals and cart total
- Continue Shopping and Checkout (demo alert)

## Run locally
1. Install Node.js.
2. Extract this project folder.
3. Open a terminal in this folder.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local address shown in the terminal.

## Project structure
- `src/App.jsx` — main landing page and page navigation
- `src/AboutUs.jsx` — company information
- `src/App.css` — application styling and landing background
- `src/CartSlice.jsxx` — Redux cart reducers
- `src/ProductList.jsx` — categorized plant catalog
- `src/CartItem.jsx` — shopping cart display and actions
- `src/store.js` — Redux store
- `src/main.jsx` — React entry point

This is a demonstration storefront. Checkout is not connected to a payment service.
