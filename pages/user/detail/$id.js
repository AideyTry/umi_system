import React from 'react'
import Link from 'umi/link'
export default class UserLayout extends React.Component{
    constructor(){
        super()
    }
    render(){
        let user = this.props.location.state
        return(
            <div>
                <p>
                    <strong>{user.id}</strong>
                    <span>{user.username}</span>
                </p>
            </div>
        )
    }
}