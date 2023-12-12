## introduction
react is a library to write reusable components. it's not a framework, angular is a framework as that covers more ground. 
a huge part of react is on top of JSX, javascript xml. it's an extension of javascript that lets us write html-like code within javascript.

```jsx
export default function App() {
  return <p>Hello, World!</>
}
```

## component

a react component is a reusable block of UI that renders JSX markup based on props and state.
```jsx
function Card(props) {
  return (<div className='Card'>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </div>)
}
```

