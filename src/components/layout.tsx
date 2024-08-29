import { Outlet } from 'react-router-dom';

import { Box } from '@radix-ui/themes';

import Navbar from './navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Box height='20px' width='100%' />
      <Outlet />
    </>
  );
}

export default Layout;
