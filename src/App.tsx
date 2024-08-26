import { Routes, Route, Link } from 'react-router-dom';

import {
  Theme,
  Container,
  Flex,
  Link as RadixLink,
  Box,
} from '@radix-ui/themes';

import HomePage from './components/home.page';
import AboutPage from './components/about.page';
import ContactPage from './components/contact.page';

function App() {
  return (
    <Theme accentColor='blue'>
      <Container size='4' p='4' align='left'>
        <Flex gapX='4'>
          <RadixLink asChild>
            <Link to='/'>Home</Link>
          </RadixLink>
          <RadixLink asChild>
            <Link to='/about'>About</Link>
          </RadixLink>
          <RadixLink asChild>
            <Link to='/contact'>Contact</Link>
          </RadixLink>
        </Flex>

        <Box height='20px' width='100%' />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </Theme>
  );
}

export default App;
