import axios from "axios";

const getProductInfo = (callback,selectedId) => {
    let url="http://172.17.17.101:8088/api/en/Nas/Product/GetProductInfo?&id="+selectedId +"&title=is+not+valid+now"
    // let url="http://172.17.17.101:8088/api/en/Nas/Product/GetProductInfo?&id="+selectedId+"&title=is+not+valid+now"
    axios
      .get(
        url
      )
      .then(
        response => callback(response.data.messageItems[0].data)
      );
};

export {getProductInfo}