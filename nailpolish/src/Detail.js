import { getNailPolish } from './server/api.js';
import React, { Component } from 'react';
import NailPolish from './NailPolish.js';

export default class Detail extends Component {
    state = {
        nailPolish: {}
    }


async componentDidMount() {
    const nailPolishData = await getNailPolish(this.props.match.params.id);

    this.setState({ nailPolish: nailPolishData.body[0] })
}

render() {
   
    const { nailPolish } = this.state;
    console.log(nailPolish);
    return (
        <>
           <ul className='nailPolishesContainer'>
                    <NailPolish nailPolish={nailPolish} />
          </ul> 
          </>
    )
}

}
