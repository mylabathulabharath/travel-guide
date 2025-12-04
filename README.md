# Travel.NZ - New Zealand Travel Website

A modern, responsive travel website built with React + Vite, featuring beautiful UI components and custom CSS styling.

## 🚀 Features

- **4 Main Pages**: Home, Tour, About Us, Contact Us
- **Dynamic Destination Details**: Individual pages for each destination
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Modern UI**: Using shadcn/ui components and TailwindCSS
- **React Router**: Seamless navigation between pages
- **Form Validation**: Contact form with validation and success alerts

## 🎨 Design

- **Color Palette**:
  - Primary: #7EC8F2 (Sky Blue)
  - Secondary: #BEE6FF (Light Cyan)
  - Accent: #005A8D (Navy Blue)
  - Background Gradient: #E3E3E3 → #A3C0D1
  - Text: #1E1E1E (Dark Grey)

- **Styling**: Custom CSS with no framework dependencies. All styles are in `src/index.css`

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── accordion.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── textarea.jsx
│   │   └── alert.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── DestinationCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Tour.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── DestinationDetails.jsx
├── data/
│   └── destinations.js
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Routing
- **Custom CSS** - Styling (no CSS framework)
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## 📝 Pages

### Home
- Hero section with gradient background
- Featured destinations grid
- Call-to-action section

### Tour
- Grid of all available destinations
- Click to view details

### About Us
- Company mission
- Who we are
- Why choose us
- Our values

### Contact Us
- Contact form with validation
- Contact information
- Success alerts

### Destination Details
- Large banner image
- Detailed description
- Hotels (Accordion)
- Flight options (Accordion)
- Price details card
- Book Now button (navigates to Contact)

## 🎯 Key Features

- **Responsive Navigation**: Mobile hamburger menu
- **Dynamic Routing**: URL-based destination pages
- **Form Validation**: Client-side validation with error messages
- **Smooth Animations**: Accordion animations and hover effects
- **Accessible**: Using Radix UI primitives for accessibility

## 📄 License

This project is created for demonstration purposes.

