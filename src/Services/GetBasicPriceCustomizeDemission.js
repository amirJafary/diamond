import axios from "axios";

const GetBasicPriceCustomizeDemission = (callback,selectedId,turnaroundsKey,printedSidesKey,width,height) => {
    let url =
        "http://172.17.17.101:8088/api/en/Order/SharedSheetOrder/GetBasicPrice?";
    let data = {
        productId: selectedId,
        series: 1,
        turnaround: turnaroundsKey,
        twoSidePrintingType: printedSidesKey,
        width:width,
        height:height,
    };

    const token = localStorage.getItem('token');
    console.info(token)

    axios
        .post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => { callback(res.data.messageItems[0].data) });
};

export {GetBasicPriceCustomizeDemission}

