import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { IconButton } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import me from '../../../res/me.png'
import styles from './home.module.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className={styles.flex}>
                <img className={styles.image} src={me} alt="Jason cramer"/>
                <h1>Hi, I'm <strong>Jason Cramer</strong></h1>
               <h2>I am a <ReactTypingEffect 
                    text={["Student","Full-Stack developer", "Software Engineer"]}
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={2000}
                    typingDelay={1000}
                /></h2>
                <div className={styles.link}>
                    <IconButton href="https://linkedin.com/in/jason-cramer-617881190">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://github.com/RealJasomo">
                        <GitHubIcon/>
                    </IconButton>
                </div>
            </div>
        )
    }
}
