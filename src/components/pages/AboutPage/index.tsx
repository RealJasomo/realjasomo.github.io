import React, { Component } from 'react'

import desertme from '../../../res/desertme.jpg'
import styles from './about.module.css'

export default class AboutPage extends Component {
    render() {
        return (
            <div style={{ marginLeft:'1rem', height:'100vh', overflow:'auto'}}>
                <h1 style={{flexBasis:'100%'}}>About me</h1>
                <img className={styles.picture} src={desertme} alt="Crazy developer in a desert"/>
                <p className={styles.text}>I am Jason Cramer, a 20yr old developer studying at Rose-Hulman Institute of technology in Computer Science and Software Engineering. 
                   I am currently sophomore standing and looking for internships focusing in web application development, cybersecurity, artifical intelligence, or machine learning. 
                   My favorite programming language would have to be Javascript, although the type safety of Typescript has been catching my eye lately. 
                   If you would like to get to know me further, feel free to reach out by email via <a style={{textDecoration: "none", color: "#444"}} href="mailto:cramerj1@rose-hulman.edu">cramerj1@rose-hulman.edu</a></p>
                <div className={styles.bottomFlurish}></div>
            </div>
        )
    }
}
