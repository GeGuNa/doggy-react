import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="w-100 p-3 mt-3 mb-0 banner">
                <div className="bannertxt text-center m-0">
                    Find your favourite
                    <img src={require('../assets/icon.png')} className="bannerlogo ml-2" alt="icon" />
                </div>
            </div>
        )
    }
}
