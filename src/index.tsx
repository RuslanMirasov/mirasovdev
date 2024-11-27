import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from 'contexts/ModalContext';
import { App, ScroolToTopOnRender } from 'components';
import 'assets/utils/languages';
import 'index.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter
        basename="/"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ModalProvider>
          <ScroolToTopOnRender />
          <App />
        </ModalProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
