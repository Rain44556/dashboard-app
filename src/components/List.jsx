import React from 'react';

const List = ({list}) => {
    const  {name, username, email, phone, company} = list;

    return (
        <tr className='border-b border-b-gray-300 text-gray-900 text-sm'>
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