import React, { useState, useEffect } from 'react';
import {Header} from './Mycompnents/Header';
import Footer from './Mycompnents/Footer';
import Todos from './Mycompnents/Todos';
import AddTodo from './Mycompnents/AddTodo';
import About from './Mycompnents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
    let initTodo;
    if(localStorage.getItem("todos") === null){
      initTodo = [];
    }else{
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const addTodo = (title, desc) => {
      console.log(title, desc)
      let sno;
      if(todos.length === 0){
        sno = 0;
      }else{
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno : sno,
        title : title,
        desc : desc
      }
      console.log(myTodo)
      setTodos([...todos,myTodo])


      if(localStorage.getItem("todos")){
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    }



    const onDelete = (todo) =>{
      console.log("I am on Delete of todo",todo)

      setTodos(todos.filter( (e) => {
        return e!==todo;
      }))
      localStorage.getItem("todos");
    }




    const [todos, setTodos] = useState(initTodo);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


  return (
    <>
      <Router>
        <Header title='My ToDo list' searchBar={false}/>
        <Switch>
          <Route exact path="/" render={() => {
            return(
              <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>  
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        

        <Footer />
      </Router>
    </>
  );
}

export default App;
