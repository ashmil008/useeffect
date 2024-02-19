import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name : '',
    address :'',
    age : '',
    phone : '',
    education : '',


  });
  const [data,setData] = useState('')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setData(input)
    alert(JSON.stringify(data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        NAME : <input type="text" name="name" onChange={handleChange} />
        ADDRESS :
        <input type="text" name="address" onChange={handleChange} />
        AGE : <input type="number" name="age" onChange={handleChange} />
        PHONE :
        <input type="number" name="phone" onChange={handleChange} />
        EDUCATION :
        <input type="text" name="education" onChange={handleChange} />
        <input type="submit" />
      </form>
      <h1 style={{ textAlign: "center" }}> USER DETAILS</h1>
      <table>
        <tr>
          <th>NAME</th>
          <th>ADDRESS</th>
          <th>AGE</th>
          <th>PHONE</th>
          <th>Education</th>
        </tr>
        
    
        <tr>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.age}</td>
        <td>{data.phone}</td>
        <td>{data.education}</td>
      </tr>
      
      
      
        
      </table>
      
    </div>
  );
}

export default Form;
