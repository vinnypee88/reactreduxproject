import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import { useDispatch } from "react-redux";
import { getData } from './features/popularPost/popularPostSlice'
import { useSelector } from 'react-redux'
import { selectPosts } from './features/popularPost/popularPostSlice'


function App() {

  const arrayOfPosts = useSelector(selectPosts) // import the arrays of posts using useSelector
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="App"> 
    
      <Header className='Header'/>       
      
      <main>

        {arrayOfPosts.map(post => {
          return <Post name={post.title} media={post.media} author={post.author}/>
        })}

      </main>
      <aside>
        <p>aside</p>
      </aside>
        


      
    </div>
  );
}

export default App;
