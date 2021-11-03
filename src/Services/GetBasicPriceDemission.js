import axios from "axios";

const getDimensionFromGetBasicPrice = (callback,selectedId,turnaroundsKey,printedSidesKey) => {
    let url =
        "https://api.diamond-press.com/api/en/Order/SharedSheetOrder/GetBasicPrice?";
    let data = {
        productId: 7766,
        series: 1,
        turnaround: 1,
        twoSidePrintingType: 1,
    };
    axios
        .post(url, data, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjYxNDkiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYzNDM5NTY1MCwiZXhwIjoxNjM2OTg3NjUwLCJpYXQiOjE2MzQzOTU2NTB9.UB-f-snek_aBdMj8FS54rDnEIgMiOwZYyT0bjxy4_zk`,
            },
        })
        .then(res => { callback(res.data.messageItems[0].data) });
};

export {getDimensionFromGetBasicPrice}
