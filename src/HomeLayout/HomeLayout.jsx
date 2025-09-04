import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='bg-gray-100 p-10'>
            <div className='bg-white p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;