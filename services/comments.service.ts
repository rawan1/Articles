import axios from "axios";

class commentsService {
    getpagedComments = async (pageNumber: number, articleId: any) => {
        var headers = {
            'X-Tenant': 'androidworld.newsifier.com',
        }
        var url = "https://microservice.newsifier.com/api/v1/article";
         return axios.get(`${url}/${articleId}/comments/${pageNumber}`, {headers: headers});
     }
}

const commentsServic = new  commentsService();
export default commentsServic;
