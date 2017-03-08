
import React from 'react';


export default class CreateTodo extends React.Component {

     constructor(props) {
        super(props);
            this.state = {
            new_task: ''
        };

  }


    onValueChange(event) {

        console.log('new_task: ' + event.target.value);
        this.setState({ new_task: event.target.value});
    }
  
    handleCreate(event) {

        event.preventDefault();
        this.props.onCreate({task: this.state.new_task});
        this.setState({new_task: ''});
    }

    render() {
        console.log(this.props);
        return (
            
            <form onSubmit={this.handleCreate.bind(this)}>

                <input type="text" placeholder="What do i need to do?" value={this.state.new_task} onChange={this.onValueChange.bind(this)} />
                <button>Create</button>
            </form>
        );
    }
}