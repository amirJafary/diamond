import axios from 'axios'

const GetProductsList = (callback)=>{

    let url = 'http://172.17.17.101:8088/api/en/Nas/Product/GetProductList?&pageLength=12&currentPageIndex=1&Filter.productSortType=3'

    axios.get(url)
        .then(response => {
            if(!response.data.hasError){
                callback(response.data.messageItems[0].data.dataItems)
            }else{
                console.info(response.data.hasError)
            }
        });
}
    
export {GetProductsList}
