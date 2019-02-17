import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getData();
    }
    render() {
        if (this.props.err != null) {
            return (
                <div>
                    <h3>error, request failed. {this.props.err.message}</h3>
                </div>
            )
        }
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 10),
        err: state.err
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Post);