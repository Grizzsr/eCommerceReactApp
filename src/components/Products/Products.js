import React from 'react';
import axios from 'axios';
import './Products.css';
import Item from '../Item/Item';


class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            cart: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
            .then((res) => {
                this.setState({ products: res.data })
            
            })
    }

    addItemToCart() {
      console.log('pushed');
    }



    render() {

        const listofproducts = this.state.products.map((item) =>
        <div id='prodList' className="ui divided items" key={item.id}>
  <div className="item">
    <div className="image">
      <img alt={item.title} src={item.img}></img>
    </div>
    <div className="content">
      <button className="header">{item.title}</button>
      <div className="meta">
        <span className="cinema">{item.price}</span>
      </div>
      <div className="description">
        <p>{item.description}</p>
      </div>
      <div className="extra">
      <div className="ui right floated primary button" onClick={this.addItemToCart}>
          Add To Cart
          <i className="right chevron icon"></i>
        </div>
      </div>
    </div>
  </div>
  </div>
        )
        return (
            <div>
                <ul>{listofproducts}</ul>
            </div>

        )
    }
}

export default Products;