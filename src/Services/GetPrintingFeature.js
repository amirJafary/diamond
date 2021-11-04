import axios from "axios";

const getPrintingFeature = (callback , selectedId) => {
    let url="http://172.17.17.101:8088/api/en/Nas/Product/GetPrintingFeature?&Id="+selectedId+""
    axios
        .get(
        url
        )
        .then( response => callback(response.data.messageItems[0].data));
};

export {getPrintingFeature}