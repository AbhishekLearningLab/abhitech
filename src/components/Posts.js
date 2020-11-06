import React, { Component } from 'react'
import PostItems from '../store/data.json'

class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    //https://jsonplaceholder.typicode.com/posts/
    /*componentWillMount(){
        fetch('http://localhost:3000/')
        .then((response) => response.json())
        .then((json) => this.setState({posts: json}))
    }*/
    render() {
        const postItems=PostItems.map(post=>(
            <tr>
                <td scope="row" className="rowIndex">{post.id}</td>
                <td className="rowData">{post.firstname}</td>
                <td className="rowData">{post.surname}</td>
                <td className="rowData">{post.email}</td>
                <td className="rowData">{post.customer_query}</td>
            </tr>
            
        ));
        return (
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Query</th>
                </tr>
                {postItems}
            </thead>
            <tbody>                
            </tbody>
            </table>
        )
    }
}

export default Posts;
