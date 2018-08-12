import React, { Component } from 'react';
import './list.css';
import jsons from './positions.json';
class JSon extends Component {
    constructor(props){
        super(props)
            this.state ={
                requestFailed : false
        }
    }
    componentDidMount()
    {
    }

    render(props) {
        console.log(this.props.Jame)
        return (
            <ul className = "ulList">
                {
                    jsons.filter((repos)=> repos.description.indexOf(this.props.Jame) > -1).map( (ele, i) => { return <li key={ ele + i}>{ ele.title }</li>
                })
                }
            </ul>
        );
    }
  }

  export default JSon;