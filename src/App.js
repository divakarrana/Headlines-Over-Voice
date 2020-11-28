import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import Header from './components/Header/Header';
import useStyles from './styles';
import HowToUse from './components/HowToUse/HowToUse';

const alanKey = process.env.REACT_APP_ALAN_API;

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const [popup, setTogglePopup] = useState(false);

    const togglePopup = () => {
        setTogglePopup((prevState) => !prevState);
    } 

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles, number}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if(command === 'open'){
                    const parseNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                    const article = articles[parseNumber - 1];

                    if(parseNumber > 20){
                        alanBtn().playText('Please try that again.');
                    } else if(article){
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...')
                    }
                }
            }
        })
    }, []);

    return (
        <div>
            {popup ? <div className={classes.logoContainer}>
                        <HowToUse toggle={togglePopup}/>
                    </div> : <div>
                <div className={classes.logoContainer}>
                    <Header toggle={togglePopup}/>
                </div>
                <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            </div>}   
        </div>
    )
}

export default App;
