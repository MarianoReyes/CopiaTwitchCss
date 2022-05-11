import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {

  return (
    <div css={{
      width: '100vw',
      height: '100vh',

    }}
    >
        hola

    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
