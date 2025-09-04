import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700'>
             <p className="text-2xl mb-4">The page you're looking for doesn't exist!</p>
             <Link
                to="/"
                className="underline font-semibold text-xl px-6 py-3"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;