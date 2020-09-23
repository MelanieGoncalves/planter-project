import React, { Component } from 'react'
import Axios from 'axios';

export class GetData extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        Axios.get('/api/v1/distributions/9/plants?token=' + process.env.REACT_APP_API_KEY)
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default GetData
