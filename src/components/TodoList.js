import React, { useState, useEffect } from 'react';
// import { Button } from './button.style';
import styled from 'styled-components';
import CreateTask from './modals/createTask'
import Card from './card';
import QuoteOfTheDay from './quoteOfTheDay';
import { Container } from 'reactstrap';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])


const Header = styled.div`
    /* background-image: url("./src/images/desk.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    height: 250px;
    width: 100%;
    background-color: #EDD3E4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  `;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    `
  
const CreateTaskButton = styled.button`
    background-color: #fff;
    background-image: none;
    cursor: pointer;
    font-family: Neucha, sans-serif;
    font-size: 1rem;
    padding: 0.75rem;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
      transform: translate3d(0, 2px, 0);
    }
  `;

const QuoteContainer = styled.div`
    margin-top: 20px;
    background-color: #FCFCFD;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    font-family: 'JetBrains Mono', monospace;
    height: 48px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;


useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <>
            <Header>
            <img src={require("./Icons/images/Picture1.jpg")} alt="Logo" width="500" height="333" />
                <Container>
                    <ButtonContainer>
                    <CreateTaskButton onClick={() => setModal(true)}>
                Create Task
                </CreateTaskButton>
                    </ButtonContainer>

                <QuoteContainer>
                    <QuoteOfTheDay />
                </QuoteContainer>
                </Container>

                </Header> 
            <div className='task-container'>
                {taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};



export default TodoList;