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
                <h2>{ name }</h2>
                   <div className='priceBrand'> <h3>{ brand }</h3> - <p>Price: ${ price }</p> 
                    
                    {/* figure out out to display only if true */}
                    <p>Quickdry: { String(is_quickdry) }</p>
                    </div>

                <div className='imageContainer'>
                    <img className='imageSize' src={ url } alt={ nailPolish.name }/>
                </div>
            </li>
            
            </>
        )
    }
}