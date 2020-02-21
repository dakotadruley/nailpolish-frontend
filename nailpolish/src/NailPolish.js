import React from 'react';

export default class NailPolish extends React.Component {
    render() {
        const { nailPolish } = this.props;
        const {
            name,
            price,
            url,
            is_quickdry,
            brand,
        } = nailPolish;

        return (
            <>
             <li className='nailPolishItem'>
                <h2>Color: { name }</h2>
                <table>
                    <tr>
                        <td>Price: { price }</td>
                        <td>Quickdry: { is_quickdry }</td>
                        <td>Brand: { brand }</td>
                    </tr>
                </table>
                <div className='imageContainer'>
                    <img className='imageSize' src={ url } alt={ nailPolish.name }/>
                </div>
            </li>
            
            </>
        )
    }
}