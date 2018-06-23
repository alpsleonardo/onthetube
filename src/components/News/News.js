import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=39f91187f6a4456bad27cdc77ad11be9';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ));
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;

