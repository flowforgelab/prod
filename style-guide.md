# Flow Forge Lab Style Guide

## Design Principles
- Modern, minimalist tech aesthetic
- Dark theme with high contrast
- Emphasis on readability and user experience
- Smooth animations and transitions
- Mobile-first responsive design

## Color Palette

### Primary Colors
- **Background Dark**: #0A0A0F (Deep charcoal)
- **Background Secondary**: #121218 (Soft black)
- **Background Tertiary**: #1A1A21 (Card backgrounds)

### Text Colors
- **Primary Text**: #FFFFFF (Pure white)
- **Secondary Text**: #A8A8B3 (Muted gray)
- **Tertiary Text**: #6B6B7B (Subtle gray)

### Accent Colors
- **Primary Accent**: #00E88F (Vibrant teal-green)
- **Primary Hover**: #00D080 (Darker teal)
- **Secondary Accent**: #5B5BFF (Electric blue)
- **Error**: #FF5B5B (Soft red)
- **Warning**: #FFB800 (Amber)

### Border & Surface Colors
- **Border Default**: #2A2A35 (Subtle border)
- **Border Hover**: #3A3A45 (Active border)
- **Surface Overlay**: rgba(255, 255, 255, 0.05)

## Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Font Sizes
- **Display**: 4.5rem (72px) - Hero headlines
- **H1**: 3.5rem (56px) - Page titles
- **H2**: 2.5rem (40px) - Section headers
- **H3**: 1.875rem (30px) - Subsection headers
- **H4**: 1.5rem (24px) - Card headers
- **Body Large**: 1.125rem (18px) - Lead text
- **Body**: 1rem (16px) - Regular text
- **Small**: 0.875rem (14px) - Supporting text

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System
Base unit: 8px

- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 4rem (64px)
- **3xl**: 6rem (96px)

## Layout
- **Max Container Width**: 1200px
- **Grid System**: 12-column grid
- **Gutter**: 2rem (32px)

## Components

### Buttons
- **Border Radius**: 50px (fully rounded)
- **Padding**: 0.75rem 2rem
- **Transition**: all 0.2s ease
- **Shadow on Hover**: 0 8px 24px rgba(0, 232, 143, 0.2)

### Cards
- **Background**: #1A1A21
- **Border**: 1px solid #2A2A35
- **Border Radius**: 16px
- **Padding**: 2rem
- **Shadow**: 0 4px 24px rgba(0, 0, 0, 0.1)

### Input Fields
- **Background**: #1A1A21
- **Border**: 1px solid #2A2A35
- **Border Radius**: 8px
- **Padding**: 1rem 1.5rem
- **Focus Border**: #00E88F

## Animations
- **Default Duration**: 200ms
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Hover Scale**: 1.02
- **Active Scale**: 0.98

## Gradients
- **Primary Gradient**: linear-gradient(135deg, #00E88F 0%, #00D080 100%)
- **Dark Gradient**: linear-gradient(180deg, #0A0A0F 0%, #121218 100%)
- **Subtle Gradient**: linear-gradient(135deg, rgba(0, 232, 143, 0.1) 0%, rgba(91, 91, 255, 0.1) 100%)

## Icons
- **Size Default**: 24px
- **Size Small**: 20px
- **Size Large**: 32px
- **Stroke Width**: 2px
- **Style**: Feather Icons or similar minimalist style