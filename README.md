# React Vite Component Library Template

A modern React component library template built with Vite, TypeScript, and CSS Modules. This template provides a complete setup for developing and distributing reusable React components to the NPM registry.

> ⚠️ **IMPORTANT**: This is a **template repository**. Do not install this as a package. Create your own repository based on this template first, then run `npm install` in your new repository.

## Features

- 🚀 **Vite** - Fast build tool and development server
- 📦 **TypeScript** - Full type safety and IntelliSense support
- 🎨 **CSS Modules** - Scoped styling with automatic class name hashing
- 📚 **Storybook** - Component documentation and development environment
- 🧪 **Vitest** - Fast unit testing framework
- 🎭 **Playwright** - End-to-end testing capabilities
- 🔧 **ESLint** - Code linting and formatting
- 📖 **JSDoc** - Comprehensive component documentation

## Quick Start

### Setup From Template

1. **Create a new repository from this template** using GitHub's "Use this template" option
2. **Clone your new repository** to your local machine
3. **Install dependencies** inside your cloned repository:

```bash
npm install
```

### Basic Usage

```tsx
import { Button } from 'react-vite-npm-template';
import 'react-vite-npm-template/styles';

function App() {
  return (
    <Button 
      label="Click me!" 
      role="Primary" 
      onClick={() => alert('Hello!')} 
    />
  );
}
```

## Components

### Button Component

A customizable button component with TypeScript support, CSS Modules styling, and multiple variants.

**Props:**
- `label` - The text to display on the button
- `role` - Visual style variant (`Primary` | `Secondary`)
- `onClick` - Click handler function
- `type` - HTML button type (`button` | `submit` | `reset`)
- All standard HTML button attributes

## Documentation

For detailed usage instructions and examples, see:
- **[USAGE.md](./USAGE.md)** - Complete usage guide with examples and best practices
- **[STORYBOOK.md](./STORYBOOK.md)** - Storybook development guide for component development and documentation
- **[NPM_DEPLOYMENT.md](./NPM_DEPLOYMENT.md)** - Deployment checklist and publishing instructions

## Development

This template includes a complete development environment:

- **Storybook**: Interactive component development and documentation
- **Vitest**: Unit testing with React Testing Library
- **Playwright**: End-to-end testing capabilities
- **ESLint**: Code quality and consistency checks

## License

MIT
