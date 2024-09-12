import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Advertisements = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/advertisements');
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchedAds = ads.filter(ad => 
    ad.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Объявления</h1>
      <input type="text" placeholder="Найти" onChange={handleSearch} value={search}/>
      <div className="ads-list">
      {searchedAds.length > 0 ? (
          searchedAds.map(ad => (
            <div key={ad.id} className="ad">
              <h2>{ad.name}</h2>
              <p>Цена: {ad.price} руб.</p>
              <p>Просмотры: {ad.views}</p>
              <p>Лайки: {ad.likes}</p>
              <Link to={`/advertisements/${ad.id}`}>Подробнее</Link>
            </div>
          ))
        ) : (
          <p>Объявления не найдены</p>
        )}
      </div>
    </div>
  );
};

export default Advertisements;
