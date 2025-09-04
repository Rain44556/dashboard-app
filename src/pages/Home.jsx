import React from 'react';
import UserList from './UserList';

const Home = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-3 text-gray-800'>User Management</h1>
        <UserList></UserList>
        </div>
    );
};

export default Home;