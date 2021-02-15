import React, { Component } from 'react'
import styles from './resume.module.css'

export default class ResumePage extends Component {
    render() {
        return (
            <div style={{height:'100vh',overflow:'auto'}}>
               <section id={styles.header}>
                <h1>Jason R. Cramer</h1>
                <p>5500 Wabash Avenue, CM2302, Terre Haute, Indiana 47803</p>
                <p>(224) 308-4688</p>
                <a href="mailto:cramerj1@rose-hulman.edu">cramerj1@rose-hulman.edu</a><a href="https://linkedin.com/in/jason-cramer-617881190">LinkedIn</a> <a href="https://github.com/RealJasomo">GitHub</a>
               </section>
               <hr/>
               <section id="objective">
                <div className={styles.section}>
                    <h2>Objective:</h2>
                    <p>Obtain an internship to advance my skills related to software engineering</p>
                </div>
               </section>
               <section id="education">
                <div className={styles.section} >
                 <h2>Education:</h2>   
                 <p><strong>Bachelor of Science, Computer Science and Software Engineering&nbsp;&nbsp;&nbsp;&nbsp;May 2023</strong>
                 <br/>Rose-Hulman Institute of Technology
                 <br/>Status: <em>Sophomore</em>
                 <br/> Relevant Coursework: Programming Language Concepts, Data Structures and Algorithms, Object-oriented Programming</p>             
                </div>
               </section>
               <section id="skills">
                <div className={styles.section}>
                 <h2>Skills:</h2>
                 <div className={styles.skills}>
                    <p>Languages:&nbsp;&nbsp;&nbsp;&nbsp;Proficent: JavaScript, Typescript, Java, C#, HTML, CSS, SQL, Python</p>
                    <p style={{marginLeft:'6em'}}>Intermediate: Scheme, C++</p>
                    <p>Frameworks: React, Vue, ASP.NET MVC, Entity Framework (LINQ), Node, Express</p>
                    <p>Tools: Git, Google Cloud Platform, Linux, SSH, FTP</p>
                 </div>
                </div>
               </section>
               <section id="projects">
               <div className={styles.section}>
                 <h2>Projects:</h2>
                 <div>
                 <div className={styles.project}>
                    <p><strong>Queer Spaces(React Typescript)</strong>-<em><a href="https://github.com/RealJasomo/QueerSpaces">https://github.com/RealJasomo/QueerSpaces</a></em></p>
                    <ul>
                        <li>Created a social network platform as a safe space for LGBTQIA+ students</li>
                        <li>Full stack web application built with React, Typescript, and Firebase</li>
                    </ul>
                 </div>
                 <div className={styles.project}>
                    <p><strong>Joust Clone (Java)</strong>-<em><a href="https://github.com/RealJasomo/JavaJousts">https://github.com/RealJasomo/JavaJousts</a></em></p>
                    <ul>
                        <li>Developed a clone of the game Joust</li>
                        <li>Managed a large-scale project by leading a small development team</li>
                    </ul>
                 </div>
                 <div className={styles.project}>
                    <p><strong>MC-MeetingGrabber (Java)</strong>-<em><a href="https://github.com/RHLUG-Org/MC-MeetingGrabber">https://github.com/RHLUG-Org/MC-MeetingGrabber</a></em></p>
                    <ul>
                        <li>Developed a Minecraft server extension to grab club meeting time data from a
server and relay the information back to the user in game.</li>
                    </ul>
                 </div>
                 </div>
                </div>
                </section>
                <section id="experience">
                <div className={styles.section}>
                 <h2>Experience:</h2>
                 <div>
                     <div className={styles.work}>
                         <p><strong>Rose-Hulman Ventures, Terre Haute IN</strong></p>
                         <p><em>Software Engineering Intern</em></p>
                         <ul>
                             <li>Developed new frontend features using Vue, Razor Pages, and ASP.NET MVC</li>
                             <li>Created new API Controllers and Entity Sets using LINQ and Entity Framework</li>
                         </ul>
                     </div>
                     <div className={styles.work}>
                         <p><strong>Rose-Hulman Institute of Technology, Terre Haute IN</strong></p>
                         <p><em>Institutional Research and Planning Assessment Work Study</em></p>
                         <ul>
                             <li>Developed new web applications with database support using HTML, CSS,
JavaScript, PHP, and MariaDB. Used Node.JS and Vue.JS frameworks</li>
                             <li>Modified and enhanced existing web application</li>
                         </ul>
                         <p><em>LUG Website Maintainer</em></p>
                         <ul>
                             <li>Created the Minecraft subsection of the site</li>
                             <li>Developed a system to get the latest meeting using JQuery</li>
                         </ul>
                     </div>
                 </div>
                </div>
                </section>
                <section id="activities">
                <div className={styles.section}>
                 <h2>Activities:</h2>
                 <div>
                     <p>Linux Users Group, Rose-Hulman&nbsp;&nbsp;&nbsp;&nbsp;<em>Software System Admin</em></p>
                     <p>Computer Security Club, Rose-Hulman</p>
                     <p>Unity, Rose-Hulman</p>
                 </div>
                </div>
                </section>
                <section id="honors">
                <div className={styles.section}>
                 <h2>Honors:</h2>
                 <div>
                  <p>Rose-Hulman Dean's List</p>
                  <p>Finalist in Google Tech Challenge 2019</p>
                 </div>
                </div>
                </section>
            </div>
        )
    }
}
