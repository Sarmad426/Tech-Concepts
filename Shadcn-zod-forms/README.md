# Form Validation usign `react-hook-form` and `zod`

## 1. Introduction

In React applications, managing forms can be made easier with libraries like `react-hook-form` for state management and `zod` for form data validation.

## 2. Prerequisites

Before you begin, ensure that you have the following packages installed:

```bash
npm install react-hook-form zod @hookform/resolvers/zod
```

## 3. Setting up `react-hook-form` with `zod`

First, let's set up a basic React functional component with `react-hook-form` and `zod` for form management and validation.

```tsx
// Import necessary dependencies
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define your form schema using zod
const schema = z.object({
  username: z.string().min(3, 'Too short').max(20, 'Too long').required('Required'),
  password: z.string().min(6, 'Too short').required('Required'),
});

// Define types for form data
type FormInputs = {
  username: string;
  password: string;
};

// Create the React component
const SignUpForm: React.FC = () => {
  // Initialize react-hook-form
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username:</label>
      <input type="text" {...register('username')} />
      <p>{formState.errors.username?.message}</p>

      <label>Password:</label>
      <input type="password" {...register('password')} />
      <p>{formState.errors.password?.message}</p>

      <button type="submit" disabled={formState.isSubmitting}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
```

In this example, we've created a simple sign-up form with a username and password field. The `zod` schema defines validation rules for these fields.

### 4. Input Types Templates

Let's create templates for various input types:

#### Text Input

```tsx
<label>Text Input:</label>
<input type="text" {...register('textInput')} />
```

#### Email Input

```tsx
<label>Email Input:</label>
<input type="email" {...register('emailInput')} />
```

#### Checkbox

```tsx
<label>
  <input type="checkbox" {...register('checkboxInput')} />
  Checkbox
</label>
```

#### Radio

```tsx
<label>
  <input type="radio" value="option1" {...register('radioInput')} />
  Option 1
</label>
<label>
  <input type="radio" value="option2" {...register('radioInput')} />
  Option 2
</label>
```

#### Select Box

```tsx
<label>Select Box:</label>
<select {...register('selectInput')}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

#### Datalist

```tsx
<label>
  Datalist:
  <input list="datalistOptions" {...register('datalistInput')} />
  <datalist id="datalistOptions">
    <option value="Option 1" />
    <option value="Option 2" />
  </datalist>
</label>
```

### 5. Creating a Form with Various Inputs

Now, let's create a form that includes all the input types mentioned above.

```tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  textInput: z.string().required('Required'),
  emailInput: z.string().email('Invalid email').required('Required'),
  checkboxInput: z.boolean().required('Required'),
  radioInput: z.string().required('Required'),
  selectInput: z.string().required('Required'),
  datalistInput: z.string().required('Required'),
});

type FormInputs = {
  textInput: string;
  emailInput: string;
  checkboxInput: boolean;
  radioInput: string;
  selectInput: string;
  datalistInput: string;
};

const AllInputsForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Include the input templates mentioned above */}
      {/* ... */}
      <button type="submit" disabled={formState.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default AllInputsForm;
```

In this example, we've created a form with all the mentioned input types. Customize the form structure and styles according to your application's design.

Feel free to copy and paste these code snippets into your project, and adjust them based on your specific requirements.
