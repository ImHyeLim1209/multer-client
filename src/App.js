import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [img, setImage] = useState(null);

  const onChange = (e) => {
    setImage(e.target.files[0]);
  }

  const onClick = async () => {
    const formData = new FormData();
    formData.append('file', img);
    formData.append("filename", img.name);
    formData.append("title", "ihl");
    // 서버의 upload API 호출
    const res = await axios.post("http://localhost:4000/api/upload", formData);
    console.log(res);
  }

  return (
    <div className="App">
      <input type="file" onChange={onChange}/>
      <button onClick={onClick}>제출</button>
      <img src="http://localhost:4000/bkg-summer1617780130514.jpg"></img>
    </div>
  );
}

export default App;
