# ABC Flash Cards Angular App

A stylish, interactive ABC flash card web app for toddlers, built with Angular and Angular Material. Features large, friendly visuals and the ability to export all flash cards as a printable PDF—perfect for learning at home or on the go!

## Features

- **Interactive Flash Cards:** Swipe or click to navigate through the alphabet, each card showing a large letter, a friendly emoji image, and a clear word.
- **Stylish Design:** Modern, colorful cards with a playful frame and accessible, large visuals.
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

- `src/app/app.ts` – Main Angular component and logic.
- `src/app/app.html` – Component template.
- `src/app/app.scss` – Styles for the flash cards and layout.
- Uses [Angular Material](https://material.angular.io/) for UI components.

## Customization

- To change card content, edit the `cards` array in `app.ts`.
- To adjust styles, edit `app.scss` or the inline styles in the PDF export logic.

## License

MIT
