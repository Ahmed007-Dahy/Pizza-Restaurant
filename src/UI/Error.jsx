import { useRouteError } from 'react-router-dom';
import LinkedButton from './LinkedButton.jsx';
import pageNotFound from '../assets/pageNotFound.png';

function NotFound() {
    const error = useRouteError();

    return (
        <div className={'h-screen max-w-full bg-teal-900 text-center'}>
            <h1 className={'text-3xl font-bold text-red-600'}>
                Something went wrong
            </h1>
            <p className={'text-2xl font-extrabold text-red-600'}>
                {error.data || error.message}
            </p>
            <img
                className={'mx-auto w-1/3'}
                src={pageNotFound}
                alt="pageNotFound"
            />
            <LinkedButton to={'-1'}>&larr; Click here to Go back</LinkedButton>
        </div>
    );
}

export default NotFound;
