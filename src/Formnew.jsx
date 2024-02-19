import React, { useState } from "react";

function Formnew() {
  const [input, setInput] = useState({
    exp: "",
    qualification: "",
    family: "",
    dream: "",
    annualincome: "",
  });
  const [data, setData] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setData(input);
    alert(JSON.stringify(data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        exp : <input type="text" name="exp" onChange={handleChange} />
        qualification :
        <input type="text" name="qualification" onChange={handleChange} />
        family : <input type="text" name="family" onChange={handleChange} />
        dream :
        <input type="text" name="dream" onChange={handleChange} />
        annualincome :
        <input type="text" name="annualincome" onChange={handleChange} />
        <input type="submit" />
      </form>
      <h1 style={{ textAlign: "center" }}> USER DETAILS</h1>
      <table>
        <tr>
          <th>EXP</th>
          <th>QUALIFICATION</th>
          <th>FAMILY</th>
          <th>DREAM</th>
          <th>ANNUALINCOME</th>
        </tr>

        <tr>
          <td>{data.exp}</td>
          <td>{data.qualification}</td>
          <td>{data.family}</td>
          <td>{data.dream}</td>
          <td>{data.annualincome}</td>
        </tr>
      </table>
    </div>
  );
}

export default Formnew;
