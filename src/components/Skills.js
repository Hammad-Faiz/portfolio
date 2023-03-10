import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { SkillCard } from './SkillCard';
import TrackVisibility from 'react-on-screen'
import python from '../assets/skillsImg/python.svg'
import javascript from '../assets/skillsImg/javascript.svg'
import ruby from '../assets/skillsImg/ruby.svg'
import bootstrap from '../assets/skillsImg/bootstrap.svg'
// import aws from '../assets/skillsImg/aws.svg'
import java from '../assets/skillsImg/java.svg'
import postgresql from '../assets/skillsImg/postgresql.svg'
// import html5 from '../assets/skillsImg/html5.svg'
// import css3 from '../assets/skillsImg/css3.svg'
import react from '../assets/skillsImg/react.svg'
// import nodejs from '../assets/skillsImg/nodejs.svg'
import rails from '../assets/skillsImg/rails.svg'
// import mui from '../assets/skillsImg/mui.svg'
// import pulumi from '../assets/skillsImg/pulumi.svg'
import django from '../assets/skillsImg/django.svg'
import sqlite from '../assets/skillsImg/sqlite.svg'
import linux from '../assets/skillsImg/linux.svg'
import github from '../assets/skillsImg/github.svg'




export const Skills = () => {

    const languages = [
        {
            title: "Python",
            imgURL: python,

        },
        {
            title: "Java",
            imgURL: java,
        },
        {
            title: "Javascript",
            imgURL: javascript,
        },
        {
            title: "Ruby",
            imgURL: ruby,
        }, 
        // {
        //     title: "HTML",
        //     imgURL: html5,
        // }, 
        // {
        //     title: "CSS",
        //     imgURL: css3,
        // }, 
    ]

    const technologies = [
        {
            title: "Django",
            imgURL: django
        },
        {
            title: "Rails",
            imgURL: rails,
            
        },
        {
            title: "SQL",
            imgURL: postgresql,
        }, 
        {
            title: "SQLite",
            imgURL: sqlite,
        }, 
        // {
        //     title: "AWS",
        //     imgURL: aws,
        // }, 
        {
            title: "React",
            imgURL: react,
        },
        // {
        //     title: "Node",
        //     imgURL: nodejs,
        // }, 
        // {
        //     title: "MUI",
        //     imgURL: mui,
        // }, 
        {
            title: "Bootstrap",
            imgURL: bootstrap,
        },
        {
            title: "GITHUB",
            imgURL: github,
        },
        {
            title: "Linux",
            imgURL: linux,
        },
        // {
        //     title: "Pulumi",
        //     imgURL: pulumi,
        // }, 
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row >
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2> Skills </h2>
                        <Tab.Container id="tasks-tabs" defaultActiveKey="all">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="languages">Languages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="technologies">Technologies</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content  id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="all">
                                    <Row>
                                    <ul className="skills-collection-container" >
                                        
                                        {
                                            languages.map((language, index) => {
                                                return (
                                                <SkillCard
                                                    key={index}
                                                    {...language}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            technologies.map((technology, index) => {
                                                return (
                                                <SkillCard
                                                    key={index}
                                                    {...technology}
                                                    />
                                                )
                                            })
                                        }
                                       
                                    </ul>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="languages">
                                    <Row>
                                        <ul className="skills-collection-container" >
                                            {
                                                languages.map((language, index) => {
                                                    return (
                                                    <SkillCard
                                                        key={index}
                                                        {...language}
                                                        />
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="technologies">
                                    <Row> 
                                        <ul className="skills-collection-container" >
                                            {
                                                technologies.map((technology, index) => {
                                                    return (
                                                    <SkillCard
                                                        key={index}
                                                        {...technology}
                                                        />
                                                    )
                                                })
                                            }
                                        </ul>
                                    </Row>
                                    </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}