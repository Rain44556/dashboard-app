import React, { useEffect, useState } from "react";
import List from "../components/List";
import Searchbar from "../components/Searchbar";
import { motion } from "framer-motion";

const UserList = () => {
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState("");
  const [startIdx, setStartIdx] = useState(0);
const [max, setMax] = useState(0);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMax(data.length)
        setLists(data)
      });
  }, []);


  const filteredUsers = lists.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    ).filter(user => user.id > ((startIdx) * 5)).slice(0,5);


    const handleNext = () =>{
      
      setStartIdx (startIdx+1);
      console.log(((startIdx+1) *5));
    }
    const handlePrev = () =>{
      setStartIdx (startIdx-1);
    }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Searchbar search={search} setSearch={setSearch}></Searchbar>
        <div className="overflow-x-auto md:overflow-x-visible">

      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full border-collapse mb-4"
      >
        <thead className="bg-gray-50 text-gray-400 text-sm">
          <tr className="text-left">
            <th className="p-3 font-normal">NAME</th>
            <th className="p-3 font-normal">EMAIL</th>
            <th className="p-3 font-normal">PHONE</th>
            <th className="p-3 font-normal">COMPANY</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((list) => (
            <List key={list.id} list={list}></List>
          ))}
        </tbody>
      </motion.table>
      </div>
      <div>
        <p className="text-sm text-gray-500 mt-3">Showing 5 of {max}</p>
        <div className="flex justify-between mt-4">
          <button 
          className={`px-4 py-2 rounded-lg text-sm font-medium transition 
        ${startIdx === 0 
          ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
          : "bg-gray-300 hover:bg-gray-200 text-gray-700"}`}
          onClick={handlePrev} 
          disabled={startIdx === 0}>prev</button>
      
      <button 
      className={`px-4 py-2 rounded-lg text-sm font-medium transition 
        ${((startIdx + 1) * 5) >= max
          ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
          : "bg-blue-600 hover:bg-blue-700 text-white"}`}
      onClick={handleNext} 
      disabled={((startIdx+1) *5) >= max}>next</button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserList; 
