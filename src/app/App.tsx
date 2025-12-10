/**
 * App Component
 * 
 * Main application component with router setup.
 * The AppRouter handles all routing logic and code splitting.
 */

import { AppRouter } from '../routes/routes';
import './App.css';

function App() {
  return <AppRouter />;
}

export default App;