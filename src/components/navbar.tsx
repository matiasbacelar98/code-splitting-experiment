import { Link, useLocation } from 'react-router-dom';

import { TabNav } from '@radix-ui/themes';

import { routes } from '../constants';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <TabNav.Root color='blue'>
      <TabNav.Link asChild active={pathname === routes['home']}>
        <Link to={routes['home']}>Home</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === routes['about']}>
        <Link to={routes['about']}>About</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === routes['contact']}>
        <Link to={routes['contact']}>Contact</Link>
      </TabNav.Link>
      <TabNav.Link asChild active={pathname === routes['admin']}>
        <Link to={routes['admin']}>Admin</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
}

export default Navbar;
