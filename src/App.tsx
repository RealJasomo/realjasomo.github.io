import React, { Component } from 'react'
import { Nav } from './components'
import { HashRouter, Switch, Route} from 'react-router-dom'
import styles from './css/App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <HashRouter>
          <Nav/>
          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
          </Switch>
          <Switch>
            <Route path="/about">
              <div>About</div>
            </Route>
          </Switch>
          <Switch>
            <Route path="/projects">
              <div>Projects</div>
            </Route>
          </Switch>
          <Switch>
            <Route path="/resume">
              <div>Resume</div>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
