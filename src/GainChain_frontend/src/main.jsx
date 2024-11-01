import { html, render } from 'lit-html';
import App from './App';
import './index.scss';

const app = new App();

// Render the app to the root element in the DOM
const root = document.getElementById('root');

if (root) {
  render(app.render(), root); // Call the public render method
} else {
  console.error('Root element not found');
}
