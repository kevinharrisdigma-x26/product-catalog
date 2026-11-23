# CvSU Mini Store – Lab 3: React Props and Component Communication

A Mini Product Catalog built with React (Vite) using reusable components and props.

## Features

- Reusable `ProductCard` component with destructured props, a default `category` value, and a `children` prop for badges
- Price formatted with a peso sign and two decimals (for example, ₱1,299.00)
- In-stock and out-of-stock states with a label, faded style, and disabled button
- Cards rendered from an array using `.map()` with unique keys
- Callback prop (`onAddToCart`) that updates a running cart message in the parent
- Responsive grid layout

## How to Run

Run `npm install`, then `npm run dev`, and open http://localhost:5173/

## Guide Questions

**1. What is the difference between props and state?**

Props are data passed from a parent component to a child. The child receives them as read-only inputs. State is data that a component owns and manages itself, and it can change over time using a setter function (such as `setCartCount`). When state changes, the component re-renders.

**2. Why can a child component not modify the props it receives?**

React uses one-way data flow. Props belong to the parent, so a child changing them would make the data hard to track, and different components could disagree about the same value. Keeping props read-only means the data can only be changed in one place (the parent), which makes the app more predictable.

**3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?**

The parent passes a function down as a prop. The data still only flows down, but the child can call that function and pass a value (the product title) as an argument. The function runs inside the parent, so it can use that value to update the parent's own state (the cart count and last added item).

**4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?**

React uses the key to tell which item in a list is which, so it can update, add, or remove only the items that changed. If the key is missing or duplicated, React may show warnings, re-render items unnecessarily, or mix up items, which can cause wrong content or lost state in the wrong card.

**5. What does the children prop allow you to do that a normal prop does not?**

The children prop lets a parent put any JSX content between a component's opening and closing tags, such as a `<span>New</span>` badge, and the component displays it wherever it places `{children}`. A normal prop is passed as an attribute and is usually a simple value, while children makes the component more flexible and lets it wrap different content.