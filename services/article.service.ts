import axios from "axios";

class articleService {
    getPagedArticles = async (pageNum: number) => {
        var headers = {
            'X-Tenant': 'androidworld.newsifier.com',
        }
       var url = "https://microservice.newsifier.com/api/v2/article/scopes/lat/get";
        return axios.get(`${url}/${pageNum}`, {headers: headers});

    }
    getArticleById = async (articleId: number) => {
        var token = "m8tiFyxZrZD1NGWNAjSu7dpPV8hlJOMLOqS2sWCGXXFllxFsHmGwrD3oT2Son1kXaEM6iRL22nLsgBPp"
        var headers = {
            'Authorization': `Bearer ${token}`,
            'X-Tenant': 'androidworld.newsifier.com',

        }
        var url = "https://androidworld.newsifier.com/api/v1/article-as-visitor";
         return axios.get(`${url}/${articleId}?include=clapsCount,commentsCount`, {headers: headers});
 
     }
}

const articleServic = new  articleService();
export default articleServic;
