import React, { useState } from 'react'; // Import useState from React
import Search from './components/Search.Component';
import Result from './components/Result.Component';

function App() {
  const [result, setResult] = useState();

  return (
    <main className='h-screen w-screen flex flex-col gap-12 justify-center items-center bg-red-500'>
      <Search setResult={setResult} />
      {result && <Result result={result} />}
    </main>
  );
}

export default App;
