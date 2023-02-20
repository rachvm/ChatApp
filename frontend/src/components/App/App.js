import { useEffect, useState } from 'react'
import Post from '../Post';
import AddPost from '../AddPost';
import moment from 'moment';

export default function App() {
  const [ allposts, setAllposts] = useState([])
  
  useEffect(() => {
    async function getPost () {
      const response = await fetch('http://localhost:3001/api/chat')
      const data = await response.json()
      const allposts = data.payload
      let sortedPosts = allposts.sort((a, b) =>
          a.created.split('-').reverse().join().localeCompare(b.created.split('-').reverse().join()));
      setAllposts(sortedPosts)
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
		setAllposts([...allposts, newpost]);
	};

  // const deletePost = async (deleteid) => {
  //   // alert("Delete" + id)
  //   const id={userid: deleteid}
  //   await fetch(`http://localhost:3001/api/chat/`, {
  //     method: 'DELETE',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify(id),
	// 	})
  //   setAllposts(allposts.filter((allposts)=> allposts._id !== deleteid))
  // }

  const deletePost = async (deleteid) => {
    // alert("Delete" + id)

    await fetch(`http://localhost:3001/api/chat/${deleteid}`, {
      method: 'DELETE',

		})
    setAllposts(allposts.filter((allposts)=> allposts._id !== deleteid))
  }

  return (
    <div>
      <header className="p-4 pl-4 text-right text-yellow-400 text-5xl font-bold"> GetTogether </header>
      <div className="flex flex-col w-4/6 m-auto">
        
        <AddPost handleAddPost={addPost}/>
        
        {allposts.map((x) => (
          <Post key={x._id} postID={x._id} name={x.name} surname={x.surname} post={x.post} created={x.created} array={x.replies} handleDeleteClick={deletePost}/>
        ))}

      </div>
    </div>
  );
}


