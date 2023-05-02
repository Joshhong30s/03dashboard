I'm making a dashboard template for coffee chain company, please help me with following requirements
The stack will be Next.js, Tailwind, Typescript, chart will be made with react recharts, table will be made with react table, so please make your design in according with the stack.

## Overview

The app will be consisted of 3 sections:

1. Sidebar menu, always on the left across the app
2. Main Area for displaying charts based on different pages
3. UserProfile consist of user profile, calendar, always on the right across the app

4 pages will be Under the src/pages :

- overview.tsx
- comparison.tsx
- evaluation.tsx
- dataimport.tsx

## sidebar (always on the left across the app)

The sidebar will contain following menu tags, always on the left across the app

── Sidebar
│ ├── Site Overview -> overview.tsx
│ ├── Site Comparison -> comparison.tsx
│ ├── Site Evaluation -> evaluation.tsx
│ ├── Site Data Import -> dataimport.tsx

mobile view: a button on the top-left for user to click to make sidebar to appear full width and height of screen, toogle to disappear

## Userbar (always on the right across the app)

User Profile - consist of user pic, title
Canlendar - calendar, add event button, and event list for the day

mobile view: a button on the top-right for user to click to make userbar to appear full width and height of screen, toogle to disappear

## Main Area for each page

- overview.tsx

function: when user select a site, it will display following elements:

1st div: including 3 info cards to display demogrphic, business, and price separately. each info card will have a chart made with react rechart

2nd div: a full-width chart area to display chart for weekday traffic

3rd div: a full-width table area to display chart for weekend traffic

mobile view: each elements and its chart will be displayed one by one for user to scroll down

please generate overview.tsx

- comparison.tsx
- evaluation.tsx
- dataimport.tsx

---

note:

- Please generate html with Tailwind css accordingly, and basic JS for functionalities for now.
- Please make it responsive.
- We will use recharts library later for creating charts, so please consider it when making html & css layout. And you can provide codes with planned project folder structure.
