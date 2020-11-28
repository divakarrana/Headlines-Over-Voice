import React from 'react';

import './HowToUse.css';

const HowToUse = ({toggle}) => {
    return (
        <div className="how-to-container">
            <i className="fas fa-times close-icon" onClick={toggle}></i>
            <div className="how-to-content">
                <div className="smalltalk">
                    <div className="pop-title">
                        <h3>Play with alan</h3>
                    </div>
                    <div className="pop-content">
                        <p>Try any one of these:</p>
                        <ul>
                            <li>Who are you?</li>
                            <li>What is your age?</li>
                            <li>I want to talk.</li>
                            <li>When were you born?</li>
                            <li>Who is your boss?</li>
                            <li>You are funny.</li>
                            <li>Where are you from?</li>
                        </ul>
                    </div>
                </div>
                <div className="searchby">
                    <div className="pop-title">
                        <h3>Search news</h3>
                    </div>
                    <div className="pop-content">
                        <p>Try any one of these:</p>
                        <ul>
                            <li>Give me the news from bbc-news</li>
                            <li>Give me the news from CNN</li>
                            <li>What's up with Bitcoin?</li>
                            <li>What's up with Donald Trump?</li>
                            <li>Give me the latest Business News.</li>
                            <li>What is the recent news in Entertainment?</li>
                        </ul>
                    </div>
                </div>
                <div className="read-news">
                    <div className="pop-title">
                        <h3>Listen to news articles</h3>
                    </div>
                    <div className="pop-content">
                        <p>Try any one of these:</p>
                        <ul>
                            <li>Yes | Alan reads news for you.</li>
                            <li>No | You can go ahead and read news by yourslef.</li>
                        </ul>
                    </div>
                </div>
                <div className="open-article">
                    <div className="pop-title">
                        <h3>Open article</h3>
                    </div>
                    <div className="pop-content">                      
                        <p>Try any one of these:</p>
                        <ul>
                            <li>Open the article number 4.</li>
                            <li>Open article 6</li>
                            <li>Open number 3</li>
                        </ul>
                    </div>
                </div>
                <div className="go-back">
                    <div className="pop-title">
                        <h3>Go Back</h3>
                    </div>
                    <div className="pop-content">
                        <p>Try any one of these:</p>
                        <ul>
                            <li>Go back</li>
                            <li>Back</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToUse;
