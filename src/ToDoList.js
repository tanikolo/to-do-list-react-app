import { Component } from "react";
import check from './icon.png';


export class ToDoList extends Component {
    state = {
        userInput: "",
        checkList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Please enter the text')
        } else {
        let listArray = this.state.checkList;
        listArray.push(input);
        this.setState({checkList: listArray, userInput: ""})
    }
}

deleteItem() {
    let listArray = this.state.checkList;
    listArray = [];
    this.setState({checkList: listArray})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
    e.preventDefault();
}

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What do you want to do today?" onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
            <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
            </div>
            <ul>
            {this.state.checkList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} alt="Check box" width="30px"/>{item}</li>
            ))}
            </ul>
<div className="container">
<button onClick={() => this.deleteItem()} className="btn delete">Delete All</button>
</div>
</form>
            </div>
        )
    }
}