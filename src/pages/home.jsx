import { Trans } from "@lingui/react/macro";
import { useEffect } from "react";
import { Link } from "react-router";

import AoMaLink from "@/components/Common/AoMaLink";
import { Form } from "@/components/Common/Form";
import Input from "@/components/Common/Input";
import Popover from "@/components/Common/Popover";
import { defaultLocale, dynamicActivate } from "../i18n";
import { useBearStore } from "../store";

import ReactLogo from "@/assets/icons/react.svg";
import ViteLogo from "@/assets/icons/vite.svg";
import { Cross2Icon } from "@radix-ui/react-icons";
import CarouselContainer from "@/components/Common/Carousel/CarouselContainer";
import Container from "@/components/Common/Container";
import Flex from "@/components/Common/Flex";
import { Button } from "@/components/Common/Button";

function HomePage() {
    const { bears, increasePopulation } = useBearStore();

    useEffect(() => {
        dynamicActivate(defaultLocale);
    }, []);

    return (
        <Container>
            <button onClick={increasePopulation}>count is {bears}</button>
            <div>
                <Link to="/about">
                    <ViteLogo />
                </Link>
                <a href="https://react.dev" target="_blank">
                    <ReactLogo />
                </a>
                <select onChange={(e) => dynamicActivate(e.target.value)}>
                    <option value="vi" defaultChecked>
                        Tiếng việt
                    </option>
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
                <Flex gap={10} direction="col">
                    <Form.Item
                        name={["username", "first"]}
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
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
                        <Input />
                    </Form.Item>
                    <Button type="submit">Submit</Button>
                </Flex>
            </Form>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <CarouselContainer
                    slides={[
                        {
                            id: 1,
                            img: "https://picsum.photos/2000/500",
                            text: "Slide 1",
                        },
                        {
                            id: 2,
                            img: "https://picsum.photos/2000/500",
                            text: "Slide 2",
                        },
                        {
                            id: 3,
                            img: "https://picsum.photos/2000/500",
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
        </Container>
    );
}

export default HomePage;
