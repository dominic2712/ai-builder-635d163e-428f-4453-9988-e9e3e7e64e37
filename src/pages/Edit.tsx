import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/items/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.put(`/api/items/${id}`, { title, description })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Item</h2>
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
        <button type="submit" className="bg-blue-600 text-white p-2">Update</button>
      </form>
    </div>
  );
};

export default Edit;