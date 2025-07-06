
# EduKids Flash Learning App (ABC Flash Cards & Bedtime Book)

A stylish, interactive learning web app for toddlers, built with Angular and Angular Material. Features:
- **ABC Flash Cards:** Large, friendly visuals and the ability to export all flash cards as a printable PDF—perfect for learning at home or on the go!
- **Bedtime Book:** A cozy, interactive bedtime storybook with beautiful illustrations.

## Features

- **Interactive Flash Cards:** Swipe or click to navigate through the alphabet, each card showing a large letter, a friendly emoji image, and a clear word.
- **Bedtime Book:** Read a gentle, illustrated bedtime story with interactive visuals.
- **Stylish Design:** Modern, colorful cards and book pages with playful frames and accessible, large visuals.
- **PDF Export:** Export all flash cards to a print-ready PDF, arranged 3 cards per row and 3 rows per page, matching the web look.
- **Responsive:** Works on desktop and mobile browsers.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1. Clone this repository or copy the project files.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   ng serve
   ```

4. Open [http://localhost:4200](http://localhost:4200) in your browser.

### PDF Export

- Click the **PDF** button in the toolbar to export all flash cards as a printable PDF.
- Cards are arranged 3 per row and 3 rows per page, with stylish frames.


## Project Structure

- `src/app/app.ts` – Main standalone Angular root component and logic.
- `src/app/app.html` – Root component template.
- `src/app/app.scss` – Global styles and layout.
- `src/app/app-routing.module.ts` – App routing configuration.
- `src/app/dashboard/` – Dashboard feature (standalone component).
- `src/app/flash-card/flash-card-page.component.ts` – Flash card page (standalone component, handles navigation and PDF export).
- `src/app/flash-card/flash-card.component.ts` – Flash card UI component.
- `src/app/flash-card/flash-card.model.ts` – TypeScript interfaces/models for flash cards.
- `src/app/flash-card/flash-card.module.ts` – Flash card feature module (for lazy loading).
- `src/app/bed-time-book/bed-time-book.component.ts` – Bed Time Book feature (standalone component).
- `src/app/assets/` – Static assets (images, icons, etc.).
- Uses [Angular Material](https://material.angular.io/) for UI components and theming.

### Routing & Lazy Loading
- Feature modules like `flash-card` are set up for lazy loading to optimize performance.
- Routing is managed in `app-routing.module.ts` and feature route files.

### Forms & State Management
- Uses Angular Reactive Forms for any form handling and validation.
- State is managed using Angular services for simplicity and maintainability.


### Testing
- Unit tests are provided for components and services using Angular's testing utilities.
- End-to-end (E2E) tests are written with [Cypress](https://www.cypress.io/):
  - `cypress/e2e/flash-cards.cy.ts` – E2E tests for the Flash Cards feature (navigation, PDF export, etc.)
  - `cypress/e2e/bedtime-book.cy.ts` – E2E tests for the Bedtime Book feature (cover, navigation, illustrations)

#### Running Cypress Tests

1. Start the development server:
   ```sh
   ng serve
   ```
2. In another terminal, open Cypress:
   ```sh
   npx cypress open
   ```
3. Select a test to run in the Cypress UI.

## Customization

- To change flash card content, edit the `cards` array in `flash-card-page.component.ts`.
- To adjust styles, edit `app.scss` for global styles or the relevant component `.scss` files.
- For PDF export layout, update the logic in `flash-card-page.component.ts`.

## License

MIT
