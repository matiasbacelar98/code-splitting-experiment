import { Heading, Text, Flex } from '@radix-ui/themes';

function AboutPage() {
  return (
    <Flex gapY='4' direction='column'>
      <Heading as='h1' color='blue'>
        About page
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        maxime?
      </Text>
    </Flex>
  );
}

export default AboutPage;
