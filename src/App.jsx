import { Trans } from "@lingui/react/macro";
import { useEffect } from "react";
import { Link } from "react-router";

import AoMaLink from "@/components/AoMaLink";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import Popover from "@/components/Popover";
import CarouselContainer from "./components/Carousel/CarouselContainer";
import { defaultLocale, dynamicActivate } from "./i18n";
import { useBearStore } from "./store";

import ReactLogo from "@/assets/icons/react.svg";
import ViteLogo from "@/assets/icons/vite.svg";
import { Cross2Icon } from "@radix-ui/react-icons";

import "./App.css";

function App() {
    const { bears, increasePopulation } = useBearStore();

    useEffect(() => {
        dynamicActivate(defaultLocale);
    }, []);

    return (
        <>
            <div>
                <Link to="/about">
                    <ViteLogo />
                </Link>
                ngu
                <a href="https://react.dev" target="_blank">
                    <ReactLogo />
                </a>
                <select onChange={(e) => dynamicActivate(e.target.value)}>
                    <option value="vi" defaultChecked>Tiếng việt</option>
                    <option value="en">English</option>
                </select>
            </div>
            <h1>Lor Components</h1>
            <div className="card">
                <button onClick={increasePopulation}>count is {bears}</button>
                <Trans>
                    <p>
                        Chỉnh sửa <code>src/App.jsx</code> và lưu để test HMR
                    </p>
                </Trans>
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
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <CarouselContainer
                    slides={[
                        {
                            id: 1,
                            img: "https://picsum.photos/2000/300",
                            text: "Slide 1",
                        },
                        {
                            id: 2,
                            img: "https://picsum.photos/2000/300",
                            text: "Slide 2",
                        },
                        {
                            id: 3,
                            img: "https://picsum.photos/2000/300",
                            text: "Slide 3",
                        },
                    ]}
                    renderSlide={(slide) => {
                        return (
                            <div>
                                <img src={slide.img} />
                                <div>{slide.text}</div>
                            </div>
                        );
                    }}
                />
            </div>
        </>
    );
}

export default App;
