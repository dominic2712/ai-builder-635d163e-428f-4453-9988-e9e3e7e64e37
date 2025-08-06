import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('/api/items', { title, description })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Item</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="mb-2 p-2 border"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="mb-2 p-2 border"
        />
        <button type="submit" className="bg-blue-600 text-white p-2">Submit</button>
      </form>
    </div>
  );
};

export default Create;