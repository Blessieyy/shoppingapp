import React from 'react';
import '../components/Styles/Table.css';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>Item</th>
            <th className='expand'>Description</th>
            <th>Response</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
              {rows.map((row, idx) => {
                const responseText = row.response.charAt(0).toUpperCase() + row.response.slice(1);
                  return <tr key={idx}>
                    <td>{row.item}</td>
                    <td className='expand'>{row.description}</td>
                    <td>
                <span className={`label label-${row.response}`}>{responseText}</span>
                   </td>   
                   <td>
                <span className='actions'>
                    <BsFillTrashFill onClick={() => deleteRow(idx)}/>
                    <BsFillPencilFill onClick={() => editRow(idx)}/>
                </span>
            </td>             
                  </tr>

              })
            }    
        </tbody>
      </table>
    </div>
  );
};
