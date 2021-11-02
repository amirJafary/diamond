import axios from "axios";

const GetCategoriesListInSideBar = callback => {
  axios
    .get("http://172.17.17.101:8088/api/en/Nas/ProductCategory/List?")
    .then(response => callback(response.data.messageItems[0].data));
};

export { GetCategoriesListInSideBar };
