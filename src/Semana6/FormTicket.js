import { useState } from 'react';

function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function AoAlterarFirstName(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function AoAlterarLastName(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Vamos gerar ticket</h2>
      <label>
        Primeiro nome:{' '}
        <input
          value={firstName}
          onChange={AoAlterarFirstName}
        />
      </label>
      <label>
        Último Nome:{' '}
        <input
          value={lastName}
          onChange={AoAlterarLastName}
        />
      </label>
      <p>
        Ticket para: <b>{fullName}</b>
      </p>
    </>
  );
}

export default FormTicket;