import axios from "./api";

const ArticleService = {
    async getArticles() {
        const { data } = await axios.get('/articles')
        return data
    }, 
    async getArticlesDetails(slug) {
        const { data } = await axios.get(`/articles/${slug}`)
        return data
    }
}
export default ArticleService