import React, { useState } from 'react';

function Form3() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [imageLink, setImageLink] = useState('');

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'image-link':
        setImageLink(value);
        break;
      default:
        break;
    }
  };

  const ExibeDados = () => {
    return (
      <>
        {`${title} by ${name}`}
        <br />
        (Located in {city})
        <br />
        <img src={imageLink} alt={`${title} Image`} />
      </>
    );
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={name} onChange={handleChange} />

      <label htmlFor="title">Title</label>
      <input id="title" name="title" value={title} onChange={handleChange} />

      <label htmlFor="city">City</label>
      <input id="city" name="city" value={city} onChange={handleChange} />

      <label htmlFor="image-link">Image Link</label>
      <input id="image-link" name="image-link" value={imageLink} onChange={handleChange} />

      <div>{ExibeDados()}</div>
    </div>
  );
}

export default Form3;
