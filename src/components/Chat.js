import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import "./grid.css";
import SidePanel from "./Chat/SidePanel/SidePanel";
import Messages from "./Chat/Messages/Messages";

const Chat = ({}) => (
  <Container fluid id="zero-pad">
    <br></br>
    <br></br>
    <h1>HELP SECTION</h1>
    <br></br>
    <hr></hr>
    
    <h1>1. Accessing the Complaint Center:</h1>
    <ul class="list-unstyled">
   <li> <h4>Users will find a "Complaint" button on the side bar of the application. This button is prominently displayed for easy access. Clicking on the "Complaint" button will open the complaint center.</h4></li>
   </ul>
   <h1>2. Creating a Support Ticket:</h1>
   <ul class="list-unstyled">
   <li> <h4> Within the complaint center, users will have the option to "Write a Complaint" to create a new support ticket</h4></li>
   <li> <h4> Clicking on "Write a Complaint" will open a form with the following fields:</h4></li>
      <ul>
      <li> <b>Ticket Name</b>: A short title or name for the complaint.</li>
      <li> <b>Subject</b>: A brief description of the issue.</li>
      <li> <b>Category</b>: Users can select the category that best describes their grievance.</li>
      <li> <b>Description</b>: A detailed explanation of the problem or concern.</li>
      </ul>
   <li> After filling out the form, users should click "Submit" button to generate the ticket.</li>
   </ul>
   <h1>3. Ticket Confirmation:</h1>
   <ul class="list-unstyled">
   <li> <h4> Upon successfully submitting the support ticket, users will receive a confirmation message indicating that their complaint has been registered. This message can also include a unique ticket ID for reference.</h4></li>
  </ul>
  <h1>4. Viewing Ticket Status:</h1>
  <ul class="list-unstyled">
  <li> <h4>  Users can check the status of their support ticket by returning to the side bar and clicking on "Complaints."</h4></li>
  </ul>


  <h1>5. Ticket Status Check:</h1>
  <ul class="list-unstyled">
  <li> <h4> On the ticket status page, users will see a list of their generated tickets, each with a unique ID and the following information:</h4></li>
  <ul>
      <li> <b>Ticket Name</b>: The title or name given to the complaint.</li>
     <li> <b> Subject</b>: A brief description of the issue.</li>
     <li> <b> Category</b>: The category selected.</li>
     <li> <b> status</b>: A status tag, which is initially "Pending."</li>
     <li> <b> Response</b>: A response from the support team (if any).</li>
     </ul>
     </ul>


     <h1>6. Tracking Ticket Status:</h1>
     <li> <h4> The "Status" tag on the ticket will be initially marked as "Pending." This indicates that the support team is actively addressing the issue.</h4></li>
     <li> <h4> If the issue is resolved, the status will be updated to "Resolved" or "Closed," and users will see the resolution provided by the support team.</h4></li>

   <h1>7. Adding Comments and Attachments:</h1>
   <li> <h4> If the issue is not resolved to the user's satisfaction, they have the option to add more comments or file attachments to further explain or strengthen their case.</h4></li>
   <li> <h4> Users can communicate with the support team within the ticket and continue the dialogue until the issue is resolved to their satisfaction.</h4></li>

   <h1>8. Dashboard Highlights:</h1>
   <li> <h4> In the dashboard, users will find highlights of all their generated tickets represented in the form of a pie chart or other graphical representation. This chart can provide an overview of the distribution of their grievances across different categories.</h4></li>
   <br></br>
   <br></br>
  </Container>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
});

export default connect(mapStateToProps)(Chat);
