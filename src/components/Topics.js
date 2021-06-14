import React, { Component } from 'react'
import {
    Link,
    Route,
} from 'react-router-dom'

function Topic (props) {      // match is a prop that react router is going to pass to a component 
    return <h3>{props.match.params.topicId}</h3>
}

export default function Topics ({match}) {
    console.log('match.url', match.url)
    return (
    <div> 
        <h2> Topics </h2>
        <ul>
            <li>
                <Link to = {`${match.url}/rendering}`}> Rendering with React</Link>
            </li>

            <li>
                <Link to = {`${match.url}/components}`} >components</Link>
            </li>

            <li>
                <Link to = {`${match.url}/props-v-state}`} >Props vs state</Link>
            </li>
        </ul>
        <hr/> 

        <Route path = {`${match.path}/:topicId`} component = {Topic} />
        <Route path = {match.path} render = {()=> {
            return <h3> Please select a topic </h3>
        }} />
     </div>
     )
}