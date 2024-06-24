import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import '~bootstrap/dist/js/bootstrap.bundle.min.js';

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>

);

// reportWebVitals();
// createRoot(document.getElementById('root')).render(
//     <RouterProvider
//         router={createBrowserRouter(routes)}
//     />
// );
