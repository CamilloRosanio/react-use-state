import { useState } from 'react';
import Languages from './data/languages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {console.log(Languages)}
    </>
  )
}

export default App
