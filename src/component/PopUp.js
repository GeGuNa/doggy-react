import React, { Component } from "react";

export default class PopUp extends Component {
  render() {
      const {breed , imgUrl} = this.props;
      const dogID = "#"+breed;
    return (
      <React.Fragment>
          <span className="float-right mr-3">
                        <a data-toggle="modal" data-target={dogID} className="tooltip-test" title="Enlarge Image" >
                            <i className="fa fa-plus downBtn"></i>
                        </a>
            </span>
        <div
          className="modal fade"
          id={breed}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {breed.toUpperCase()}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-0">
                  <img src={imgUrl} className="w-100" alt={breed} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <a href={imgUrl} className="btn btn-light tooltip-test" title="Download Image" download>
                            <i className="fa fa-download downBtn"></i> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
