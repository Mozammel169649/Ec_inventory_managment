import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter, } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/app/store';

import user_router from './pages/management/user/config/router';
import product_router from './pages/management/product/config/router';
import category_router from './pages/management/category/config/router';
import brand_router from './pages/management/brand/config/router';
import supplier_router from './pages/management/supplier/config/router';
import stock_router from './pages/management/stock/config/router';

function Component() {
    const router = createHashRouter([
        {
            path: "/",
            element: <Layouts></Layouts>,
            children: [
                {
                    path: "",
                    element: <Dashboard></Dashboard>
                },
                user_router,
                product_router,
                category_router,
                brand_router,
                supplier_router,
                stock_router,

            ]
        }
    ])

    return (<RouterProvider router={router}></RouterProvider>)
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Component />
    </Provider>

);