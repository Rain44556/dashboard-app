import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const List = ({list}) => {
  const navigate = useNavigate();
    const  {id, name, username, email, phone, company} = list;

    return (
        <tr 
        onClick={()=>navigate(`users/${id}`)}
        className='cursor-pointer hover:bg-gray-50 border-b hover:scale-102 border-b-gray-300 text-gray-900 text-sm'>
              <td className="p-3">
                <div className="flex flex-col ">
                  <span>{name}</span>
                  <span className="text-gray-500">@{username}</span>
                </div>
              </td>
              <td className="p-3">{email}</td>
              <td className="p-3">{phone}</td>
              <td className="p-3">{company.name}</td>
        </tr>
  
    );
};

export default List;