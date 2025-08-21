import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Robot from '../assets/robot.gif'

export default function Welcome({ currentUser }) {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('chat-app-user'));
        if (userData && userData.username) {
          setUserName(userData.username);
        } else {
          setUserName(""); // Fallback if no username is found
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setUserName(""); // Fallback in case of error
      }
    };

    fetchUserName();
  }, []);

  return (
    <Container>
        <img src={Robot} alt="robot" />
        <h1>
            Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Select a chat to start Conversation</h3>
    </Container>
  )
}
const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;