import React, { Component } from "react";
import photo from "../../../Assets/Images/no-image-available-icon.jpg";
import "../../../Assets/Scss/general.scss";
import { GetProductsList } from "../../../Services/GetProductsList";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      productsList: [],
      IdOfPrintedSides: this.props.IdOfPrintedSides,
      IdOfTurnAround: this.props.IdOfTurnAround,
      categoriesSelectedID: this.props.categoriesSelectedID,
      currentPage: this.props.currentPage,
      sortById: this.props.sortById,
      value: this.props.value,
      inputSearch: this.props.inputSearch,
    };
  }

  componentDidMount = () => {
    GetProductsList(
      this.GetProductsListCallBack,
      this.props.IdOfPrintedSides,
      this.props.IdOfTurnAround,
      this.props.categoriesSelectedID,
      this.props.currentPage,
      this.props.sortById,
      this.props.value,
      this.props.inputSearch
    );
  };

  GetProductsListCallBack = response => {
    console.info(response);
    // if(prevState.productsList !== this.state.productsList)
    this.setState({
      productsList: response,
    });
  };

  componentDidUpdate = () => {
    if (
      this.state.IdOfPrintedSides !== this.props.IdOfPrintedSides ||
      this.state.IdOfTurnAround !== this.props.IdOfTurnAround ||
      this.state.categoriesSelectedID.length !==
        this.props.categoriesSelectedID.length ||
      this.state.currentPage !== this.props.currentPage ||
      this.state.sortById !== this.props.sortById ||
      this.state.value !== this.props.value ||
      this.state.inputSearch !== this.props.inputSearch
    ) {
      this.setState({
        IdOfPrintedSides: this.props.IdOfPrintedSides,
        IdOfTurnAround: this.props.IdOfTurnAround,
        categoriesSelectedID: this.props.categoriesSelectedID,
        currentPage: this.props.currentPage,
        sortById: this.props.sortById,
        value: this.props.value,
        inputSearch: this.props.inputSearch,
      });
      GetProductsList(
        this.GetProductsListCallBack,
        this.props.IdOfPrintedSides,
        this.props.IdOfTurnAround,
        this.props.categoriesSelectedID,
        this.props.currentPage,
        this.props.sortById,
        this.props.value,
        this.props.inputSearch
      );
    }
  };

  render() {
    return (
      <div className="d-flex products cardParent">
        {this.state.productsList?.map(product => (
          <div
            key={product.id}
            onClick={() => {
              this.setState({ selectedId: product.selectedId }, () =>
                this.props.getSelectIdOfProduct(this.state.selectedId)
              );
            }}
            className="card OV-HI col-4 mx-10 cardParent2"
          >
            <div className="POS-REL">
              <a href={"/product/" + product.selectedId}>
                <img src={photo} className="ImgProducts cardImg" alt="card" />
              </a>
              <p className="POS-ABS">{product.name}</p>
            </div>
            <div className="card-body">
              <p className="card-text FSize12 cardTITLE">
                Available Circulations:{" "}
              </p>
              <div className="txtCEN d-flex">
                {product.printCirculations[0] && (
                  <p className="p10  FSize">
                    {product.printCirculations[0].value} pcs{" "}
                  </p>
                )}
                {product.printCirculations[1] && (
                  <p className="p10 BDR FSize">
                    {product.printCirculations[1].value} pcs
                  </p>
                )}
                {product.printCirculations[2] && (
                  <p className="p10 BDR FSize">
                    {product.printCirculations[2].value} pcs
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
