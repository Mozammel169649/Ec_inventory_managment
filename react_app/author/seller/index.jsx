import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter,} from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Dashboard from './pages/management/Dashboard';

function Component() {
    const router = createHashRouter([
        {
            path: "/",
            element : <Layouts></Layouts>,
            children : [
                {
                    path : "",
                    element : <Dashboard></Dashboard>
                }
            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}

const container = document.getElementById('seller_app');
const root = createRoot(container);
root.render(
    <Component />
);