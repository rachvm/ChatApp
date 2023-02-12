import './App.css';
import { useEffect, useState } from 'react'
import Post from '../Post';
import AddPost from '../AddPost';
import moment from 'moment';

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

  const addPost = async (post) => {
    const date = moment().format("DD-MM-YYYY")
    const text = {
      name: "Daniel",
      surname: "Evans",
      post: post,
      author_id: 1,
      created: date,
     
  };
		const response = await fetch('http://localhost:3001/api/chat', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(text),
		})
		const data = await response.json()
    const newpost = data.payload
		setLike([...like, newpost]);
	};

  return (
    <div className="App">
      <header className="App-header"> GetTogether </header>
      <div className="all-posts">
        <AddPost
          handleAddPost={addPost}
        />
        {like.map((x) => (
          <Post key={x._id} name={x.name} surname={x.surname} post={x.post} created={x.created} array={x.replies}/>
        ))}
      </div>
    </div>
  );
}


