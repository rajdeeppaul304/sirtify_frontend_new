# Sirtify - Professional Career Development Platform

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS, featuring a professional component architecture.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── ui/              # Base UI components (Button, Card, etc.)
│   └── index.ts         # Component exports
├── constants/            # Static data and configuration
├── types/                # TypeScript type definitions
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── assets/               # Images and static assets
└── App.tsx              # Main application component
```

## 🚀 Features

- **Professional Component Architecture**: Modular, reusable components
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: Semantic HTML and ARIA support

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#f97316)
- **Secondary**: Dark Blue-Gray (#374151)
- **Background**: Light Cream (#FEF7F1)
- **Text**: Dark Gray (#111827)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large scale typography
- **Body**: Readable, medium weight text

## 🧩 Components

### Layout Components
- `Header`: Navigation bar with logo, menu, and auth buttons
- `Footer`: Site footer (to be implemented)

### Section Components
- `HeroSection`: Main landing section with CTA and SPP options
- `AboutSection`: Company information with three-step process

### UI Components
- `Button`: Reusable button with multiple variants
- `Card`: Consistent card styling component

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 🔧 Customization

### Adding New Components
1. Create component in appropriate directory
2. Export from `src/components/index.ts`
3. Import and use in your pages

### Styling
- Use Tailwind CSS classes for consistent styling
- Follow the established design system
- Maintain responsive design principles

### Data Management
- Add new data to `src/constants/data.ts`
- Update types in `src/types/index.ts`
- Use constants in components for maintainability

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Follow the established component structure
2. Maintain TypeScript types
3. Use consistent naming conventions
4. Add proper documentation
5. Test responsive behavior
