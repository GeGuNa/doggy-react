import React, { Component } from 'react'
import axios from 'axios'

export default class Similar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             imgList:[],
        }
    }
    
    componentDidMount(){
        this.funGetSimilar();
    }

    funGetSimilar=()=>{
        const breed = this.props.match.params.breed;
        axios.get('https://dog.ceo/api/breed/'+breed+'/images/random/12')
        .then((res)=>{
            this.setState({imgList:res.data.message});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                {this.state.imgList.map((img,i)=>(
                    <img src={img} key={i} alt={img} className="w-50"/>
                ))}
            </div>
        )
    }
}
