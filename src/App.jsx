import { Fragment } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './UI/Home.jsx';
import Menu, { Loader as menuLoader } from './Features/Menu/Menu.jsx';
import Cart from './Features/Cart/Cart.jsx';
import CreateOrder from './Features/Order/CreateOrder.jsx';
import Order, { Loader as orderLoader } from './Features/Order/Order.jsx';
import AppLayout from './UI/AppLayout.jsx';
import Error from './UI/Error.jsx';
import { actionOrder } from './Features/Order/actionOrder.jsx';
import { updateAction } from './Features/Order/updateAction.jsx';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/order/new',
                element: <CreateOrder />,
                action: actionOrder,
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                loader: orderLoader,
                action: updateAction,
            },
        ],
    },
]);

function App() {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    );
}

export default App;
