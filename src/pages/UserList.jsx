import React, { useEffect, useState } from "react";
import List from "../components/List";
import Searchbar from "../components/Searchbar";

const UserList = () => {
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState("");
    

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  const filteredUsers = lists.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
       <div>
        <Searchbar search={search} setSearch={setSearch}></Searchbar>
          <table className="w-full border-collapse">
        <thead className='bg-gray-50 text-gray-400 text-sm'>
          <tr className="text-left">
            <th className="p-3 font-normal">NAME</th>
            <th className="p-3 font-normal">EMAIL</th>
            <th className="p-3 font-normal">PHONE</th>
            <th className="p-3 font-normal">COMPANY</th>
          </tr>
        </thead>
    <tbody>
      {
        filteredUsers.map(list => <List
        key={list.id}
        list={list}
        ></List>)
      }
    </tbody>
    </table>
       </div>
  );
};

export default UserList;
