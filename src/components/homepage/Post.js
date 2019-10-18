import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
//import Api from '.././apis/api';
import Api from '../../apis/api';
const axios = require('axios');
//import { Carousel } from 'react-bootstrap';

class Post extends Component {

    limitWordDisplay = (str, limit) => {
        if(str.length >= limit){
            //console.log(str.split(" ").length); --> count the words
            return str.split(' ').splice(0,limit).join(" ")
        }
    }

    render() {
        //axios.get("http://127.0.0.1:8000/api/v1/post").then(function (response){ console.log(response.data.results); });
        return(
            <>
            <h2 className="text-center mb-5">Post</h2>
            
            <div className="row">
            {this.props.isPostLoading ? 
                (
                    <>                 
                        <span className="spinner-grow text-primary"></span>
                        <span className="spinner-grow text-primary"></span>
                        <span className="spinner-grow text-primary"></span>
                    </>
                ) :   
                    this.props.post.slice(0,3).map((post,i) =>                
                        <div className="col-md-4" key={post.id}>
                            <div className="card" >
                                <Link to="#">
                                    <img className="card-img-top" src={require('../../images/'+post.img_path)} alt={post.img_path} style={{width: "100%"}} height="200" />     
                                </Link>
                                <div className="card-body">
                                    <Link to={'/post/'+post.id}>
                                        <h4 className="card-title">{post.title}</h4>
                                    </Link>
                                    <p className="card-text">
                                        {
                                            this.limitWordDisplay(post.content, 20) 
                                        }...
                                    </p>
                                    <Link to={'/post/'+post.id}><button className="btn btn-primary">See More</button></Link>
                                </div>
                            </div>
                        </div>  
                    )
            }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

