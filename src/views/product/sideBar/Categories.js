import React, { Component } from "react";
import Checkbox from "../../../Components/Checkbox";
import { GetCategoriesListInSideBar } from "../../../Services/GetCategoriesListInSideBar";
import '../../../Assets/Scss/general.scss'

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categoriesList: [],
        showMore: false,
        isChecked: false,
        categoriesSelected: [],
        categoriesSelectedID: [],
    };
  }

  componentDidMount = () => {
    GetCategoriesListInSideBar(this.getCategoriesListInSideBarCallBack);
  };

  getCategoriesListInSideBarCallBack = response => {
    this.setState({ categoriesList: response });
  };

  clickHandlerShowMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
  };

  getStateIsChecked = (isChecked, id, name) => {
    console.log(isChecked, id, name);
    if (!isChecked) {
      let deleteCurrentName = this.props.categoriesSelected.filter(
        item => item !== name
      );
      let deleteCurrentID = this.props.categoriesSelectedID.filter(
        item => item !== id
      );
      this.setState(
        {
          categoriesSelected: deleteCurrentName,
          categoriesSelectedID: deleteCurrentID,
        },
        () =>
          this.props.getStateCategories(
            this.state.categoriesSelected,
            this.state.categoriesSelectedID,
            this.state.categoriesList
          )
      );
    } else {
      this.setState(
        {
          categoriesSelected: [...this.props.categoriesSelected, name],
          categoriesSelectedID: [...this.props.categoriesSelectedID, id],
        },
        () =>
          this.props.getStateCategories(
            this.state.categoriesSelected,
            this.state.categoriesSelectedID,
            this.state.categoriesList
          )
      );
    }
  };

  render() {
    let items = this.state.showMore ? this.state.categoriesList.length : 5;
    return (
      <div className="card">
        <div className="card-header">Categories</div>
        <div className="card-body">
          {this.state.categoriesList.slice(0, items).map(product => (
            <div className="d-flex CategoryItems" key={product.id}>
              <Checkbox
                isChecked={this.props.categoriesSelected.some(
                  item => item === product.name
                )}
                getStateIsChecked={isChecked =>
                  this.getStateIsChecked(isChecked, product.id, product.name)
                }
              />
              <span className="m-0">{product.name}</span>
            </div>
          ))}
          {this.state.showMore ? (
            <button
              className="btn-showMore"
              onClick={this.clickHandlerShowMore}
            >
              less -
            </button>
          ) : (
            <button
              className="btn-showMore"
              onClick={this.clickHandlerShowMore}
            >
              more +
            </button>
          )}
        </div>
      </div>
    );
  }
}
