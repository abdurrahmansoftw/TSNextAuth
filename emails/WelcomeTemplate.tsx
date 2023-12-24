import { Body, Container, Html, Preview, Text } from "@react-email/components";
import Link from "next/link";

const WelcomeTemplate = ({name} : {name:string}) => {
  return (
    <Html>
    <Preview> Welcome  Abourd</Preview>
    <Body>
      <Container> 
        <Text> Hello {name}</Text>
        <Link href="https://abdurrahmans.netlify.app" > www.abdurrahmans.neltify.app</Link>
        </Container>
    </Body>
</Html>
  );
};

export default WelcomeTemplate;
