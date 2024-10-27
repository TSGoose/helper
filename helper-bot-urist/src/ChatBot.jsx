import React, { useState } from 'react';
import styles from './ChatBot.module.css';
import { Welcome } from './Welcome';
import { CompanySelection } from './CompanySelection';
import { Chat } from './Chat'

const ChatBot = () => {
  

  const [page, setPage] = useState(0);
  const [company, setCompany] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Функция для отправки запроса к API
  

  // Функция для открытия и закрытия чата
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };

  const handleSetCompany = (company) => {
    setCompany(company);
    handleNextPage();
  }

  return (
    <div className={styles.back}>
      {/* Кнопка для открытия/закрытия чата
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? 'Закрыть' : 'Открыть чат'}
      </button> */}
      <main className={styles.container}>
        <section className={styles.mainSection}>
            <img 
            loading="lazy" 
            src="Union.png" 
            className={styles.backgroundImage} 
            alt=""
            />
            {page == 0 && <Welcome onNextPage={handleNextPage}/>}
            {page == 2 && <CompanySelection onSetCompany={handleSetCompany}/>}
            {page == 1 && <Chat company={company}/>}

        </section>
        
        </main>
      {/* Сам виджет чата */}
      {/* <div className={`chat-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={toggleChat}>
          <h3>Поддержка</h3>
        </div>
        {isOpen && (
          <>
            <div className="chat-body">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Введите сообщение..."
              />
              <button onClick={sendMessage}>Отправить</button>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
};

export default ChatBot;
