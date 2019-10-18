export const getPostByIdAct = (response) => {
    return {
        type: 'GET_POST_DETAILS',
        postDetails: response.data, 
        isLoadingPostD: false
    }
}

export const setPostLikeByIdAct = (response) => {
    return {
        type: 'SET_POST_LIKE',
        postLike: response, 
        isLoadingLike: false
    }
}

export const setPostLikeAct = (response) => {
    return {
        type: 'SET_POST_LIKE_TO_BLOG',
        postLikeToBlog: response, 
        //isLoadingLike: false
    }
}

export const getPostDetailsByIdAct = (response) => {
    return {
        type: 'GET_POST_DETAIL_BY_ID',
        postDetailsById: response.data, 
        //isLoadingLike: false
    }
}



// export const viewPerPost = (response) => {
//     //console.log(response.data)
//     return {
//         type: 'SET_VIEW_PER_POST',
//         postViews: response, 
//         //isLoadingPostD: false
//     }
// }