# Nexus - SaaS Product Suite Website

A minimalist, high-performance SaaS product suite website inspired by Google's design language.

## 🚀 Project Overview

This project implements a clean, airy, and premium user interface for a fictional SaaS company "Nexus". It focuses on clarity, whitespace, and strong typography, avoiding clutter and traditional corporate UI patterns.

## 📂 File Structure

```
/project-root
│
├── index.html          # Home page
├── products.html       # Product gallery with filtering
├── product-detail.html # Product detail page
├── pricing.html        # Pricing tiers
├── about.html          # Company mission
├── careers.html        # Job listings/Culture
├── resources.html      # Blog/Docs
├── contact.html        # Contact form
├── security.html       # Trust center
│
├── header.html         # Dynamically loaded header
├── footer.html         # Dynamically loaded footer
│
├── /assets
│   ├── /css
│   │   ├── styles.css      # Core styles & variables
│   │   └── typography.css  # Font definitions
│   ├── /js
│   │   ├── main.js         # Header/Footer loader, Filter logic
│   │   └── animations.js   # Intersection Observer
│   ├── /images             # (Placeholder)
│   └── /videos             # (Placeholder)
```

## 🛠️ Tech Stack & Features

- **HTML5**: Semantic, accessible markup.
- **CSS3**: Uses CSS Custom Properties for theming. Mobile-first responsive design.
- **JavaScript (Vanilla)**:
  - Dynamic Header/Footer injection.
  - Intersection Observer for scroll animations.
  - Client-side product filtering and live search.
- **No Frameworks**: Pure HTML/CSS/JS.

## 🎨 Design Decisions

- **Color Palette**: Uses Google-inspired colors (`#4285F4`, `#EA4335`, `#FBBC05`, `#34A853`) on a dominant white/surface background.
- **Typography**: Uses the system font stack favoring geometric sans-serifs (similar to Product Sans) with `1.6` line-height for readability.
- **Layout**: Heavy use of whitespace, rounded corners (8-12px), and subtle 1px borders instead of heavy shadows (Flat Design 2.0).
- **Motion**: Subtle fade-up animations on scroll to guide the user's attention.

## 📦 Deployment via GitHub Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to Repository Settings > Pages.
   - Select `main` branch as source.
   - Save.

## 🖥️ Local Development

To run locally, you need a local server because of the `fetch()` calls used for the header/footer injection (CORS policy blocks file:// protocol for fetch).

Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

Using VS Code:
- Install "Live Server" extension.
- Right-click `index.html` > "Open with Live Server".
