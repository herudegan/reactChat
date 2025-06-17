import React, { useState, useEffect, useRef } from 'react'; 
import { useLocation } from 'react-router-dom';
import './mensagem.css';

export default function Chat() {
  const location = useLocation();
  const userName = location.state?.userName || 'Você';

  const [mensagens, setMensagens] = useState([
    { author: 'attendant', text: 'Olá! Como posso ajudar?' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (location.state?.userName) {
      setMensagens(prevMessages => [
        { author: 'attendant', text: `Olá, ${location.state.userName}! Como posso ajudar?` },
        ...prevMessages.slice(1)
      ]);
    }
  }, [location.state?.userName]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [mensagens]);

  const enviarMensagem = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMensagens([...mensagens, { author: 'you', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="body">
      <h1>React Chat</h1>
      <div className="chat-container" ref={chatContainerRef}>
        {mensagens.map((msg, idx) => (
          <div
            key={idx}
            className={`mensagem-container ${msg.author === 'you' ? 'right' : 'left'}`}
          >
            <div className="box">
              <div>
                <strong style={{ color: 'rgb(170, 170, 170)' }}>
                  {msg.author === 'attendant' ? 'Atendente diz:' : `${userName} diz:`}
                </strong>
              </div>
              <div className="mensagem-texto">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={enviarMensagem}>
        <div className="send-message">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
          />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}