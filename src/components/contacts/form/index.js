import React from 'react';
import {useState} from "react";

function Form ({addContact, contacts}) {
  const [form, setForm] = useState({fullname: '', phone_number:''})
    
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    //preventDefault is a method in JavaScript that is used to prevent the default action of an event from occurring. 
    //For example, if you have a form on a webpage and you want to prevent the form from being submitted when the user clicks the submit button, 
    //You can use the preventDefault method to do this.
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
       return false;
    }
    //protect old data
    addContact([...contacts, form]);

    //clean inside the input
    setForm({fullname: "", phone_number: ""});

  };


  return (
    <form onSubmit={onSubmit}>
        <div>
          <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput}/>
        </div>

        <div>
          <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
        </div>
        <div className='btn'>
            <button>Add</button>
        </div>

    </form>
  )
}

export default Form;