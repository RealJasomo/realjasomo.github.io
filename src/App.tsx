import React, { Component } from 'react'
import { Nav, HomePage, AboutPage, ProjectsPage, ResumePage } from './components'
import { HashRouter, Switch, Route} from 'react-router-dom'
import styles from './css/App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <HashRouter>
          <Nav/>
          <div className={styles.fullWidth}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/resume">
              <ResumePage />
            </Route>
          </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}
