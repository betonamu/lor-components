import { useBearStore } from "@/store";

const AboutPage = () => {
    const { bears, increasePopulation } = useBearStore();
    return (
        <div>
            About page
            <button onClick={increasePopulation}>count is {bears}</button>
        </div>
    );
};
export default AboutPage;
