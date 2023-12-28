import { Link, useNavigate } from 'react-router-dom';

function LinkedButton({ to, children }) {
    const navigate = useNavigate();
    if (to === '-1') {
        return (
            <button
                className={'linkedButton w-1/6'}
                onClick={() => navigate(-1)}
            >
                {children}
            </button>
        );
    }

    return (
        <Link className={'linkedButton'} to={to}>
            {children}
        </Link>
    );
}

export default LinkedButton;
