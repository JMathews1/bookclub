import React, { useState, useEffect } from 'react';

const SuggestionsPage = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://bookclub-api-1.azurewebsites.net/api/RetrieveSuggestions?code=xX-5WFdoWYvLqd2lrqoa0F5jdH3Hi8gv4_NHn9JnoraNAzFuOunBLw%3D%3D')
            .then(response => response.json())
            .then(data => {
                setSuggestions(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Book Suggestions</h1>
            {isLoading ? <p>Loading...</p> : (
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>
                            <strong>Title:</strong> {suggestion.title}<br/>
                            <strong>Author:</strong> {suggestion.author}<br/>
                            <strong>Suggested By:</strong> {suggestion.suggestedBy}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SuggestionsPage;
