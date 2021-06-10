import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getData = createAsyncThunk(
    "popularPost/getPosts",
    async () => {
      const data = await fetch('https://www.reddit.com/r/popular.json');
      const json = await data.json();
       return json.data.children.map(item=>item.data)
    }
  );
const options = {
    name: 'popularPost',
    initialState: {
        posts: [{
            title: '',
            author: '',
            media: '', 
            permalink: '',
        }],
    },
   
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
          },
          [getData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
           
            state.posts = action.payload.map(post=>{
                
                return {
                    title: post.title,
                    author: post.author,
                    media: post.url,
                    permalink: post.permalink,
                    id: post.name,
                }
            })
            state.allData = action.payload //only here to read what data is available for use 
          },
          [getData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          },
    }
}

const popularPostSlice = createSlice(options)

export const selectPosts = state => state.popularPost.posts

export default popularPostSlice.reducer



