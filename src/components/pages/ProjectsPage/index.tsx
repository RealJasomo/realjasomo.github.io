import React, { Component } from 'react'
import { Icon, SvgIcon } from '@material-ui/core'
import styles from './projects.module.css'

import QueerSpace from '../../../res/QueerSpace.png'
import LegoTracker from '../../../res/LegoTracker.png'
import FirebaseIcon from '../../../res/Firebase.svg'
import ReactIcon from '../../../res/React.svg'
import TypescriptIcon from '../../../res/typescript.svg'
import SqlIcon from '../../../res/SqlIcon.png'


interface Project {
    title: string,
    github_link: string,
    image_url: string,
    description: string,
    tech_stack: string[]
}
interface ProjectState{
    projects: Project[]
}

export default class ProjectsPage extends Component<{},ProjectState> {
    
    constructor(props: {}){
        super(props);
        this.state = {
            projects: [{
                title: "QueerSpaces",
                github_link: "https://github.com/RealJasomo/QueerSpaces",
                image_url: QueerSpace,
                description: "A social media platform as a safe place for LGBTQIA+ students",
                tech_stack: ["React", "Firebase", "Typescript"]
            },{
                title: "Lego Inventory Tracker",
                github_link: "#",
                image_url: LegoTracker,
                description:"A web application to track your lego collection",
                tech_stack:["React", "TSQL"]
            },{
                title: "Java Joust",
                github_link: "https://github.com/RealJasomo/JavaJoust",
                image_url: "https://github.com/RealJasomo/JavaJoust/blob/master/JavaJoust/resource/splash.gif?raw=true",
                description:"An arcade game originally developed in 1982 by Williams Electronics. This is a clone created in Java",
                tech_stack:["Java"]
            }]
        }
    }

    render() {
        return (
            <div style={{height:'100vh',overflow:'auto'}}>
                <h1>Projects</h1>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {this.state.projects.map((project, idx) => {
                    return (
                        <Project key={idx} {...project} />
                    )
                })}
                </div>
            </div>
        )
    }
}

const Project = (props: Project) => {
    return (<div>
        <div className={styles.projectCard}>
            <h2>{props.title}{props.tech_stack.map((data, idx) => {
                switch(data){
                    case "React": return <img style={{height:'1em', width:"auto"}} key={idx} src={ReactIcon}/>
                    case "Firebase": return <img key={idx} style={{height:'1em', width:"auto"}} src={FirebaseIcon}/>
                    case "Typescript": return <img key={idx} style={{height:'1em', width:"auto"}} src={TypescriptIcon}/>
                    case "TSQL": return <img key={idx} style={{height: '1em', width: "auto"}} src={SqlIcon} />
                }
            })}</h2>
            <img src={props.image_url} />
            {props.github_link!=="#"&&<a href={props.github_link}>Github Repo</a>}
            <p>{props.description}</p>
        </div>
    </div>)
}