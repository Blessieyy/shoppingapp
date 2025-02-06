import React from 'react';
import { useState } from 'react';

import '../components/Styles/ShoppingList.css'

import { Table } from '../components/Table';
import { Modal } from '../components/Modal';



export default function ShoppingList() {
  const [modalOpen, setModalOpen]= useState(false)

  const [rows, setRows] = useState([
    // {item: 'item 1', description:'dsc', response:'bought'},
    // {item: 'item 2', description:'dsc', response:'pending'},
    // {item: 'item 3', description:'dsc', response:'shelf'},
  ]);
  const [rowToEdit, setRowToEdit] = useState(null)

const handleDeleteRow = (targetIndex) => {
   setRows(rows.filter((_, idx) => idx !== targetIndex)); 
};

const handleEditRow = (idx) => {
  setRowToEdit(idx);

  setModalOpen(true);
};

const handleSubmit =(newRow) =>{
  rowToEdit === null ?
  setRows([...rows, newRow]) :
  setRows(rows.map((curRow, idx) => {
    if (idx !== rowToEdit) return curRow

    return newRow;
  })
);
};

  return (
    <div className="Shopping-list">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/> 
      <button className='btn' onClick={() => setModalOpen(true)}>Add+</button>
      {modalOpen && ( <Modal closeModal={()=>{
        setModalOpen(false);
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit} 
      defaultValue={rowToEdit !== null && rows[rowToEdit]}
      />
      )}
    </div>
  );
}


