import { Heading, Text, Flex } from '@radix-ui/themes';

function ContactPage() {
  return (
    <Flex gapY='4' direction='column'>
      <Heading as='h1' color='blue'>
        Contact page
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        maxime?
      </Text>
    </Flex>
  );
}

export default ContactPage;
