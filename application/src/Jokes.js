import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
    state = {
        jokes: [],
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const endpoint = 'http://localhost:3300/api/jokes';
        const options = {
            headers: {
                Authorization: token
            }
        }

        axios.get(endpoint, options)
        .then( res => {
            this.setState({ jokes: res.data });
        })
        .catch (err => {
            console.log('error from /api/jokes', err);
        });
    };

    render() {
        if (localStorage.getItem ('jwt')){
        return (
            <div>
               
                <h2> Let's Have Some Laughs! </h2>
                <h3>So, Have you heard this one? </h3>
                
                    {this.state.jokes.map(jokes => 
                        
                        ( <p key = {jokes.id}> {jokes.joke}</p>)
                         
                    )}
            </div>

        )}else{
            return (<div>
                <h4>You must Be logged in to see how funny these jokes really are!!!</h4>
            </div>)
            
        }
    }
}

export default Jokes;