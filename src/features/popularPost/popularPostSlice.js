import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



export const getData = createAsyncThunk(
    "popularPost/getData",
    async (current) => {
      const data = await fetch(`https://www.reddit.com/r/${current}.json`);
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
        posts: [{}],
        index: [],
    },
    reducers: {
      filterSearch: (state, action) => {
        
          const filteredPosts = state.posts.filter(post=>{
            return post.title.toLowerCase().includes(action.payload.toLowerCase())
          })
          if (filteredPosts.length === 0) {
            state.posts = [] //render a better page with a button to go back to home page.
          } else {
            state.posts = filteredPosts
          }
      }, 
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
                    url: post.url,
                    permalink: post.permalink,
                    id: post.name,
                    num_comments: post.num_comments,
                    comments:[],
                    redditVid: post.media,
                    post_hint:post.post_hint,
                    created_utc:post.created_utc,
                    thumbnail:post.thumbnail
                }
            })
            state.allData = action.payload
          },
          [getData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
          },
          //ExtraReducer to handle the get comments thunk action
          [getComments.pending] : (state, action) => {
            state.isLoadingComments = true;
            state.hasErrorComments = false                               
           },
          [getComments.fulfilled] : (state, action) => {
            state.isLoadingComments = false;
            state.hasErrorComments = false;
            let index
            if (action.payload.length !== 0){
            //find the right post
            index = state.posts.findIndex(post=>{
              return post.id === action.payload[0].data.parent_id         
            })
            //add comments to the comments key
            state.posts[index].comments = action.payload.map(comment =>{
                              return {comment: comment.data.body,
                                      author: comment.data.author,
                                      created_utc: comment.data.created_utc
                                      }
                          })
            } 
            },
          [getComments.rejected] : (state, action) => {
            state.isLoadingComments = false;
            state.hasErrorComments = true
            },
           
    }
}

const popularPostSlice = createSlice(options)
export const { filterSearch } = popularPostSlice.actions
export const selectPosts = state => state.popularPost.posts
export const selectIsLoadingComments = state => state.popularPost.isLoadingComments
export const selectIsLoading = state => state.popularPost.isLoading

export default popularPostSlice.reducer



