// import React, { Component } from "react";
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

// componentDidMount(){
//   getProductInfo(this.getProductInfoCallback);
//   getPrintingFeature(this.getPrintingFeatureCallback);
// }

// getProductInfoCallback=(response)=>{
//   console.info('*******',response)
// }


//   // get turnaround , printed sides from printing feature

//   getPrintingFeatureCallback=(response)=>{
//    console.info('*******getPrintingFeatureCallback*******',response)
//    this.setState(
//         {
        //   printedSides: response.printedSides,
        //   turnarounds: response.turnarounds[0].value,
        //   printedSidesKey: response.printedSides[0].key,
        //   turnaroundsKey: response.turnarounds[0].key,
        // },
        // () => this.getDimensionFromGetBasicPrice()
//    )
// }
//           

//   // get base price from API by axios

//  
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
//   };

//   componentDidMount() {
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
