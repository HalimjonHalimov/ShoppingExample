import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticleFailure, getArticleStart, getArticleSucces } from "../../reducers/articles";
import ArticleService from "../../service/articles";
import Moment from 'react-moment';
import { Spinner } from './../'

const Main = () => {
    const { articles, isLoading } = useSelector(state => state.article)
    console.log( isLoading );
    const dispatch = useDispatch()
    const getArticles = async() => {
        dispatch(getArticleStart())
        try {
            const response = await ArticleService.getArticles()
            dispatch(getArticleSucces(response.articles))
        } catch (error) {
            dispatch(getArticleFailure(error))
        }
    }
    useEffect(() => {
        getArticles()
    }, []);

    return (
        <div className="main-menu">
            {isLoading &&  <Spinner />}   
            <div className="container-fluid menu-cards"> 
                {articles.map(item => (
                    <div key={item.id} className="menu-card">
                        <div className="card-header">
                            {item.title}
                        </div>
                        <div className="card-img">
                            <img src={item.author.image} alt="Image" />
                        </div>
                        <div className="card-info">
                            <div className="card-info-description">
                            Description: {item.description}
                            </div>
                        </div>
                        {/* <div className="card-footer">
                            Last updata: <Moment fromNow>{item.updatedAt}</Moment> 
                        </div> */}
                        <div className="card-buttons">
                            <button className="card-btn edit">Edit</button>
                            <button className="card-btn view">View</button>
                            <button className="card-btn delete">Delete</button>
                        </div>
                        <div className="card-info-author">
                                Author:  {item.author.username}
                        </div>
                    </div>
        ))}
            </div>
        </div>
    )
}

export default Main;
