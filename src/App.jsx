import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [channelUrl, setChannelUrl] = useState('https://www.youtube.com/c/UCvtT19MZW8dq5Wwfu6B0oxw');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`https://localhost:7047/api/Youtube/GetChannelVideos?channelUrl=${encodeURIComponent(channelUrl)}`);

        if (!response.ok) {
          throw new Error('Erro ao obter vídeos');
        }

        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [channelUrl]);

  return (
    <>
      <div className="app-input">
        <h1>Insira a URL</h1>
        <span>Lembre-se de informar a URL do canal!</span>
        <p>As cotas irão se encerrar em breve, lembre-se de alterar o token.</p>
        <input type="text" value={channelUrl} onChange={(e) => setChannelUrl(e.target.value)} />
        <button className='app-button'>Puxar</button>
      </div>
      <div className="app-container">
        <div className="app-context">
          {videos.map((video) => (
            <li key={video.link} className="video-item">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} />
                <p>{video.title}</p>
                <p>{video.duration}</p>
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
