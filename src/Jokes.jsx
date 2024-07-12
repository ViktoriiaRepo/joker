import { useState, useEffect } from 'react';
import { fetchJoke } from './api';
import './Jokes.css';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const [iconUrl, setIconUrl] = useState('');

  const getJoke = async () => {
    const { joke, iconUrl } = await fetchJoke();
    setJoke(joke);
    setIconUrl(iconUrl);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className='joke-container'>
      <h1>Chuck Norris Jokes</h1>
      <div className='joke-content'>
        {iconUrl && (
          <img src={iconUrl} alt='Chuck Norris Icon' className='joke-icon' />
        )}
        <p>{joke}</p>
      </div>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
};

export default Jokes;
