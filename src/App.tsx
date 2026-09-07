import { useState } from 'react';
import type { Votes } from './votes';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return <h1>React Cafe</h1>;
}

export default App;