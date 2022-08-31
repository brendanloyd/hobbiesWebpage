import React from 'react'
import Paper from '@mui/material/Paper'

const About = () => {
    return (
        <Paper elevation={3}>
            <div className='paper padding'>
                <p className='text-card'>
                    My name is Brendan and I am currently a senior studying Computer Science at The University of Missouri St. Louis. 
                    I fell into Computer Science almost by accident. I was working as a carpenter in St. Louis when I started to think about
                    going back to school. A mentor of mine suggested I take a college night course just to see if I enjoyed it, long story
                    short I never looked back. Shortly after I was introduced to Computer Science and everything seemed to click. Since going 
                    back to school I have gotten married, purchased a house, and became a father to both a dog named Jäger and a cat named Tiger. 
                    My life has changed dramatically since I was working as a carpenter and I'm excited to see what happens next!
                </p>
            </div>
        </Paper>
    )
}

export default About