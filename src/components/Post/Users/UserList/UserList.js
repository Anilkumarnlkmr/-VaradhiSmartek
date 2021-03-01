import React, { Component } from 'react';
import axios from 'axios';

import User from '../User/User';
//import './Blog.css';

class UserList extends Component {
    state = {
        users: [],
        selectedUserId: null
    }

    componentDidMount () {
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => {
                const users = response.data.slice(0, 10);
               
                this.setState({users: users});
                 console.log( response );
            } );
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        const users = this.state.users.map(user => {
            return <User 
                key={user.id} 
                title={user.name} />;
        });

        return (
            <div>
                <section className="Posts">
                    {users}
                </section>
            </div>
        );
    }
}

export default UserList;