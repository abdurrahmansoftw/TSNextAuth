import { Body, Container, Html, Preview, Tailwind, Text } from "@react-email/components";
import Link from "next/link";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">
              Hello {name}
            </Text>
            <Link href="https://codewithmosh.com">
              www.codewithmosh.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
