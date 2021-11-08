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

    const token = localStorage.getItem('token');
    console.info(token)

    axios
        .post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => { callback(res.data.messageItems[0]?.data) });
};

export {GetDimensionFromGetBasicPrice}
