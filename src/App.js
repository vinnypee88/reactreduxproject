import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Post from './components/Post/Post'



function App() {

 
async function getData () {
  const response = await fetch('https://www.reddit.com/r/popular.json')
  const json = await response.json()
  const data = json.data.children
  return data.map (item =>{
    return item.data
  })
}


const state = {
  state: getData()
}
console.log(state.state)


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
