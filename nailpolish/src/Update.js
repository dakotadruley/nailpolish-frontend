import React, { Component } from 'react';
import request from 'superagent';
import Form from './Form.js';

export default class Update extends Component {
   
    state = {
        nailPolishId: 1,
        colors: [],
    };

    componentDidMount = async () => {
        const colors = await request.get('https://ancient-waters-69197.herokuapp.com/api/nailpolishes')

        this.setState({ colors: colors.body })
    }

    handleUpdateChange = async (e) => {
       await this.setState({ nailPolishId: Number(e.target.value) })

        const nailPolishToUpdate = this.state.colors.find(nailPolish => nailPolish.id === this.state.nailPolishId)

       await this.setState({ nailPolishToUpdate })
    }

    render() {
        return (
            <div>
            <div className='updateContainer'>
            <form onSubmit={this.handleSubmit}>
                <legend>Choose a Nail Polish to Update</legend>
                <label>
                    By Color: 
                    <select onChange={this.handleUpdateChange}>
                         { this.state.colors.map(color => 
                         <option value={color.id}>
                        {color.name}
                        </option>)}
                    </select>
                </label>
            </form>
        </div>
        <Form nailPolish={this.state.nailPolishToUpdate}/>
        </div>
    )}
}