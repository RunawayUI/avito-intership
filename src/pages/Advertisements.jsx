import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Advertisements = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/advertisements');
        console.log(response.data);
        setAds(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Ошибка при загрузке данных');
        setLoading(false);
      }
    };
  
    fetchAds();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Объявления</h1>
      <div className="ads-list">
        {ads.map(ad => (
          <div key={ad.id} className="ad">
            <h2><Link to={`/advertisements/${ad.id}`}>{ad.name}</Link></h2>
            {ad.description && <p>{ad.description}</p>}
            <p>Цена: {ad.price} руб.</p>
            <p>Просмотры: {ad.views}</p>
            <p>Лайки: {ad.likes}</p>
            <p>Дата создания: {new Date(ad.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
