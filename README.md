# LinkLux - Premium Link-in-Bio Platform

A luxurious, premium link-in-bio product built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Premium Design**: Glassmorphism effects, gold accents, and elegant animations
- **Admin Dashboard**: Manage profile, links, and view analytics
- **Public Profile**: Beautiful, responsive profile page for your audience
- **Smooth Animations**: Buttery smooth transitions with Framer Motion
- **Fully Responsive**: Looks stunning on all devices
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels

## 🎨 Design System

- **Colors**: Deep charcoal (#151416), warm cream, gold accents
- **Typography**: Playfair Display (headlines) + Inter (body)
- **Effects**: 14% white blur, 16px rounded corners, neon outlines
- **Animations**: Scale, lift, fade, and stagger effects

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 📦 Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Premium button component with variants
│   ├── LinkCard.tsx        # Animated link card component
│   ├── Nav.tsx            # Navigation component
│   └── ui/                # shadcn/ui components
├── pages/
│   ├── Index.tsx          # Landing page
│   ├── AdminDashboard.tsx # Admin dashboard
│   ├── PublicProfile.tsx  # Public profile view
│   └── NotFound.tsx       # 404 page
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   └── utils.ts          # Utility functions
└── index.css             # Design system & global styles
```

## 🎯 Key Components

### Button Component
Premium button with multiple variants:
- `primary`: Gold gradient with glow effect
- `secondary`: Glass card style
- `ghost`: Transparent with hover effect
- `neon`: Neon outline with glow

### LinkCard Component
Animated card for displaying links with:
- Hover lift effect
- Click tracking display
- Drag handle (visual only)
- Icon support

### Nav Component
Glassmorphism navigation with:
- Logo and branding
- Context-aware navigation
- Smooth transitions

## 🎨 Using the Design System

All colors and styles are defined in `src/index.css` and `tailwind.config.ts`. Use semantic tokens:

```tsx
// ✅ Correct - Use design system
<Button variant="neon">Click Me</Button>
<div className="glass-card">Content</div>

// ❌ Avoid - Don't use direct colors
<button className="bg-[#6b5cff]">Click Me</button>
```

### Custom Utility Classes

- `.glass-card` - Glassmorphism effect
- `.hover-lift` - Lift animation on hover
- `.neon-outline` - Neon border effect
- `.text-gradient` - Purple to blue gradient text
- `.gold-gradient` - Gold gradient text

## 🔧 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **shadcn/ui** - UI components
- **React Icons** - Icon library

## 📱 Routes

- `/` - Landing page
- `/admin` - Admin dashboard (manage profile and links)
- `/@username` - Public profile view
- `*` - 404 Not Found page

## 🎭 Animation Variants

All animation variants are centralized in `src/lib/animations.ts`:

- `pageTransition` - Page enter/exit animations
- `staggerContainer` - Stagger children animations
- `fadeInUp` - Fade and slide up
- `scaleIn` - Scale with bounce
- `buttonHover` - Button hover/tap effects
- `cardHover` - Card lift on hover
- `glowEffect` - Pulsing glow animation

## 🎨 Customization

### Colors
Edit `src/index.css` to customize the color palette:

```css
:root {
  --primary: 42 88% 65%;      /* Gold accent */
  --accent: 250 70% 65%;       /* Purple gradient */
  --background: 260 10% 8%;    /* Deep charcoal */
}
```

### Typography
Fonts are loaded from Google Fonts in `index.html`:
- Playfair Display (headlines)
- Inter (body text)

### Animations
Adjust animation timings in `src/lib/animations.ts` or use Tailwind's animation utilities.

## 🚢 Deployment

Build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

Deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 License

This is a premium sellable product. Customize and sell as your own!

## 🤝 Support

For questions or issues, refer to the component documentation in the code or check the official docs:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
