import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Socket } from 'ngx-socket-io';

import { LoginService } from 'src/app/Services/UserServices/login.service';



@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  messageReceived: string;
  public username = 'sume';
  public showSpinner = false;
  public counter = 0;
  public data;
  private help: {} = {
    _id: 21547
  };
  public Output = document.querySelector('.output');
  public messages = [];
  message;

  signOut() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      // this.loginService.setUserLogOut();
      this.router.navigate(['/login']);
    }, 1000);
  }

  constructor(private loginService: LoginService,
    private router: Router,
    private socket: Socket) { }

  ngOnInit() {
    if (!this.loginService.loggedIn) {
      this.username = 'LIA';
    } else {
      this.username = 'Eng ' + this.loginService.username;
    }
  }



  createSentMessageContainer(count) {
    /**
     * Dynamically creating message fields
     */
    const sentMessageParentContainer = document.createElement('div');
    const sentMessageDiv = document.createElement('div');
    const sentMessageContainer = document.createElement('div');
    const imageDiv = document.createElement('div');
    const sentMessageParagraph = document.createElement('span');
    const sentMessageTimeSpan = document.createElement('span');
    const senderProfilePicture = document.createElement('img');

    /**
     * Dynamically adding styles via classes
     */
    sentMessageParentContainer.classList.add('d-flex');
    sentMessageParentContainer.classList.add('justify-content-end');
    sentMessageParentContainer.classList.add('mb-2');
    sentMessageDiv.classList.add('message_container_send');
    // imageDiv.classList.add('img_cont_msg');
    sentMessageParagraph.classList.add('sentMessage' + count);
    sentMessageTimeSpan.classList.add('sentMessageTime');
    sentMessageTimeSpan.classList.add('msg_time_send');
    // senderProfilePicture.classList.add('rounded-circle');
    // senderProfilePicture.classList.add('user_img_msg');
    // senderProfilePicture.src = "";

    /**
     * Dynamically appending child elements
     */
    sentMessageDiv.appendChild(sentMessageParagraph);
    sentMessageDiv.appendChild(sentMessageTimeSpan);
    imageDiv.appendChild(senderProfilePicture);

    sentMessageContainer.appendChild(imageDiv);
    sentMessageContainer.appendChild(sentMessageDiv);
    sentMessageParentContainer.appendChild(sentMessageContainer);
    sentMessageParentContainer.classList.add('messageContainerClass');



    return sentMessageParentContainer;

  }


  createReceivedMessageContainer(count) {

    /**
     * Dynamically creating message fields
     */
    const receivedMessageParentContainer = document.createElement('div');
    const receivedMessageDiv = document.createElement('div');
    const receivedMessageContainer = document.createElement('div');
    const receivedImageDiv = document.createElement('div');
    const receivedMessageParagraph = document.createElement('span');
    const receivedMessageTimeSpan = document.createElement('span');
    const receivedProfilePicture = document.createElement('img');

    /**
     * Dynamically adding styles via classes
     */

    receivedMessageParentContainer.classList.add('d-flex');
    receivedMessageParentContainer.classList.add('justify-content-start');
    receivedMessageParentContainer.classList.add('mb-2');
    receivedMessageDiv.classList.add('message_container');
    // receivedImageDiv.classList.add('img_cont_msg');
    receivedImageDiv.classList.add('profilePicture');
    receivedMessageParagraph.classList.add('receivedMessage' + count);
    receivedMessageTimeSpan.classList.add('receivedMessageTime');
    receivedMessageTimeSpan.classList.add('msg_time');
    // receivedProfilePicture.classList.add('rounded-circle');
    // receivedProfilePicture.classList.add('user_img_msg');
    // receivedProfilePicture.src = "";

    /**
     * Dynamically appending child elements
     */
    receivedMessageDiv.appendChild(receivedMessageParagraph);
    receivedMessageDiv.appendChild(receivedMessageTimeSpan);
    receivedImageDiv.appendChild(receivedProfilePicture);

    receivedMessageContainer.appendChild(receivedImageDiv);
    receivedMessageContainer.appendChild(receivedMessageDiv);
    receivedMessageParentContainer.appendChild(receivedMessageContainer);
    receivedMessageParentContainer.classList.add('messageContainerClass');

    return receivedMessageParentContainer;

  }



  createLoggedInUsers(nameOfUser, status, countA, countB) {

    /**
    * Dynamically creating message fields
    */
    const ParentContainer = document.createElement('li');
    const subContainer_alignment = document.createElement('div');
    const userProfilePicture = document.createElement('i');
    const userProfilePictureContainerContainer = document.createElement('div');
    // let userOnlineIcon = document.createElement('span');
    const userInfo = document.createElement('div');
    const usernameSpanTag = document.createElement('span');
    const lastSeenStatus = document.createElement('p');

    /**
     * Dynamically adding styles via classes
     */

    subContainer_alignment.classList.add('d-flex');
    subContainer_alignment.classList.add('bd-highlight');

    userProfilePictureContainerContainer.classList.add('img_cont');

    userProfilePicture.classList.add('fas');
    userProfilePicture.classList.add('fa-user-circle');
    userProfilePicture.classList.add('fa-3x');
    userProfilePicture.classList.add('userIcon');


    userInfo.classList.add('user_info');
    usernameSpanTag.classList.add('username' + countA);
    usernameSpanTag.classList.add('text-capitalize');
    lastSeenStatus.classList.add('lastSeenAt' + countB);
    lastSeenStatus.classList.add('available');

    /**
    * Dynamically adding content
    */
    usernameSpanTag.innerHTML = nameOfUser;
    lastSeenStatus.innerHTML = status;


    /**
     * Dynamically appending child elements
     */
    userInfo.appendChild(usernameSpanTag);
    userInfo.appendChild(lastSeenStatus);

    userProfilePictureContainerContainer.appendChild(userProfilePicture);
    // userProfilePictureContainerContainer.appendChild(userOnlineIcon);


    subContainer_alignment.appendChild(userProfilePictureContainerContainer);
    subContainer_alignment.appendChild(userInfo);

    ParentContainer.appendChild(subContainer_alignment);

    return ParentContainer;


  }

} // End of the main class


