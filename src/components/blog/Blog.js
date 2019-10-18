import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Api from '../../apis/api';
import Pagination from "react-js-pagination";
import { FaShare, FaThumbsUp, FaRegComment, FaEye } from 'react-icons/fa';

class Blog extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage: 1,
			totalItemCount: '',
			itemsPerPage: 3,
            testClass: ''
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pagenumber) {
		this.setState({
			currentPage: pagenumber
		});
	}

    limitWordDisplay = (str, limit) => {
        if(str.length >= limit){
            //console.log(str.split(" ").length); --> count the words
            return str.split(' ').splice(0,limit).join(" ")
        }
    }

    onLike = (postId, postLike, i) => {
        this.setState({ testClass: postId })

        this.props.onLikePost(postId, postLike);
    }

    post = () => {
        let posts, LastPost, FirstPost, currentPost;
        const postD = this.props.post;

        if(postD.length === 0){
            posts = <div className="text-center">
                <span className="spinner-grow text-primary"></span>
                <span className="spinner-grow text-primary"></span>
                <span className="spinner-grow text-primary"></span>
            </div>
        }else{
            //console.log(postD)
            const { currentPage, itemsPerPage, itemsCountPerPage } = this.state;
            LastPost = currentPage * itemsPerPage;
            FirstPost = LastPost - itemsPerPage;

            currentPost = postD.slice(FirstPost, LastPost);
                    
            posts =
            currentPost.map((post,i) => 
                <div className="row mb-5" key={post.id}>
                    <div className="col-md-12">
                        <Link className="no-underline" to={'/post/'+post.id}><h2>{post.title}</h2></Link>
                    </div>
                    <div className="col-md-4">
                        <img
                            className="img-thumbnail"
                            src={require('../../images/'+post.img_path)}
                            alt={post.img_path}
                            height="200"
                            width="300"
                        />
                        <Link className="no-underline" to="#"><div>Posted by {post.author} {post.date}</div></Link>
                        <div><FaEye /> {post.view}  <FaThumbsUp /> {post.like} <FaRegComment /> 0</div>
                    </div>
                    <br />
                    <div className="col-md-6">
                        <p className="text-justify">
                            {
                                this.limitWordDisplay(post.content, 100)
                            } <Link to={'/post/'+post.id}>Read More</Link>
                        </p>
                        
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">   
                                <button type="button" className="btn btn-danger btn-block"><FaShare /> Share</button>
                            </div> 
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">                    
                                {/* <button type="button" className={(this.state.testClass === post.id) ? 'btn btn-primary btn-block bg-danger' : 'btn btn-primary btn-block'} onClick={(e) => this.testing(e, post.id)}><FaThumbsUp /> Like</button>  */}
                                <button type="button" className="btn btn-primary btn-block" disabled={this.state.testClass === post.id ? 'disabled' : ''} onClick={(e) => this.onLike(post.id, post.like, i)}><FaThumbsUp /> Like</button> 
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">    
                                <button type="button" className="btn btn-info btn-block"><FaRegComment /> Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return posts;
    }

    render() {
        const { currentPage, itemsPerPage, totalItemCount, itemsCountPerPage } = this.state;
        let pagination;

        let postD = this.props.post;
        if(postD.length === 0){

        }else{
            let pageDisplayed = Math.ceil(postD.length / itemsPerPage)

            pagination = <Pagination
                hideNavigation
                activePage={currentPage}
                pageRangeDisplayed={pageDisplayed}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={postD.length}
                onChange={this.handlePageChange}
    
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link" />
        }

        return(
            <>
                <div className="container" style={{marginTop: '56px'}}>
                    <h2 className="text-center">Post Page</h2>
                    
                    <div className="col-md-12" >
                        {this.post()}
                        {pagination}
                    </div>
                    
                    {/* <pre>
                    {
                        json
                    }
                    </pre> */}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post,
        isPostLoading: state.isPostLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    Api.getPost(dispatch)

    return {
        //codes
        onLikePost: (postID, postLike) => {
            Api.setLikePostById(dispatch, postID, postLike, 'BLOG');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);

