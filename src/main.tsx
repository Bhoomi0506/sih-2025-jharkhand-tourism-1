/**
 * Entry point for the React application.
 * - Imports global styles
 * - Creates the React root and mounts the application inside React StrictMode
 */

import { StrictMode } from 'react' // Enable additional checks and warnings in development
import { createRoot } from 'react-dom/client' // New React 18+ root API for concurrent features
import './index.css' // Global stylesheet for the application
import App from './App.tsx' // Root application component (default export)

/**
 * Locate the DOM mount node and bootstrap the React application.
 * - `document.getElementById('root')!` uses a non-null assertion because the mount element
 *   is expected to exist in `index.html`.
 * - `createRoot(...).render(...)` mounts the React tree; wrapping with `StrictMode`
 *   enables additional runtime checks in development.
 */
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
