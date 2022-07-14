import React, { Component, useState, createRef, useEffect } from "react";

import "./Message.css";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      type: "other",
      msg: "Finally. What's the plan?",
    },
    
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <p>Rahul</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="btn"> List </i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="btn"> Add </i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="btn btn"> Send</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}