import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getData = createAsyncThunk(
    "popularPost/getPosts",
    async () => {
      const data = await fetch('https://www.reddit.com/r/popular.json');
      const json = await data.json();
       return json.data.children.map(item=>item.data)
    }
  );

export const getComments = createAsyncThunk(
    "popularPost/getComments",
    async (fetchCommentsLink) => {
    const data = await fetch(fetchCommentsLink);
    const json = await data.json();
    return json[1].data.children 
    }
  );

const options = {
    name: 'popularPost',
    initialState: {
        posts: [{
            
        }],
        index: ''
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
                    comments:[]
                }
            })
            // state.allData = action.payload //only here to read what data is available for use 
          },
          [getData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          },
          [getComments.pending] : (state, action) => {
            state.isLoadingComments = true;
            state.hasErrorComments = false                                       
           },
          [getComments.fulfilled] : (state, action) => {
            state.isLoadingComments = false;
            state.hasErrorComments = false;
            //find the right post
            const index = state.posts.findIndex(post=>{
              return post.id === action.payload[0].data.parent_id         
            })
            //add comments to the comments key
            state.posts[index].comments = action.payload.map(comment =>{
                              return {comment: comment.data.body,
                                      author: comment.data.author,
                                      }
                          })
            },
          [getComments.rejected] : (state, action) => {
            state.isLoadingComments = false;
            state.hasErrorComments = true
            },
    }
}

const popularPostSlice = createSlice(options)

export const selectPosts = state => state.popularPost.posts

export default popularPostSlice.reducer



