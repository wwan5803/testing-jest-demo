import React, { Component } from 'react'
import './App.css'
import { getUser } from './api/github'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class App extends Component {
    constructor (props) {
        super(props)
        this.state = { user: {} }
    }

    componentDidMount () {
        getUser('vnglst').then(data => {
            console.log('data', data.data)
            this.setState({ user: data.data })
        })
    }

    render () {
        const { user } = this.state
        return (
            <div className='App'>
                <ul style={{ listStyle: 'none' }}>
                    {
                        // Loop over the object keys and render each key
                        Object.keys(user).map(key => renderLine(user, key))
                    }
                </ul>
            </div>
        )
    }
}

export default App