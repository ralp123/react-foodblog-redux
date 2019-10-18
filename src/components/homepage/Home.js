import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import Post from './Post';
import About from './About';
import ContactUs from './ContactUs';
// /import PostPage from './PostPage';

class Home extends Component {

    render() {

        return(
            <>               
                    <div className="container-fluid" style={{marginTop: '56px'}}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../../images/spices1200x800-1.jpg')}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../../images/spices1200x800-2.jpg')}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={require('../../images/spices1200x800-3.jpg')}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                    <div className="container mt-4">
                        <Post />
                    </div>

                    <div className="container mt-4">
                        <About />
                    </div>

                    <div className="container mt-4">
                        <ContactUs />
                    </div>     
                            
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPostLoading: state.isPostLoading
    }
}

export default connect(mapStateToProps)(Home);
//export default Home;