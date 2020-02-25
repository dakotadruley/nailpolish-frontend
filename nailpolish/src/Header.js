import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <ul className='navUL'>
            <Link to='/nailpolishes/'><li className='navLI'>Create a Nail Polish</li>
                </Link>
            <Link to='/update/nailpolish'><li className='navLI'>Update a Nail Polish</li></Link>
            </ul>
        )
    }
}