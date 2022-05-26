import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/extensions
import App from './app.js';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
