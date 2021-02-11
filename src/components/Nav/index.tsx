import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom'
import { Icon, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import DescriptionIcon from '@material-ui/icons/Description'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import styles from './nav.module.css'

interface NavState {
    open: boolean,
    activeLink: string
}
export default class Nav extends Component<{}, NavState> {
    constructor(props: {}){
        super(props);
        this.state = {
            open: false,
            activeLink: ''
        }

    }
    render() {
        return (
            <HashRouter>
                <div className={styles.navArea}>
                    <div className={styles.expander}>
                        <IconButton onClick={()=>this.setState({open: !this.state.open})}>
                            {this.state.open?<NavigateBeforeIcon/>:<NavigateNextIcon/>}
                        </IconButton>
                    </div>
                    <Link className={`${styles.link} ${(this.state.activeLink==='about')?styles.active:''}`} to="/about" onClick={this.handleNavClick('about')}>
                        {this.state.activeLink==='about'&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <AssignmentIndIcon className={styles.icon} />
                            {this.state.open&&<span>About me</span>}
                        </div>
                    </Link>          
                    <Link className={`${styles.link} ${(this.state.activeLink==='projects')?styles.active:''}`} to="/projects" onClick={this.handleNavClick('projects')}>
                        {this.state.activeLink==='projects'&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <GitHubIcon className={styles.icon} />
                            {this.state.open&&<span>Projects</span>}
                        </div>
                    </Link>   
                    <Link className={`${styles.link} ${(this.state.activeLink==='resume')?styles.active:''}`} to="/resume"  onClick={this.handleNavClick('resume')}>
                        {this.state.activeLink==='resume'&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <DescriptionIcon className={styles.icon}/>
                            {this.state.open&&<span>Resume</span>}
                        </div>
                    </Link>   
                </div>
            </HashRouter>
        )
    }
    handleNavClick = (route: string ) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        this.setState({activeLink: route})
    }
}
