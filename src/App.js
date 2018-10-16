// Import React
import React, { Component } from "react";
// import Navbar from '../src/Navbar'
// Import Container component.
import Container from "../src/Container";
// Import Row component.
import Row from "../src/Row";
// Import Col component.
import Col from "../src/Col";
// Import navbar
import Navbar from "../src/Navbar";
// import NavigationBar from "../src/NavigationBar";

import Button from "../src/Button";

// Import Modal***
import Modal from "react-responsive-modal";
import TextLoop from 'react-text-loop';

// Import Jumbotron component.
import Jumbotron from '../src/Jumbotron';
// Import SearchForm component.
import LoginForm from '../src/LoginForm'
// Import ResultsList component.
import Playlist from '../src/Playlist'
import Song from '../src/Song'
// Import Footer component.
import Footer from '../src/Footer'
import './App.css';


// // Still need to import API (?)



class App extends Component {
    
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {
        const {open} = this.state

        return (
            <div>
                <Navbar />
                <Jumbotron />
                {/* <NavigationBar /> */}
                <div>
                <Container className="body-container" fluid="true" style={{ marginTop:10 }}>
                    <Row>
                        <Col size="md-5">
                            <Button onClick={this.onOpenModal} center>Launch a room</Button>
                            <h5>Create a room in seconds</h5>
                            <ul>
                                <li>#1) Pick a room name + a Spotify playlist</li>
                                <li>#2) Share a unique link with friends or customers</li>
                                <li>#3) Let the people vote & bask in social music</li>
                            </ul>
                        </Col>

                        <Col size="md-1" />
                            
                        <Col size="md-6">
                            <h4 class="featurette-heading">Listen together. Vote on the next song. Give every listener a voice.</h4>
                            <p class="lead">Take your listening to the next level. Let the group or crowd easily participate in shaping your playlist. Throw a better party, please your customers or have more fun in the car with your friends.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Modal open={open} onClose={this.onCloseModal} center>

                        {/* Try to make this a component. It uses react-responsive-modal */}
                        <br >
                        </br><h5>Create your room</h5>
                        <form className ="mainForm">
                        <div className="logo-transparent" />
                            <p className="form-brand-name">SoundUp</p>
                            {/* <br /> */}
                                <div className="form-group">
                                    <input type="text" className="form-control" id="room-name" aria-describedby="emailHelp" placeholder="Name your room" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="room-password" placeholder="Room password (optional)" />
                                </div>
                                <br />
                            
                                {/* THIS BUTTON *** should be the onClick facilitator for 
                                connecting to spotify API for login, and ultimately picking a playlist.

                                Once a playlist is chosen, that returned object should be used to 
                                populate (.map) <Song>s in a <Playlist>* - need to make a player somehow -
                                
                                Then we'll randomize vote options (5) from that same object and sync them to socket.io activity.
                                The ID of the winning song will be used to queue it as "next up" (via Spotify API)
                                and reset the random voting options function. 
                                (which has socket.io session data and accesses Spotify playlist)*/}

                                 <Button onClick={this.onOpenModal}> 
                                Select Playlist
                            </Button>
                            
                        </form>

                        </Modal>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
        );
    }
    }

    export default App;
