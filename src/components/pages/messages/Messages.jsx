import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ConnectionState } from './ConnectionState';
import { MessageForm } from './MessageForm/MessageForm';
import { Events } from './Events';
import { io } from 'socket.io-client';

//! https://www.oneclickitsolution.com/blog/socket-io-in-reactjs/
export const  Messages = ({token}) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(null);
  const [messages, setMessages] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(token);
    const socketInstance = io('http://localhost:4000',{
      query: {token},
    });
    
    setSocket(socketInstance);
  
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessage(value) {
      setMessages(messages => [...messages, value]);
    }

    socketInstance.on('connect', onConnect);
    socketInstance.on('disconnect', onDisconnect);
    socketInstance.on('message', onMessage);

    return () => {
      socketInstance.off('connect', onConnect);
      socketInstance.off('disconnect', onDisconnect);
      socketInstance.off('message', onMessage);
    };
  }, []);

  const sendText = () => {
    socket.emit("newMessage", {message }, () => {});
    // socket.emit("newMessage", { id, text, chatId }, (error, notification) => {
    //   if(error) {
    //     console.log(error, notification);
    //     return onMessage([...messeges, { id, chatId, type: 'from', text: 'Извините сервис временно недоступен!', date: dateMessage()}]);
    //   }
    //   onMessage([...messeges, { id, chatId, type: 'to', text: text, date: dateMessage(), serverAccepted: notification.add, botAccepted: notification.send }]);
    // });
  }

  return (
    <Row>
      <Col xs={3}>
        <div>
          <div>Тест</div>
          <div>Онлайн</div>
        </div>
      </Col>
      
      <Col xs={9}>
        <div>Тестовое сообщение</div>
        <Form>
          <br/>
          <Form.Group className="mb-3" controlId="exampleForm.Messages">
            <Form.Control as="textarea" placeholder="Введите Ваше сообщение" value={message} onChange={(e) => {setMessage(console.log(e.target.value))}}/>
          </Form.Group>
          <Button variant="primary" onClick={sendText}>Отправить</Button>{' '}
        </Form>
      </Col>
    </Row>
  );
}