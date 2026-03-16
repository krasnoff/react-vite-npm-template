# Usage Guide

> ⚠️ **IMPORTANT**: This is a **template repository**. Do not install this as a package. Instead, you should **create your own repository based on this template**, then run `npm install` in your new repository.

## Setup Instructions

1. **Create a new repository from this template** by clicking "Use this template" on GitHub, or by cloning and setting it up as your own project
2. **Clone your new repository** to your local machine
3. **Install dependencies** in your cloned repository:

```bash
npm install
```

## Basic Usage

### 1. Import the component and styles

```tsx
import { Button } from 'react-vite-npm-template';
import 'react-vite-npm-template/styles';
```

### 2. Use the component

```tsx
function MyApp() {
  return (
    <div>
      {/* Primary button (default) */}
      <Button 
        label="Primary Button" 
        onClick={() => alert('Primary clicked!')} 
      />
      
      {/* Secondary button */}
      <Button 
        label="Secondary Button" 
        role="Secondary"
        onClick={() => alert('Secondary clicked!')} 
      />
      
      {/* With custom className */}
      <Button 
        label="Custom Button" 
        role="Primary"
        className="my-custom-class"
        onClick={() => alert('Custom clicked!')} 
      />
      
      {/* Submit button */}
      <Button 
        label="Submit" 
        type="submit"
        role="Primary"
      />
    </div>
  );
}
```

## TypeScript Support

The component is fully typed with TypeScript:

```tsx
import { Button, ButtonProps } from 'react-vite-npm-template';

// You can use the ButtonProps type for your own components
const MyButtonWrapper: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## CSS Customization

The component uses CSS modules internally, but you can override styles by:

1. **Using className prop**: Add your own CSS classes
2. **CSS specificity**: Target the component with higher specificity
3. **CSS custom properties**: The component could be enhanced to support CSS variables

Example of custom styling:

```css
/* In your CSS file */
.my-custom-button {
  border-radius: 10px !important;
  font-size: 18px !important;
}
```

```tsx
<Button 
  label="Custom Styled" 
  className="my-custom-button"
/>
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | **Required.** The text to display on the button |
| `role` | `'Primary' \| 'Secondary'` | `'Primary'` | Visual style variant |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `() => void` | - | Click handler function |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `React.ButtonHTMLAttributes<HTMLButtonElement>` | - | All standard button props |

## Important Notes

- **Always import the styles**: Don't forget to import `'react-vite-npm-template/styles'`
- **CSS Modules**: The component uses CSS modules internally, so class names are scoped
- **Extensibility**: The component accepts all standard HTML button attributes
- **TypeScript**: Full TypeScript support with exported types