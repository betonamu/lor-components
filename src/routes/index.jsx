import { useBearStore } from "@/store";

const HomePage = () => {
    const { bears, increasePopulation } = useBearStore();
    return (
        <div>
            Home page
            <button onClick={increasePopulation}>count is {bears}</button>
        </div>
    );
};

export default HomePage;
