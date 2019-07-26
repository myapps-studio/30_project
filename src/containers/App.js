import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';

import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        console.log("Constructing App", props);
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed my cats'
                }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        console.log("Adding todo", todo, data);
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        console.log("Removing todo", id);
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        console.log("Rendering App", style, Title);
        return (
            <div className={style.TodoApp}>
                <Title taskNumber={this.state.data.length}/>
                <TodoList tasks={this.state.data}/>
            </div>
        );
    }
}

export default hot(module)(App);