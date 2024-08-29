import { Heading, Text, Flex } from '@radix-ui/themes';

function HomePage() {
  return (
    <Flex gapY='4' direction='column'>
      <Heading as='h1' color='blue'>
        Home Page
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        maxime?
      </Text>
    </Flex>
  );
}

export default HomePage;
