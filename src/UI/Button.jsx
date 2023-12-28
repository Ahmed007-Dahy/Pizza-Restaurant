import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
    const base =
        'inline-block text-sm rounded-2xl bg-teal-900 font-semibold uppercase tracking-wide text-white transition-colors delay-75 duration-300 hover:bg-teal-700 focus:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-700 focus:ring-offset-2 disabled:cursor-not-allowed';

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        position: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' px-3 py-1 md:px-3 md:py-1.5 text-lg ',
        cart:
            base +
            ' px-4 py-2 md:px-6 md:py-3 text-sm flex items-center gap-x-3',
        secondary:
            'inline-block text-sm rounded-3xl border-2 bg-teal-800 border-teal-800 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-teal-600 hover:text-white focus:bg-teal-900 focus:text-white focus:outline-none focus:ring focus:ring-teal-900 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    };

    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    if (onClick) {
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}
            >
                {children}
            </button>
        );
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;
