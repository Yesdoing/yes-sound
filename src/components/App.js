import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, NotFoundPage } from 'pages';
 
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage} />
                <Route path="/page/:tag/:page?" component={ListPage} />
                <Route path="/search/:keyword/:page?" component={ListPage} />
                <Route path="/songs/:id" component={PostPage} />
                <Route path="/users/:id" component={PostPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
};

export default App;