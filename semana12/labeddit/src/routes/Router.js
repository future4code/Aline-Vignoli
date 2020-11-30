import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/LoginPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';
import FeedPage from '../screens/FeedPage/FeedPage';
import PostPage from '../screens/PostPage/PostPage';
import ErrorPage from '../screens/ErrorPage/ErrorPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/", "/login"]}>
                    <LoginPage/>
                </Route>

                <Route exact path={"/signup"}>
                    <SignUpPage/>
                </Route>

                <Route exact path={"/feed"}>
                    <FeedPage/>
                </Route>

                <Route exact path={"/post/:postId"}>
                    <PostPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;