import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import ChatBot from 'react-simple-chatbot';
import Botpic from '../../../images/chatprof.png';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import connections from '../../../config';

function Chat() {
  const [responses, setResponses] = useState([]);
  const chatBotRef = useRef(null);

  const chatinsert = connections.slchatinsert;

  const handleEnd = async ({ values }) => {
    console.log(values);

    const name = values[0];
    const problem = values[1];
    const tpno = values[2];
    const currentDateTime = new Date().toUTCString(); // Get current date and time in ISO format

    const value3 = {
      query: "INSERT INTO chat(name, problem, tpno,countryid,statusid,time) VALUES (?,?,?,?,?,?)",
      value1: name,
      value2: problem,
      value3: tpno,
      value4: 2,
      value5: 1,
      value6: currentDateTime,
      key: "FKoaDwCi7C"
    };

    await axios.post(chatinsert, value3)
      .then((response) => {
        // Handle response if needed
      })
      .catch((err) => {
        console.log(err);
      });

    setResponses(values);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatBotRef.current) {
        chatBotRef.current.querySelector('.rsc-float-button').click();
      }
    }, 30000); // 30000ms = 30 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const images = [
    Botpic, Botpic
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500000); // 500000ms = 5 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const { t } = useTranslation();
  const { Thaiques1, Thaiques2, Thaiques3, Thaiques4
  } = t('Thaichatsec', { returnObjects: true });

  return (
    <div ref={chatBotRef} className="chat-container" style={{ '--floating-button-image': `url(${images[currentImageIndex]})` }}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hi! I am here to help you. Can I know your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, How Can I help you?',
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Sure. Can I have your phone number?',
            trigger: '6',
          },
          {
            id: '6',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'Thank you! One of our staff will call you shortly.',
            end: true,
          },
        ]}
        floating={true}
        handleEnd={handleEnd}
        className="custom-chatbot"
        botAvatar={Botpic}
        headerTitle="Kiara"
      />
      <div className="online-dot"></div>
    </div>
  );
}

export default Chat;
