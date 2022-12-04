import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from './Outlet';
import { FaTrello } from 'react-icons/fa';

const Body = styled.body`
  font-family: 'Lato', sans-serif;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const Forma = styled.div`
  background: #262626;
  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  width: 300px;
  height: 400px;
  position: relative;
  & h2 {
    margin-top: 20px;
    font-size: 55px;
    color: #00bfff;
    margin-bottom: 30px;
  }

  & input {
    border: none;
    background: none;
    text-align: center;
    outline: none;
    padding: 10px;
    margin: 20px;
    color: white;
    height: 30px;
    width: 70%;
    border-radius: 40px;
    transition: 0.2s ease-in;
  }

  & input[type='text'],
  form input[type='password'] {
    border: solid 2px #1b9cfc;
  }

  & input[type='submit'] {
    border: solid 2px #55e6c1;
    box-sizing: border-box;
    height: 50px;
    width: 40%;
    cursor: pointer;
  }
  & input[type='text']:focus,
  form input[type='password']:focus {
    width: 80%;
    border: solid 2px #55e6c1;
  }

  & button {
    border: 2px solid black;
    border-radius: 15px;
    background-color: #00ced1;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const userData = {
  email: 'myktybek',
  password: '5555',
};

const Form = () => {
  const [text, setText] = useState({
    email: '',
    password: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();

    setText({
      ...text,
      email: '',
      password: '',
    });
    console.log(text);
  };

  return (
    <Body>
      <Forma>
        <div onSubmit={submitHandler}>
          <h2>
            Вход в Trello
            <FaTrello />
          </h2>

          <input
            type="text"
            placeholder="Email"
            value={text.email}
            onChange={(e) => setText({ ...text, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Password"
            value={text.password}
            onChange={(e) => setText({ ...text, password: e.target.value })}
          />
          {text.email === userData.email &&
          text.password === userData.password ? (
            <button onClick={submitHandler}>
              <Layout />
            </button>
          ) : (
            <p>Введите правильные данные</p>
          )}
        </div>
      </Forma>
    </Body>
  );
};

export default Form;
