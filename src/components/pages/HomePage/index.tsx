import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import me from '../../../res/me.png'
import styles from './home.module.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className={styles.flex}>
                <img className={styles.image} src={me} alt="Jason cramer"/>
                <h1>Hi, I'm <strong>Jason Cramer</strong></h1>
               <h2>I am a <ReactTypingEffect 
                    text={["Full-Stack developer", "Software Engineer"]}
                    speed={100}
                /></h2>
            </div>
        )
    }
}
