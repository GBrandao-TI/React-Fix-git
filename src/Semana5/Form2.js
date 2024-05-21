import React, { useState } from 'react';

function Form2() {
  // Estados para gerenciar os valores dos campos do formulário
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'first-name':
        setFirstName(value);
        break;
      case 'last-name':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  // Renderiza nome completo e o email
  const renderFullNameAndEmail = () => {
    return (
      <>
        {`${firstName} ${lastName}`} ({email})
      </>
    );
  };

  return (
    <div>
      <label htmlFor="first-name">First Name</label>
      <input id="first-name" name="first-name" value={firstName} onChange={handleChange} />

      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" name="last-name" value={lastName} onChange={handleChange} />

      <label htmlFor="email">E-mail</label>
      <input id="email" name="email" value={email} onChange={handleChange} />

      <div>{renderFullNameAndEmail()}</div>
    </div>
  );
}

export default Form2;
