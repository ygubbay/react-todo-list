import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
{
    task: 'make react tutorial',
    isCompleted: false
},
{
    task: 'eat dinner',
    isCompleted: true
}
]
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    CreateTodo(task) {

        task.isCompleted = false;
        //this.state.todos({ task: task, isCompleted: false});
        var todos = this.state.todos;

        todos.push(task);
        this.setState( {todos: todos});
    }
    render() {
        return (
            
            <div>
                <h1>React Todos App</h1>

                <CreateTodo onCreate={(task) =>this.CreateTodo(task)} />
                <TodosList todos={this.state.todos} />
            </div>
        );
    }
}