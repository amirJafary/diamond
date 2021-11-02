// import React, { Component } from "react";
// import axios from "axios";
// import "../../../Assets/Scss/generalProductDetail.scss";
// import TextFiled from "./TextFiled";
// import Dimension from "./Dimension";


// export default class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedId: Math.floor(props.selectId),
//       defaultValue: 1000,
//       series: 1,
//       name: [],
//       printCirculations: [],
//       printedSides: [],
//       turnarounds: "",
//       printedSidesKey: null,
//       turnaroundsKey: null,
//       getInformationOfProducts: [],
//       description: "",
//       minHeight: null,
//       minWidth: null,
//       isLoading: false,
//     };
//     // console.info('878787887878',this.state)
//   }

//   // get description , name & ... (product info)

  

//   // get turnaround , printed sides from printing feature

//   getPrintingFeature = () => {
//     axios
//       .get(
//         "http://172.17.17.101:8088/api/en/Nas/Product/GetPrintingFeature?&Id=" +
//           this.state.selectedId +
//           ""
//       )
//       .then(
//         response =>
//           this.setState(
//             {
//               printedSides: response.data.messageItems[0].data.printedSides,
//               turnarounds:
//                 response.data.messageItems[0].data.turnarounds[0].value,
//               printedSidesKey:
//                 response.data.messageItems[0].data.printedSides[0].key,
//               turnaroundsKey:
//                 response.data.messageItems[0].data.turnarounds[0].key,
//             },
//             () => this.getDimensionFromGetBasicPrice()
//           )
//         // ,()=>console.info('**** response get Printing Feature => ',this.state.printedSidesKey)
//       );
//   };

//   // get base price from API by axios

//   getDimensionFromGetBasicPrice = () => {
//     this.setState({ isLoading: true });
//     let url =
//       "https://api.diamond-press.com/api/en/Order/SharedSheetOrder/GetBasicPrice?";
//     let data = {
//       productId: this.state.selectedId,
//       series: this.state.series,
//       turnaround: this.state.turnaroundsKey,
//       twoSidePrintingType: this.state.printedSidesKey,
//     };
//     axios
//       .post(url, data, {
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjYxNDkiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYzNDM5NTY1MCwiZXhwIjoxNjM2OTg3NjUwLCJpYXQiOjE2MzQzOTU2NTB9.UB-f-snek_aBdMj8FS54rDnEIgMiOwZYyT0bjxy4_zk`,
//         },
//       })
//       .then(res => {
//         this.setState({ isLoading: false });
//         // console.info('**** response get Dimension From Get Basic Price => ',res.data.messageItems[0].data)
//         let width = res.data.messageItems[0].data[0]?.width;
//         let height = res.data.messageItems[0].data[0]?.height;

//         if (!res.data.hasError) {
//           this.setState(
//             {
//               getInformationOfProducts: res.data?.messageItems[0]?.data,
//               minWidth: width,
//               minHeight: height,
//             },
//             () =>
//               console.info(
//                 "**************this is log from res (get basic price) => **** ",
//                 res.data.messageItems[0].data
//               )
//           );
//         } else {
//           alert("this product not found please select other products");
//         }
//       });
//   };

//   componentDidMount() {
//     // this.getDimensionFromGetBasicPrice();
//     this.getPrintingFeature();
//     this.getProductInfo();
//   }

//   // componentDidUpdate(prevState){
//   //     if(prevState.getBasicPrice !== this.state.getBasicPrice)
//   //     this.getDimensionFromGetBasicPrice();
//   // }

//   statesOfComponent = (defaultValue, series) => {
//     this.setState(
//       {
//         series: series,
//         defaultValue: defaultValue,
//       },
//       () => this.getDimensionFromGetBasicPrice()
//     );
//   };

//   getStateWidth = width => {
//     this.setState(
//       {
//         width: width,
//       },
//       () => this.getDimensionFromGetBasicPrice()
//     );
//   };

//   getStateHeight = height => {
//     this.setState(
//       {
//         height: height,
//       },
//       () => this.getDimensionFromGetBasicPrice()
//     );
//   };

//   idOfCirculation = id => {
//     this.setState(
//       {
//         selectedId: id,
//       },
//       () => this.getDimensionFromGetBasicPrice()
//     );
//   };

//   getKeyOfPrintedSides = printedSidesKey => {
//     this.setState(
//       {
//         printedSidesKey: printedSidesKey,
//       },
//       () => this.getDimensionFromGetBasicPrice()
//     );
//   };

//   render() {
//     const text =
//       "In order to print the most economical option, based on the circulation and series, please enter your required quantity.";
//     return (
//       <div className="main-ProductDetail ms-2 ">
//         <h3 className="mb-4">{this.state.name}</h3>
//         <p>{this.state.description}</p>
//         <p>{text}</p>
//         <TextFiled
//           getKeyOfPrintedSides={printedSidesKey =>
//             this.getKeyOfPrintedSides(printedSidesKey)
//           }
//           idOfCirculation={id => this.idOfCirculation(id)}
//           firstId={this.state.selectedId}
//           printCirculations={this.state.printCirculations}
//           statesOfComponent={(defaultValue, series) =>
//             this.statesOfComponent(defaultValue, series)
//           }
//           turnarounds={this.state.turnarounds}
//           printedSides={this.state.printedSides}
//         />

//         {!this.state.isLoading && (
//           <Dimension
//             minHeight={this.state.minHeight}
//             minWidth={this.state.minWidth}
//             getInformationOfProducts={this.state.getInformationOfProducts}
//             selectedId={this.state.selectedId}
//             turnaroundsKey={this.state.turnaroundsKey}
//             printedSidesKey={this.state.printedSidesKey}
//           />
//         )}
//         {!!this.state.isLoading && (
//           <div>
//             isLoading
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//           </div>
//         )}
//       </div>
//     );
//   }
// }


import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
