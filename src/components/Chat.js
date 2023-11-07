import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import "./grid.css";
import SidePanel from "./Chat/SidePanel/SidePanel";
import Messages from "./Chat/Messages/Messages";

const Chat = ({}) => (
  <Container fluid id="zero-pad">
    <h1>HELP SECTION</h1>
    <br></br>
    <hr></hr>
  </Container>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
});

export default connect(mapStateToProps)(Chat);
