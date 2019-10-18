import { createStore } from 'redux';
import update from 'immutability-helper';

const initialState = {
    post: [],
    postDetails: [],
    isPostLoading: false,
    isLoadingPostD: false,
    isLoadingLike: false
} 

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'IS_LOADING':
            return {...state, isPostLoading: action.isLoading}    
        case 'GET_POST':
            return {...state, post: action.data, isPostLoading: action.isLoading}   
        case 'IS_LOADING_POSTDETAILS':
            return {...state, isLoadingPostD: action.isLoadingPostD }  
        case 'GET_POST_DETAILS':
            return {...state, postDetails: action.postDetails, isLoadingPostD: action.isLoadingPostD }
        case 'IS_LOADING_POSTLIKE':
            return {...state, isLoadingLike: action.isLoadingLike }  
        case 'SET_POST_LIKE':    
            const state1 = {...state.postDetails}
            const newstate = update(state1, {like: {$set: action.postLike}})
            return {...state, postDetails: newstate, isLoadingLike: action.isLoadingLike}
        case 'SET_POST_LIKE_TO_BLOG':   
            const state2 = [...state.post];
            //Find the postID and return the index.
            const postIndex = state2.findIndex(post => post.id === action.postLikeToBlog.id);
            const newState = action.postLikeToBlog;
            state2[postIndex] = newState;
            return {...state, post: state2}
        default:
            return state;
    }
}

const store = createStore(
    reducer,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
export default store;