import React, { Component } from 'react'
import axios from 'axios'
import './ProductCategories.css'

export default class ProductCategories extends Component {
    constructor() {
        super()

        this.state = {
            cat: []
        }
    }

    componentDidMount() {
        axios.get("https://my-json-server.typicode.com/tdmichaelis/typicode/categories")
        .then((res) => {
            this.setState({cat: res.data})
            console.log(this.state.cat)
        })
    }
    
    render() {
            const categories = this.state.cat.map((item, idx) => 
                <li key={idx} className='categories'>{item}</li>
            )

            return (
            <ul className="catList">
                {categories}
            </ul>
        )
    }
}
