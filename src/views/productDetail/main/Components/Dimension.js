import React, { Component } from "react";
import "../../../../Assets/Scss/generalProductDetail.scss";
import CustomDimension from "../../../../Components/CustomDimension";

class Dimension extends Component {
  render() {
    // console.info(this.props.getInformationOfProducts[0]?.isCustomizableDimension)
    return (
      <div className="mt-4 mb-4">
        <h6 className="bold-ProductDetail">Available Dimension(s):</h6>
        <div className="d-flex">
          <div>
            <label className="bg-eee-ProductDetail px-3 py-1 TAC-ProductDetail bold-ProductDetail">
              Dimension (mm)
            </label>
            <br />
            {this.props.getInformationOfProducts?.map(item => {
              return (
                <div className='d-block w-100'>
                  {item.name&&<span className="px-3 py-2 TAC-ProductDetail d-block border-dimension-ProductDetail">{item.name} ({item.width}*{item.height} mm)<br /></span>}
                </div>
              );
            })}
          </div>
          <div>
            <label className="bg-eee-ProductDetail px-3 py-1 TAC-ProductDetail bold-ProductDetail bdr-ProductDetail">
              Price
            </label>
            <br />
            {this.props.getInformationOfProducts?.map(item=>
            <span className="px-3 d-block py-2 border-dimension-ProductDetail TAC-ProductDetail bdr-ProductDetail">
              {item.basePrice}.00 AED
              <br />
            </span>
            )}
          </div>
        </div>
        {!!this.props.getInformationOfProducts[0]?.isCustomizableDimension &&
          <CustomDimension
            minHeight={this.props.minHeight}
            minWidth={this.props.minWidth}
            selectedId={this.props.selectedId}
            turnaroundsKey={this.props.turnaroundsKey}
            printedSidesKey={this.props.printedSidesKey}
            getInformationOfProducts={this.props.getInformationOfProducts}
          />
        }
        <br />
        <button className="BTN3-ProductDetail"> start ordering </button>
      </div>
    );
  }
}

export default Dimension;
