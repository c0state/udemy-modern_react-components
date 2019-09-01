import React from 'react';

type propsType = {
    author: string,
    timeAgo: string,
    avatarUrl: string,
    comment: string,
};

const CommentDetail = (props: propsType) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatarUrl} />
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    );
};

export { CommentDetail };
