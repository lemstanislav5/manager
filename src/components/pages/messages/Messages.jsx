import { useEffect, useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ConnectionState } from './ConnectionState';
import { MessageForm } from './messageForm/MessageForm';
import { Events } from './Events';
import { io } from 'socket.io-client';
import Dialogue from './dialogue/Dialogue';
import handlers from '../../../handlers';
import Users from './users/Users';
import style from './Messages.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { usersActionCreator, massagesActionCreator, currentUserCreator, addMessageCreator, addUserOnline, addUserOffline} from '../../../redux/actions'

//! https://www.oneclickitsolution.com/blog/socket-io-in-reactjs/
export const Messages = () => {
  const dispatch = useDispatch()
  const { messages } = useSelector((store) => store.messages);
  const { users, currentUser } = useSelector((store) => store.users);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const setCurrentUser = chatId => dispatch(currentUserCreator(chatId));

  useEffect(() => {
    const token = localStorage.getItem("token");
    const socketInstance = io('http://localhost:4000', {
      query: { token },
    });

    setSocket(socketInstance);
       
    socketInstance.on('connect', () => handlers.onConnect);
    socketInstance.on('disconnect', () => handlers.onDisconnect);
    socketInstance.on('newMessage', (message) => dispatch(addMessageCreator(message)));
    //!dispatch
    socketInstance.on('online', (chatId) => {
      dispatch(addUserOnline(chatId));
      console.log('online: ', chatId);
    });
    socketInstance.on('offline', (chatId) => {
      dispatch(addUserOffline(chatId));
      console.log('offline: ', chatId);
    });
    //socketInstance.on('newUser', () => handlers.onMessage);
    return () => {
      socketInstance.off('connect', handlers.onConnect);
      socketInstance.off('disconnect', handlers.onDisconnect);
      socketInstance.off('newMessage', (message) => dispatch(addMessageCreator(message)));
      //!dispatch
      socketInstance.off('online', (chatId) => {});
      socketInstance.on('offline', (chatId) => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket !== null) {
      socket.emit('getUsers', (users) => dispatch(usersActionCreator(users)));
      socket.emit('getMesseges', (messages) => dispatch(massagesActionCreator(messages)));
      //!ОСТАНОВИЛСЯ ЗДЕСЬ
    }
  }, [socket])

  const sendText = () => {
    console.log('sendText')
    socket.emit('newMessage', { message }, () => { 
      console.log(message);
    });
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
      <Col xs={4}>
        <div>Пользователи</div>
        <Users users={users} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Col>

      <Col xs={8}>
        <Dialogue messages={messages} currentUser={currentUser} />
        <Form>
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.Messages">
            <Form.Control as="textarea" disabled={(currentUser === null)? true: false} placeholder="Введите Ваше сообщение" value={message} onChange={(e) => { setMessage(e.target.value) }} />
          </Form.Group>
          <Button variant="primary" onClick={sendText} disabled={(currentUser === null)? true: false}>Отправить</Button>{' '}
        </Form>
      </Col>
    </Row>
  );
}