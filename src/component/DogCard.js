import React, { Component } from 'react';
import axios from 'axios';
import PopUp from './PopUp';

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
                <div className="text-secondary text-center doggyName mt-2">
                    {breed.toUpperCase()}
                </div>
                <div className="mb-2 px-2 btn-group w-100">
                    <PopUp breed={this.props.breed} imgUrl={this.state.dogImg} />
                    <a href={this.state.dogImg} className="tooltip-test btn btn-sm" title="Download Image" download>
                        <i className="fa fa-arrow-circle-down downBtn"></i>
                    </a>
                    
                </div>
                
            </div>
        )
    }
}
