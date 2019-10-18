import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Api from '../../apis/api';
import TestP from '../testpage/TestP';
import { FaEye, FaThumbsUp, FaRegComment, FaShare } from 'react-icons/fa';

//import { Carousel } from 'react-bootstrap';

class PostPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            testLoading: true,
            postId: props.match.params.postId,

            test: 'hello',
            isViewLoading: true,
            
            postDetailsView : this.props.postDetails.view
        }
    }

    componentDidMount(){
        const {postId} = this.state;

        this.props.getPostById1(postId);
    }

    onLike = () => {
        let btn;
        
        if(this.props.isLoadingLike === true){
            btn = <button className="btn btn-primary btn-block" disabled>
                <span className="spinner-grow spinner-grow-sm"></span>
                <span className="spinner-grow spinner-grow-sm"></span>
                <span className="spinner-grow spinner-grow-sm"></span>
                <FaThumbsUp />
                Like
            </button>
        }else{
            btn = <button type="button" 
                className="btn btn-primary btn-block" 
                onClick={() => this.props.onLike(this.props.postDetails.id, this.props.postDetails.like) }>
                <FaThumbsUp /> Like
            </button> 
        }

        return btn;
    }

    render() { 
        //console.log(this.props.isLoadingLike);
        return(
            <>  
                <div className="container" style={{marginTop: '56px'}}>
                    {this.props.isLoadingPostD ? (
                        <>                 
                            <span className="spinner-grow text-primary"></span>
                            <span className="spinner-grow text-primary"></span>
                            <span className="spinner-grow text-primary"></span>
                        </>
                    ) : (

                        (this.props.postDetails.length === 0) ? (
                            null
                        ): (
                            <>
                                <Link className="no-underline" to="#"><h2>{this.props.postDetails.title}</h2></Link>

                                <img
                                    className="img-fluid"
                                    src={require('../../images/'+this.props.postDetails.img_path)}
                                    alt="Third slide"
                                />
                                
                                <Link className="no-underline" to="#"><div className="author-and-date">Posted by {this.props.postDetails.author} {this.props.postDetails.date}</div></Link>
                                <div><FaEye /> {this.props.postDetails.view}  <FaThumbsUp /> {this.props.postDetails.like} <FaRegComment /> 0</div> 
                                <br />
                                <p>{this.props.postDetails.content}</p>  
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">   
                                        <button type="button" className="btn btn-danger btn-block"><FaShare /> Share</button>
                                    </div> 
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">                    
                                        { this.onLike() }
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">    
                                        <button type="button" className="btn btn-info btn-block"><FaRegComment /> Comment</button>
                                    </div>
                                </div>
                            </>
                        )
                    )}  
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postDetails: state.postDetails,
        isLoadingPostD: state.isLoadingPostD,
        isLoadingLike: state.isLoadingLike
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostById1: (postId) => {
            Api.setViewPostId(dispatch, postId, 'POSTPAGE')
        },
        onLike: (postID, like) => {
            Api.setLikePostById(dispatch, postID, like, 'POSTPAGE')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);

