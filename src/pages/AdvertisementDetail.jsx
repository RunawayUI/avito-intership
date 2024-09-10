import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const AdvertisementDetail = () => {
  const { id } = useParams();
  const [ad, setAd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/advertisements/${id}`);
        setAd(response.data);
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
    <div key={ad.id} className="ad">
        <h2>{ad.name}</h2>
        {ad.description && <p>{ad.description}</p>}
        <p>Цена: {ad.price} руб.</p>
        <p>Просмотры: {ad.views}</p>
        <p>Лайки: {ad.likes}</p>
        <p>Дата создания: {new Date(ad.createdAt).toLocaleDateString()}</p>
        <p><Link to="/advertisements">Вернуться ко всем объявлениям</Link></p>
    </div>
  );
};

export default AdvertisementDetail;
