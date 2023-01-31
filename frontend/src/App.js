import './App.css';
import { useEffect, useState } from 'react'
import Post from './Post';

export default function App() {
  const [ like, setLike] = useState([])
  
  useEffect(() => {
    async function getPost () {
      const response = await fetch('http://localhost:3001/api/chat')
      const data = await response.json()
      const allposts = data.payload
      console.log(allposts);
      setLike(allposts)
    } getPost()
  }, []);

  return (
    <div className="App">
      <header className="App-header"> GetTogether </header>
      <div className="all-posts">
      {like.map((x) => (
        <Post key={x._id} name={x.name} surname={x.surname} post={x.post} array={x.replies}/>
      ))}
      </div>
    </div>
  );
}


