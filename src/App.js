import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Post from './components/Post/Post'



function App() {
  return (
    <div className="App"> 
    
      <Header className='Header'/>       
      
      <main>
      <Post />
      <Post />
      <Post />
      <Post />
      </main>
      <aside>
        <p>aside</p>
      </aside>
        
      
    </div>
  );
}

export default App;
