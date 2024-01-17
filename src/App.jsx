import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Popover from '@/components/Popover'

import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import AoMaLink from './components/AoMaLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <AoMaLink>Hover vô sẽ thấy rất ảo ma</AoMaLink>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        <Popover>
          Toi la ai
          <Popover.Close>
            <Cross2Icon/>
          </Popover.Close>
        </Popover>
      </p>
    </>
  )
}

export default App
