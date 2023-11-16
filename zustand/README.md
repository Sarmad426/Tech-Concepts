# Zustand

**Zustand** is a state management library for the React.js ecosystem. It is a tiny, fast, and scalable state management library that provides an inbuilt hook that helps you access and change the state with the component. Here are the steps to install and use it with Next.js 14:

1. First, you need to install Next.js on your system. You can do this by running the following command: `npx create-next-app my-app`. If you already have Next.js installed, you can skip this step.

2. Next, you need to install Zustand in your Next.js project. You can do this by running the following command: `npm install zustand` or `yarn add zustand`.

3. After installing Zustand, you can create a store in the project folder. You can create a store folder in the Next.js root-level folder. First, import the create method from the Zustand library. Then, use the create method to create a store for the Next.js project. Here is an example code snippet:

```ts
import create from 'zustand'

interface StoreState {
  color: string
  changeColor: () => void
}

const useStore = create<StoreState>((set) => ({
  color: 'white',
  changeColor: () =>
    set((state) => ({
      color: state.color === 'white' ? '#212529' : 'white',
    })),
}))

export default useStore
```

- To use the store, you can import it from the store folder you recently created in your app. Here is an example code snippet:

```tsx
import useStore from '../store/store'

function MyComponent() {
  const { color, changeColor } = useStore()

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}
```
