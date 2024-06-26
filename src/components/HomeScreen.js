import React, { useState } from 'react';
import MediaItem from './MediaItem';
import { db } from './firebaseConfig';
import './HomeScreen.css';



function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    const fetchMediaData = async () => {
      const mediaCollection = await db.collection('media').get();
      setMediaData(mediaCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchMediaData();
  }, []);

  const filteredMedia = mediaData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-screen">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="media-grid">
        {filteredMedia.map((item) => (
          <MediaItem key={item.id} media={item} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
