import axios from 'axios'

const GetProductsList = (callback,IdOfPrintedSides,IdOfTurnAround,categoriesSelectedID,currentPage,sortById,value,inputSearch)=>{

    let product=categoriesSelectedID?.map((product ,index) =>'&filter.categoryIds['+index+']='+product+'');
    let url = 'http://172.17.17.101:8088/api/en/Nas/Product/GetProductList?&pageLength=12&currentPageIndex='+currentPage+'&Filter.productSortType='+sortById+'&filter.MinimumPrice='+value[0]+'&filter.MaximumPrice='+value[1]+'&filter.search='+inputSearch+''+product?.join('')+''

    if(!!IdOfPrintedSides){
        url=url+'&filter.twoSidePrintingType='+IdOfPrintedSides
    }

    if(!!IdOfTurnAround){
        url=url+'&filter.turnaround='+IdOfTurnAround
    }

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

