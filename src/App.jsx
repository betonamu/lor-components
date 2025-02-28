import AoMaLink from "@/components/AoMaLink";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import Popover from "@/components/Popover";
import { useBearStore } from "./store";

import ReactLogo from "@/assets/icons/react.svg";
import ViteLogo from "@/assets/icons/vite.svg";
import { Cross2Icon } from "@radix-ui/react-icons";

import "./App.css";
import CarouselContainer from "./components/Carousel/CarouselContainer";

function App() {
    const { bears, increasePopulation } = useBearStore();

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <ViteLogo />
                </a>
                <a href="https://react.dev" target="_blank">
                    <ReactLogo />
                </a>
            </div>
            <h1>Lor Components</h1>
            <div className="card">
                <button onClick={increasePopulation}>count is {bears}</button>
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
            <p className="read-the-docs">Form</p>
            <Form onFinish={(values) => console.log(values)}>
                <Form.Item
                    name={["username", "first"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input placeholder="username" />
                </Form.Item>
                <Form.Item
                    name={["password", "first"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input placeholder="password" />
                </Form.Item>
                <button type="submit">Submit</button>
            </Form>
            <CarouselContainer
                slides={[
                    {
                        id: 1,
                        img: "https://picsum.photos/500/300",
                        text: "Slide 1",
                    },
                    {
                        id: 2,
                        img: "https://picsum.photos/500/300",
                        text: "Slide 2",
                    },
                    {
                        id: 3,
                        img: "https://picsum.photos/500/300",
                        text: "Slide 3",
                    },
                ]}
                slideToShow={2}
                renderSlide={(slide) => {
                    return (
                        <div>
                            <img src={slide.img} />
                            <div>{slide.text}</div>
                        </div>
                    );
                }}
            />
        </>
    );
}

export default App;
