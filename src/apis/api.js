import { getPostByIdAct, viewPerPost, setPostLikeByIdAct, setPostLikeAct, getPostDetailsByIdAct } from '../components/redux/actions/postActions';
import { async } from 'q';

const axios = require('axios').default; //axios.<method> will now provide autocomplete and parameter typings

const foodBlog = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        //xsrfCookieName: 'csrftoken',
        //xsrfHeaderName: 'X-CSRFTOKEN',
    }
});

function getPost(dispatch){
    dispatch(
        { type: 'IS_LOADING', isLoading: true }
    );
    //const url = '/food-post.json'
    const url = '/post/api/v1/'

    return foodBlog.get(url)
        .then(function (response) {
            if(response.status === 200){
                dispatch(
                    { type: 'GET_POST', data: response.data, isLoading: false }
                );   
                return response.data;
            }
            console.log(response);
        })
        .catch(function (error) {
            // handle error 
            console.log(error);
        }) 
        .finally(function () {
            // always executed
        });
}

async function getPostDetailsById(dispatch, postID){
    const url = '/post/api/v1/'+postID;

    foodBlog.get(url)
        .then(function (response) {
            if(response.status === 200){
                dispatch(
                    getPostDetailsByIdAct(response)
                );
            }
        })
        .catch(function (error) {
            //handle error 
            console.log(error);
        });
}

// async function getPostById1(dispatch, postID){
//     dispatch(
//         { type: 'IS_LOADING_POSTDETAILS', isLoadingPostD: true }
//     );

//     const url = '/food-post/'+postID+'/view.json';
//     const url2 = '/food-post/'+postID+'/.json';

//     let getPostViews = await foodBlog.get(url);

//     console.log(getPostViews);

//     if(getPostViews.status === 200){
//         const data = getPostViews.data + 1;
//         const setPostViews = await foodBlog.put(url, data);
       
//         if(setPostViews.status === 200){
//             foodBlog.get(url2)
//             .then(function (response) {
//                 if(response.status === 200){
//                     dispatch(
//                         getPostByIdAct(response)
//                     );
//                 }
//             })
//             .catch(function (error) {
//                 //handle error 
//                 console.log(error);
//             });
//         }else{
//             console.log('failed to fetch the views');
//         }
//     }
// }

function getPostById(dispatch, postID){
    const url = '/post/api/v1/'+postID;

    return foodBlog.get(url)
        .then(function(response){
            dispatch(
                getPostByIdAct(response)
            );
            return response;
        })
        .catch(function (error){
            console.log(error);
        });
}

async function setViewPostId(dispatch, postID){
    const url = '/post/api/v1/'+postID;

    dispatch(
        { type: 'IS_LOADING_POSTDETAILS', isLoadingPostD: true }
    );

    const getPostDetails = await foodBlog.get(url);
    if(getPostDetails.status === 200){
        const oldView = getPostDetails.data.view
        const newView = { view : oldView + 1 }
        const view_url = '/post/api/v1/'+postID+'/view';

        const setView = await foodBlog.put(view_url, newView)
        if(setView.status === 200){
            // foodBlog.get(url)
            //     .then(function(response){
            //         dispatch(
            //             getPostByIdAct(response)
            //         );
            //     })
            //     .catch(function (error){
            //         console.log(error);
            //     });
            getPostById(dispatch, postID);
            //console.log(test)
        }
    }
}

function setLikePostById(dispatch, postID, like, pageType){    
    const like_url = '/post/api/v1/'+postID+'/like';
    const addLike = like + 1
    const data = { like : addLike }
    
    dispatch(
        { type: 'IS_LOADING_POSTLIKE', isLoadingLike: true }
    );

    foodBlog.put(like_url, data)
        .then(function (response) {
            if(response.status === 200){
                if(pageType === 'POSTPAGE'){
                    dispatch(
                        setPostLikeByIdAct(response.data.like)
                    )
                }else{
                    const test = getPostById(dispatch, postID).then(data => {
                        dispatch(
                            setPostLikeAct(data.data)
                        )
                        //console.log(data)
                    });
                }  
            }
        })
        .catch(function (error) {
            //handle error 
            console.log(error);
        });
}

function setLikeToPosts(dispatch, postID, like){    
    const like_url = '/post/api/v1/'+postID+'/like';
    const addLike = like + 1


    const data = { like : addLike }
    
    dispatch(
        { type: 'IS_LOADING_POSTLIKE', isLoadingLike: true }
    );

    foodBlog.put(like_url, data)
        .then(function (response) {
            if(response.status === 200){
                dispatch(
                    setPostLikeAct(response.data.like)
                )
            }
        })
        .catch(function (error) {
            //handle error 
            console.log(error);
        });
}

export default{
    getPost,
    setViewPostId,
    setLikePostById,
    setLikeToPosts,
    getPostDetailsById
} 
