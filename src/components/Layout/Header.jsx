import { Link } from "react-router";

import Container from "@/components/Common/Container";
import Flex from "../Common/Flex";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      className="w-full h-[50px] bg-gray-100 shadow-md"
    >
      <Container>
        <Flex className="w-full" gap={5} align="center">
          <h1 className="text-2xl uppercase shrink-0">
            <Link to="/">My Profile</Link>
          </h1>
          <Flex className="w-full" gap={[0, 8]} align="center" justify="center">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
