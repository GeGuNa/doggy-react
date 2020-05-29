import React, { Component } from "react";
// import axios from "axios";

export default class PopUp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       imgList:[],
    }
  }

  // getImgList = () => {
  //   axios.get('https://dog.ceo/api/breed/'+this.props.breed+'/images')
  //   .then((res)=>{
  //     this.setState({imgList:res.data.message.slice(0,4)})
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  
  // componentDidMount(){
  //   this.getImgList();
  // }

  render() {
      const {breed , imgUrl} = this.props;
      const dogID = "#"+breed;
    return (
      <React.Fragment>
          
                        <button data-toggle="modal" data-target={dogID} className="tooltip-test btn btn-sm" title="Enlarge Image" >
                            <i className="fa fa-plus-circle plusBtn"></i>
                        </button>
          
        <div
          className="modal fade"
          id={breed}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {breed.toUpperCase()}
                </h5>
              </div>
              <div className="modal-body p-0">
                {/* <div className="row">
                  <div className="col-md-6 p-0"> */}
                    <img src={imgUrl} className="w-100" alt={breed} />
                  {/* </div>
                  <div className="col-md-6 p-0">
                  
                    {
                        this.state.imgList.map((img,i)=>(
                            <img key={i} className="w-50" src={img} alt={img} />
                        ))
                    }
          
                  </div>
                </div> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light plusBtn"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <a href={imgUrl} className="btn btn-light tooltip-test downBtn" title="Download Image" download>
                            <i className="fa fa-download"></i> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
