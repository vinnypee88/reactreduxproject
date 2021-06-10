import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getComments = createAsyncThunk(
    "comments/getComments",
    async (fetchCommentsLink) => {
    const data = await fetch(fetchCommentsLink);
    const json = await data.json();
    return json[1].data.children 
    }
  );
//currently working on keyying the comments by Id, will need to change map function and use one for objects
const options = {
    name: 'comments',
    initialState: {
        comments: [] 
    },
    reducers: {
        loadingScreen: (state, action) => {
            state.comments = [{comment: 'loading...'}]
        }
    },
    extraReducers: {
        [getComments.pending] : (state, action) => {
            state.isLoading = true;
            state.hasError = false
        },
        [getComments.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.hasError = false;
           
            state.comments = action.payload.map(comment =>{
                return {comment: comment.data.body,
                        author: comment.data.author,
                        }
            })
        },
        [getComments.rejected] : (state, action) => {
            state.isLoading = false;
            state.hasError = true
        },
    }
}
const commentsSlice = createSlice(options)
export const selectComments = state => state.comments.comments
export const {loadingScreen} = commentsSlice.actions

export default commentsSlice.reducer