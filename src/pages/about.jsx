import { Link } from "react-router";

import { useBearStore } from "@/store";
import Container from "@/components/Common/Container";

const AboutPage = () => {
  const { bears, increasePopulation } = useBearStore();
  return (
    <Container>
      <Link to="/">Back</Link>
      About page
      <button onClick={increasePopulation}>count is {bears}</button>
    </Container>
  );
};
export default AboutPage;
