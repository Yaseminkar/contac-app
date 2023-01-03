import {useEffect, useState} from "react";
import List from './list';
import Form from './form';
import './styles.css'

function Contacts() {
  const[contacts, setContacts] = useState([
    //varsayılan objeler tanımladık
    {
      fullname: "Yasemin K",
      phone_number: "1233322"
    },
    {
      fullname: 'Emre K',
      phone_number: "1222333" 
    },
    {
      fullname: "Ayse K",
      phone_number: "8889090"
    },
    {
      fullname: "Maria K",
      phone_number: "0029992"
    }
  ]);

  useEffect(() =>{
    console.log(contacts);
  },[contacts]);

  return (
    <div id="container" >
      <h1>Contacts</h1>
      {/* send a prop to list */}
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;