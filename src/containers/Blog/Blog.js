import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import UserList from '../../components/Post/Users/UserList/UserList';

class Blog extends Component {
    // logout =()=>{
    //     localStorage.clear();
    //     useHistory.push('/login');
    // }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/user-list',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>User List</NavLink></li>
                            <li>
                                    {localStorage.getItem('user-info')?
                                <NavLink>Logout</NavLink>
                                :null}
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/user-list" component={UserList} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;