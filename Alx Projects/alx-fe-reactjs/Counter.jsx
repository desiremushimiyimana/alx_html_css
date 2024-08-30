import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
  }
  
  export default Counter;
  const [count, setCount] = useState(0);
<p>Current Count: {count}</p>
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App;
  