import React, {useState} from 'react'

import '../components/Styles/Modal.css'

export const Modal = ({closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState] = useState(
        defaultValue || {
       item: '',
       description: '',
       response: '', 
    })

    const [errors, setErrors] = useState('')
    
    const validateForm =() => {
        if(formState.item && formState.description && formState.response){
           setErrors('')
            return true;
        } else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)) {
               if(!value){
                errorFields.push(key);
               } 
            }
            setErrors(errorFields.join(','))
            return false;
        }
    }


    const handleChange = (e) => {
        setFormState ({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState)

        closeModal();
    }

  return (
    <div className='modal-container' onClick={(e) =>{
        if(e.target.className === 'modal-container')closeModal(); 
        }}>
        <div className='modal'>
           <form>
            <div className='form-group'>
                <label htmlFor='item'>Item</label>
                <input className='input' name='item' value={formState.item} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea className='input' name='description' value={formState.description}onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='response'>Response</label>
                <select className='input' name='response' value={formState.response}onChange={handleChange}>
                    <option className='pick'>select here</option>
                    <option className='pick' value='bought'>Bought</option>
                    <option className='pick' value='pending'>Pending</option>
                    <option className='pick' value='shelf'>Shelf</option>
                </select>    
            </div>
            {errors && <div className='error'>{`Where is: ${errors}`}</div> }
            <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
           </form>
        </div>
    </div>
  )
}
