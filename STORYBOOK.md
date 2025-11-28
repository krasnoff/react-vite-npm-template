# Storybook Development Guide

This guide explains how to use Storybook for developing and documenting components in this React Vite component library template.

## Overview

Storybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and test components independently from your application's business logic, data, and context.

## Getting Started

### Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will launch Storybook at `http://localhost:6006` where you can view and interact with your components.

### Building Storybook

To build a static version of Storybook for deployment:

```bash
npm run build-storybook
```

This creates a `storybook-static` folder with the built Storybook application.

## Writing Stories

Stories are written in TypeScript files with a `.stories.ts` or `.stories.tsx` extension. Each story represents a specific state or variant of your component.

### Basic Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { YourComponent } from './your-component';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define controls for your component props
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props for your component
  },
};

export const Variant: Story = {
  args: {
    // Props for a specific variant
  },
};
```

### Story Organization

- Place story files alongside your components: `src/components/my-component/my-component.stories.ts`
- Use descriptive titles following the pattern: `Category/ComponentName`
- Group related components under the same category

### Example: Button Component Story

The project includes a complete example with the Button component:

```typescript
// src/components/my-button/my-button.stories.ts
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
    role: 'Primary'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    role: 'Secondary'
  },
};
```

## Key Features

### 1. Interactive Controls

Storybook automatically generates controls for your component props, allowing you to:
- Test different prop values in real-time
- Verify component behavior with various inputs
- Share interactive examples with team members

### 2. Automatic Documentation

Using the `autodocs` tag generates automatic documentation from:
- Component prop types (TypeScript interfaces)
- JSDoc comments
- Story examples

### 3. Actions Panel

Monitor component interactions and events:
- Click handlers
- Form submissions
- Custom events

### 4. Accessibility Testing

Built-in accessibility checks help ensure your components are inclusive and follow best practices.

## Best Practices

### 1. Comprehensive Coverage

Create stories for:
- Default states
- All prop variations
- Edge cases (empty data, long text, etc.)
- Interactive states (hover, focus, disabled)
- Error states

### 2. Meaningful Story Names

Use descriptive names that clearly indicate what the story demonstrates:

```typescript
export const Default: Story = { /* ... */ };
export const WithLongText: Story = { /* ... */ };
export const DisabledState: Story = { /* ... */ };
export const LoadingState: Story = { /* ... */ };
```

### 3. Use Controls Effectively

Define argTypes to create meaningful controls:

```typescript
argTypes: {
  size: {
    control: { type: 'select' },
    options: ['small', 'medium', 'large'],
  },
  disabled: {
    control: { type: 'boolean' },
  },
  children: {
    control: { type: 'text' },
  },
}
```

### 4. Document Component Behavior

Add parameters to provide context:

```typescript
parameters: {
  docs: {
    description: {
      component: 'A versatile button component with multiple variants and states.',
    },
  },
}
```

## Development Workflow

1. **Create Component**: Build your React component with TypeScript
2. **Write Stories**: Create comprehensive stories covering all use cases
3. **Test Interactively**: Use Storybook to test component behavior
4. **Document**: Ensure proper JSDoc comments and story descriptions
5. **Review**: Share Storybook with team members for feedback
6. **Integration**: Use components in your main application

## Advanced Features

### Decorators

Apply common layouts or providers to multiple stories:

```typescript
export default {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
};
```

### Parameters

Customize Storybook behavior for specific stories:

```typescript
export const Example: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
```

### Play Functions

Simulate user interactions for automated testing:

```typescript
import { userEvent, within } from '@storybook/test';

export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
};
```

## Troubleshooting

### Common Issues

1. **Stories not appearing**: Ensure story files follow the naming convention (`.stories.ts` or `.stories.tsx`)
2. **Controls not working**: Check that your component props are properly typed with TypeScript
3. **Styling issues**: Verify that CSS modules and global styles are properly imported

### Configuration

Storybook configuration is located in the `.storybook` directory:
- `main.ts`: Main Storybook configuration
- `preview.ts`: Global decorators and parameters
- `vitest.setup.ts`: Testing setup integration

## Resources

- [Official Storybook Documentation](https://storybook.js.org/docs)
- [Storybook for React](https://storybook.js.org/docs/get-started/react-vite)
- [Writing Stories Guide](https://storybook.js.org/docs/writing-stories)
- [Component Story Format (CSF)](https://storybook.js.org/docs/api/csf)