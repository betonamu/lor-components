import { Link } from "react-router";

import { useBearStore } from "@/store";

const AboutPage = () => {
    const { bears, increasePopulation } = useBearStore();
    return (
        <div>
            <Link to="/">Back</Link>
            About page
            <button onClick={increasePopulation}>count is {bears}</button>
        </div>
    );
};
export default AboutPage;
