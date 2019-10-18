import React, {Component} from 'react';
//import { connect } from 'react-redux';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Api from '../../apis/api';
//import { Carousel } from 'react-bootstrap';

class ContactUs extends Component {

    render() {
        return(
            <>  
                <h2 className="text-center mb-5">Contact Us</h2>
                
                <form >
                    <div className="form-group">
                        <label>Name:</label>
                    <input type="text" className="form-control" id="pwd" placeholder="Name" name="pswd" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Subject:</label>
                    <input type="text" className="form-control" id="pwd" placeholder="Subject" name="pswd" />
                    </div>
                    <div className="form-group">
                        <label>Subject:</label>
                        <textarea className="form-control" rows="3" id="comment"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
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

//export default connect(mapStateToProps)(ContactUs);
export default ContactUs;
