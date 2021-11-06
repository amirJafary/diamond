import axios from "axios";

const GetDimensionFromGetBasicPrice = (callback,selectedId,printedSidesKey,series) => {
    let url =
        "http://172.17.17.101:8088/api/en/Order/SharedSheetOrder/GetBasicPrice?";
    let data = {
        width:null,
        height:null,
        productId: selectedId,
        series: series,
        turnaround: 1,
        twoSidePrintingType: printedSidesKey,
    };
    axios
        .post(url, data, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjYxNDkiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYzNDM5NTY1MCwiZXhwIjoxNjM2OTg3NjUwLCJpYXQiOjE2MzQzOTU2NTB9.UB-f-snek_aBdMj8FS54rDnEIgMiOwZYyT0bjxy4_zk`,
            },
        })
        .then(res => { callback(res.data.messageItems[0]?.data) });
};

export {GetDimensionFromGetBasicPrice}
