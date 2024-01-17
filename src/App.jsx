import { useState } from "react";
import ReactLogo from "./assets/react.svg";
import ViteLogo from "./assets/vite.svg";
import "./App.css";
import Popover from "@/components/Popover";

import { Cross2Icon } from "@radix-ui/react-icons";
import AoMaLink from "./components/AoMaLink";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <ViteLogo />
                </a>
                <a href="https://react.dev" target="_blank">
                    <ReactLogo/>
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
            <AoMaLink>Rat la ao</AoMaLink>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
                <Popover>
                    Toi la ai
                    <Popover.Close>
                        <Cross2Icon />
                    </Popover.Close>
                </Popover>
            </p>
        </>
    );
}

export default App;
