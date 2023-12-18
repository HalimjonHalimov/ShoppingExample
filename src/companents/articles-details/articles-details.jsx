import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../../service/articles";
import { useSelector, useDispatch } from 'react-redux'
import { getArticleDetailsFailure, getArticleDetailsStart, getArticleDetailsSucces } from "../../reducers/articles";



const ArticlesDetails = () => {
    const { slug } = useParams()
    const state = useSelector(state => state.article)
    const dispatch = useDispatch()

    const getArticlesDetails = async() => {
        dispatch(getArticleDetailsStart())
        try {
            const response = await ArticleService.getArticlesDetails(slug)
           dispatch(getArticleDetailsSucces(response.article))
        } catch (error) {
            console.log('error');
            dispatch(getArticleDetailsFailure(error.response.data.errors))
        }
    }

    useEffect(() => {
        getArticlesDetails()
    }, [slug]);
    
    
    return (
        <div>
            details {slug}
        </div>
    );
}

export default ArticlesDetails;
