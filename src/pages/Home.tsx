import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

interface Item {
  id: number;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch items');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <h2 className="text-xl font-bold mb-4">Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="mb-2">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;