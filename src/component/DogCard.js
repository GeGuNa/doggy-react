import React, { Component } from 'react';
import axios from 'axios';

export default class DogCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             dogImg:require('../assets/loading.gif')
        }
    }

    getImg=()=>{
        axios.get("https://dog.ceo/api/breed/"+this.props.breed+"/images/random")
        .then((res)=>{
            this.setState({dogImg:res.data.message});
        })
    }
    
    componentDidMount(){
        this.getImg();
    }

    render() {
        const {breed} = this.props;
        return (
            <div className="dogcard">
                <img src={this.state.dogImg} alt={breed} className="w-100" />
                <div className="text-secondary doggyName my-2 px-3">
                    {breed.toUpperCase()}
                    <span className="float-right">
                        <a href={this.state.dogImg} download>
                            <i className="fa fa-download downBtn"></i>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
}
