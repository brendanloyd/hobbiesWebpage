import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const AccordionContainer = ({ title, picture, text, defaultExpanded }) => {
    return (
        <Accordion defaultExpanded={defaultExpanded}>
            <AccordionSummary
                expandIcon={<div className="expand-icon">^</div>}
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <img style={{maxHeight: '400px'}} src={picture} alt={title} />
                    <br/>
                   {text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionContainer