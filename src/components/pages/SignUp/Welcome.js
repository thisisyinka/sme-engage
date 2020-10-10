import React, { useState } from 'react';
import './style.css';

const Welcome = ({ handleLogout }) => {
  const [file, setFile] = useState('');

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const VideoThumbnail = ({ video }) => {
    return (
      <>
          <video width="320" height="240" controls>
        <source src={URL.createObjectURL(video)} type="video/mp4" />
      </video>
      <p style={{color: 'green', fontSize: '14px', paddingTop: '10px'}}>Your upload was successful! Thank you 🎉 </p>
      </>
    );
  };

  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file.name}</p>
        <p>File type: {file.type}</p>
        <p>File size: {file.size} bytes</p>
        {file && <VideoThumbnail video={file} />}
      </div>

      <div className="warning">Only videos allowed please!</div>
    </section>
  );
};

export default Welcome;
