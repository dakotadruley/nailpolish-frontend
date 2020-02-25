import React, { Component } from 'react';
import request from 'superagent';

export default class Form extends Component {
   
    state = {
        brands: [],
        isQuickdry: false,
        brandId: 1,
    };

    componentDidMount = async () => {
        const brands = await request.get('https://ancient-waters-69197.herokuapp.com/api/brands');

        this.setState({ brands: brands.body })
    }


    componentWillReceiveProps = async () => {
        if (this.props.nailPolish) {

            const nailPolish = await request.get(`https://ancient-waters-69197.herokuapp.com/api/nailpolish/${this.props.nailPolish.id}`);    


            this.setState({ 
                name: nailPolish.name,
                url: nailPolish.url,
                price: nailPolish.price,
                isQuickdry: nailPolish.isQuickdry,
                brandId: nailPolish.brandId
            })};
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleURLChange = (e) => {
        this.setState({ url: e.target.value })
    }

    handlePriceChange = (e) => {
        this.setState({ price: e.target.value })
    }

    handleQuickdryChange = (e) => {
        const actualBool = e.target.value === 'false'
        ? false
        : true

        this.setState({ isQuickdry: actualBool })
    }

    handleBrandChange = (e) => {
        this.setState({ brandId: Number(e.target.value) })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newNailPolish = {
            name: this.state.name,
            url: this.state.url,
            price: this.state.price,
            isQuickdry: this.state.isQuickdry,
            brandId: this.state.brandId
        }
        console.log(newNailPolish);
        const dataBase = await request.post('https://ancient-waters-69197.herokuapp.com/api/nailpolishes', newNailPolish);

        console.log(dataBase);

        this.props.history.push('/');

    }

    render() {

        return (
            <div className='formContainer'>
                <form onSubmit={this.handleSubmit}>
                    <legend>Make a new Nail Polish</legend>
                    <label>
                        Color Name: <input value={ this.state.name } onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Image: <input value={ this.state.url } onChange={this.handleURLChange}/>
                    </label>
                    <label>
                        Price: <input value={ this.state.price } onChange={this.handlePriceChange}/>
                    </label>
                    <label>
                        Quickdry: <select value={ this.state.isQuickdry } onChange={this.handleQuickdryChange}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </label>
                    <label>
                        Brand: 
                        <select onChange={this.handleBrandChange}>
                             { this.state.brands.map(brand => 
                             <option value={brand.id}>
                            {brand.name}
                            </option>)}
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}