import React, { Component, Fragment } from 'react';

//var newNtestee = {    name: this.theName.value,    title: this.theTitle.value,    content: this.theNote.value  };

class Alista extends Component {

    state = {
        names: [],       

    }

    componentDidMount() {
        this.getNames();
    }

    getNames = _ => {
        fetch('http://localhost:3001/hermes/')
            .then(response => response.json())
            .then(response => this.setState({ names: response.data }))
            .then(({ data }) => { console.log(data) })
            .catch(err => console.error(err))
    }
    addNewName = _ => {
        const { names } = this.state;
        fetch(`http://localhost:3001/hermes/add?name=${names.name}&title=${names.title}&title=${names.note}`)
            .then(response => response.json())
            .then(this.getNames)
            .catch(err => console.err(err))
    }

    renderName = ({ id, name, title, note }) => <div key={id}>{note}</div>

    render() {
        const { names } = this.state;

        return (
            <Fragment>
                <div className="App">
                    {names.map(this.renderName)}
                </div>
                <div>   <form
                    className="box2"
                    onSubmit={this.addNewName}>                    
                    <input
                        type="text"
                        required=" "
                        placeholder="Digite o título"
                        ref={(title) => this.theTitle = title}
                    />                    
                    <input
                        value={names.name}
                        onSubmit={e => this.setState({ name: { ...names, name: e.target.value } })} />
                    <input
                        value={names.title}
                        onSubmit={e => this.setState({ name: { ...names, title: e.target.value } })} />
                    <button className="btn waves-effect waves-teal" type="submit">Add New Name</button>


                </form>
                    
                </div>
            </Fragment>
        );
    }
}
export default Alista;
