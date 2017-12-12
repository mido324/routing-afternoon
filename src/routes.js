import React from 'react'
import {Switch, Route} from  'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Student from './components/Student/Student'
import ClassList from './components/ClassList/ClassList'

export default (
<Switch>
    <Route exact path="/" component = {Home}/>
    <Route  path="/about" component = {About}/>
    <Route  path="/student/:id" component = {Student}/>
    <Route  path="/classlist/:class" component = {ClassList}/>
</Switch>

)