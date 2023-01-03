import React, { useState } from 'react'

function List({contacts}) {
  const[filterText, setFilterText]=useState("");
  
    console.log('i am rendered');
  //contactsi filtreleyip filtrelenmiş sonuçları listelemk için ir fonksiyon 
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
         .toString()
         .toLowerCase()
         .includes(filterText.toLocaleLowerCase())
    );
  });


  return (
    <div>

       <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>

        <ul className='list'>
            {/* When you use the map method, you need to use the key structure */}
            { filtered.map((contact,i) =>(
                <li key={i}>
                    <span>{contact.fullname}</span>
                    <span>{contact.phone_number}</span>
                </li>
            ))}
        </ul>
        <p>
            Total Contacts {filtered.length}
        </p>
    </div>
  )
}

export default List