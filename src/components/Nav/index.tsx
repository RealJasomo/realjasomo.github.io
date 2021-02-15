import React, { Component } from 'react'
import { HashRouter, Link, withRouter } from 'react-router-dom'
import { RouteComponentProps} from 'react-router'
import { Icon, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
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
class Nav extends Component<RouteComponentProps, NavState> {
    constructor(props: RouteComponentProps){
        super(props);
        this.state = {
            open: false,
            activeLink: this.props.location.pathname.slice(1)
        }

    }
    componentDidUpdate(prevProps: RouteComponentProps) {
        if(prevProps.location != this.props.location)
            this.setState({activeLink: this.props.location.pathname.slice(1)});
    }
    render() {
        return (
            <HashRouter>
                <div className={styles.navContainer}>
                <div className={`${styles.navArea} ${this.state.open&&styles.expanded}`}>
                    <div style={{alignSelf:'flex-end'}}>
                        <IconButton onClick={()=>this.setState({open: !this.state.open})}>
                            {this.state.open?<NavigateBeforeIcon/>:<NavigateNextIcon/>}
                        </IconButton>
                    </div>
                    <Link className={`${styles.link} ${(this.state.activeLink==='')?styles.active:''}`} to="/">
                        {this.state.activeLink===''&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <HomeIcon className={styles.icon} />
                            {this.state.open&&<span>Home</span>}
                        </div>
                    </Link>     
                    <Link className={`${styles.link} ${(this.state.activeLink==='about')?styles.active:''}`} to="/about">
                        {this.state.activeLink==='about'&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <AssignmentIndIcon className={styles.icon} />
                            {this.state.open&&<span>About me</span>}
                        </div>
                    </Link>          
                    <Link className={`${styles.link} ${(this.state.activeLink==='projects')?styles.active:''}`} to="/projects">
                        {this.state.activeLink==='projects'&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <GitHubIcon className={styles.icon} />
                            {this.state.open&&<span>Projects</span>}
                        </div>
                    </Link>   
                    <Link className={`${styles.link} ${(this.state.activeLink==='resume')?styles.active:''}`} to="/resume">
                        {this.state.activeLink==='resume'&&<div className={styles.activeBar}></div>}
                        <div className={styles.flexLink}>
                            <DescriptionIcon className={styles.icon}/>
                            {this.state.open&&<span>Resume</span>}
                        </div>
                    </Link>   
                </div>
                </div>
            </HashRouter>
        )
    }
    handleNavClick = (route: string ) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        this.setState({activeLink: route})
    }
}
export default withRouter(Nav);