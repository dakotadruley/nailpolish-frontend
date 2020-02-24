import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import NailPolish from './NailPolish.js';


export default class Home extends Component {
    state = {
        data: [],
    }

    async componentDidMount() {
        const nailpolishes = await request.get(`https://ancient-waters-69197.herokuapp.com/api/nailpolishes`)
            console.log(nailpolishes.body);
            this.setState({ data: nailpolishes.body })
        }

    render() {
      return (
          <>
           <ul className='nailPolishesContainer'>
               { this.state.data.map((nailPolish, i)  =>
               <Link to={`/nailpolish/${nailPolish.id}`} >
                    <NailPolish nailPolish={this.state.data[i]} />
                </Link>)}
          </ul> 
          </>
      );
    };
};