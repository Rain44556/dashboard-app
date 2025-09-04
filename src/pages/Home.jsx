import React from 'react';
import UserList from './UserList';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>
    <motion.h1
      className="font-bold text-2xl mb-3 text-gray-800"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      User Management
    </motion.h1>
        <UserList></UserList>
        </div>
    );
};

export default Home;