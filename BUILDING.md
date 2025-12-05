# CoCoDa Website

This is the source code for the [CoCoDa website](https://snsf-cocoda.github.io), built with React and Vite.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Local Development

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at `http://localhost:5173` (or the URL shown in terminal).

## Project Structure

-   `src/components`: UI Components (Hero, Navbar, Team, Footer).
-   `src/data/team.ts`: Data file containing team member information.
-   `public`: Static assets like images and logos.

## Updating Content

### Adding/Updating Team Members

1.  Open `src/data/team.ts`.
2.  Add or modify objects in the `teamMembers` array.
3.  **Photos**: Place team member photos in the `public/team` directory (create it if it doesn't exist).
    -   Example: `public/team/jane-doe.jpg`.
    -   Reference in `team.ts` as `/team/jane-doe.jpg`.
    -   If using external URLs, just paste the URL.

### Updating the Logo

The main logo is located at `public/cocoda-logo.png`. Replace this file to update the logo across the site.

## Deployment

This project uses **GitHub Actions** to automatically deploy to GitHub Pages.

1.  Push changes to the `main` branch.
2.  The Action defined in `.github/workflows/deploy.yml` will run.
3.  Once completed, the site will be live at `https://snsf-cocoda.github.io`.

**Note**: Ensure GitHub Pages is configured in the repository settings:
-   Go to Settings -> Pages.
-   Source: GitHub Actions.

## License

[Add License Here]
