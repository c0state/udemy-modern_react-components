import React from 'react';
import * as ReactDOM from 'react-dom';
import { CommentDetail } from './CommentDetail'
import { ApprovalCard } from './ApprovalCard'
import Faker from "faker";

function App() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                </div>
                Are you sure?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alice" timeAgo="Today at 3pm" avatarUrl={Faker.image.avatar()} comment={Faker.lorem.lines(3)} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bob" timeAgo="Today at 10am" avatarUrl={Faker.image.avatar()} comment={Faker.lorem.lines(5)} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Cathy" timeAgo="Yesterday at 9:18pm" avatarUrl={Faker.image.avatar()} comment={Faker.lorem.lines(4)} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
