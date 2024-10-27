import React, { useState } from 'react';
import styles from './Chat.module.css';

import { Message } from './Message';


export const Chat = (company) => {
    const [messages, setMessages] = useState([{sender: 'bot', text: 'Привет! Я Советник и я помогу Вам подобрать игру, основываясь на ваших интересах.'}]);
    const [userInput, setUserInput] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Чтобы не добавлялся перенос строки в поле ввода
          sendMessage(); // Отправить сообщение
        }
      };

    const sendMessage = async () => {
        if (!userInput.trim()) return;
    
        // Добавляем сообщение пользователя в список
        const newMessage = { sender: 'user', text: userInput };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        
        // Очищаем поле ввода
        setUserInput('');
    
        try {
          const response = await fetch('https://2mj0ir-82-137-176-30.ru.tuna.am/query_sib', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                text: userInput 
            }),
          }
        );
    
          const data = await response.json();
    
          const botMessage = { sender: 'bot', text: data };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (

    <main className={styles['chat-wrapper']}>

      <header className={styles.header}>

        <img 

          loading="lazy" 

          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4b9483de1d73a128a6803e9eee9793e6614add629c10aa9978d58fd7207f92d?placeholderIfAbsent=true&apiKey=91f2b3c7e1024281a6c7da0dfb0eaca6" 

          className={styles.avatar}

          alt="" 

        />

        <h1 className={styles['bot-title']}>

          Чат-бот <span className={styles['bot-title-bold']}>Советник</span>

        </h1>

      </header>

      <div className={styles.messages}>
        {messages.map((message, index) => (
            <Message 
            key={index}  // Не забудьте добавить ключ для каждого элемента списка
            avatar={message.sender === 'bot' ? true : undefined}
            className={message.sender === 'bot' ? styles['age-message'] : styles['age-option']}
            >
            <span>{message.text}</span>
            </Message>
        ))}
    </div>

      <input 
        type="text" 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        onKeyDown={handleKeyDown}
        placeholder='Напишите свой вариант:' className={styles['custom-option']}>
      </input>
    
    </main>

  );

};