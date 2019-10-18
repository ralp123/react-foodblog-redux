import React, {Component} from 'react';
//import { connect } from 'react-redux';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Api from '../../apis/api';
//import { Carousel } from 'react-bootstrap';

class About extends Component {

    render() {
        return(
            <>  
                <h2 className="text-center mb-5">About Us</h2>
                
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </>
        );
    }
}

// const mapStateToProps = (state) => {
//     // return {
//     //     post: state.post,
//     //     isPostLoading: state.isPostLoading
//     // }
// }

// const mapDispatchToProps = (dispatch) => {
//     // Api.getPost(dispatch)

//     // return {
//     //     //codes
//     // }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(About);
export default About;