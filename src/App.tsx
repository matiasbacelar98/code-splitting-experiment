import React from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import { Theme, Container, Spinner } from '@radix-ui/themes';

import HomePage from './components/home.page';
import AboutPage from './components/about.page';
import ContactPage from './components/contact.page';
import ErrorPage from './components/error.page';

import Layout from './components/layout';

import { routes } from './constants';

// Lazy load routes
const AdminPage = React.lazy(() => import('./components/admin.page'));

function App() {
  const navigate = useNavigate();

  return (
    <Theme accentColor='blue'>
      <Container size='4' p='4' align='left'>
        <Routes>
          <Route path={routes['home']} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={routes['about']} element={<AboutPage />} />
            <Route path={routes['contact']} element={<ContactPage />} />
          </Route>

          <Route
            path={routes['admin']}
            element={
              <ErrorBoundary
                FallbackComponent={ErrorPage}
                onReset={() => navigate('/')}
              >
                <React.Suspense fallback={<Spinner size='3' />}>
                  <AdminPage />
                </React.Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </Container>
    </Theme>
  );
}

export default App;
