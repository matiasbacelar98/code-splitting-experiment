import { Button, Flex, Heading, Strong } from '@radix-ui/themes';

export default function ErrorPage({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) {
  return (
    <Flex align='center' justify='center'>
      <Heading as='h1' color='red'>
        Something went wrong
      </Heading>
      <Strong>{error.message}</Strong>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Flex>
  );
}
