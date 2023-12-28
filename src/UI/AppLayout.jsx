import Header from './Header.jsx';
import CartOverview from '../Features/Cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import LoaderLayout from './LoaderLayout.jsx';

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div className={'grid h-screen grid-rows-[auto_1fr_auto] gap-y-10'}>
            {isLoading && <LoaderLayout />}
            <Header />
            <div className={'overflow-auto'}>
                <main className={'mx-auto max-w-6xl'}>
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
