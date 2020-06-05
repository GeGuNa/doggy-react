import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid py-2 header fixed-bottom">
                <div className="h5 text-dark m-0 text-right footTxt">
                    <span className="float-left">
                        <i className="fa fa-paw txtPink"></i>
                    </span>
                    Doggstagram
                </div>
            </div>
        )
    }
}
