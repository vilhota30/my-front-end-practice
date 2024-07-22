import React from 'react';
import { Container, Typography, Avatar, List, ListItem, ListItemText, Box, Grid } from '@mui/material';
import myPhoto from '../../assets/myPhoto.jpg';
import './Resume.scss';

const softSkills = [
  "Teamwork",
  "Communication Skills",
  "Adaptability",
  "Problem Solving",
  "Creativity",
];

const programs = [
  "Visual Studio Code",
  "GitHub",
  "Postman",
  "Figma",
  "JIRA",
  "Slack",
];

export const Resume = () => {
  return (
    <Box sx={{ backgroundColor: 'lightblue', minHeight: '100vh', py: 4 }}>
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Resume
      </Typography>
      <Box display="flex" justifyContent="center" mb={4}>
        <Avatar alt="Моє фото" src={myPhoto} sx={{ width: 200, height: 200 }} />
      </Box>
      
      <Box className="section" mb={4}>
        <Typography variant="h2" component="h2" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1" component="p">
        I am always responsive to client needs, open to dialogue to better understand and fulfill product requirements. I have a knack for streamlining the workflow effectively, focusing on delivering results that are visibly impactful. My passion lies in developing user-friendly and engaging interfaces that cater to the client's needs while providing a positive user experience for customers.
        </Typography>
      </Box>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box className="section" mb={4} >
            <Typography variant="h2" component="h2" gutterBottom>
              Skills
            </Typography>
            <List>
                <li>HTML5/CSS3</li>
                <li>SCSS/</li>
                <li>JavaScript(ES6+)</li>
                <li>Ajax</li>
                <li>Axios</li>
            </List>
            <List>
              <li>React</li>
              <li>Styled-Components</li>
              <li>MUI</li>
              <li>Redux</li>
              <li>Redux-Toolkit</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>Webpack/Vite</li>
            </List>
          </Box>
        </Grid>
      </Grid>
        
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box className="section" mb={4}>
            <Typography variant="h2" component="h2" gutterBottom>
              Soft Skills
            </Typography>
            <List>
              {softSkills.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box className="section" mb={4}>
            <Typography variant="h2" component="h2" gutterBottom>
              Tools
            </Typography>
            <List>
              {programs.map((program, index) => (
                <ListItem key={index}>
                  <ListItemText primary={program} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box className="section" mb={4}>
            <Typography variant="h2" component="h2" gutterBottom>
              Hobby
            </Typography>
            <List>
              <li>Reading</li>
              <li>Traveling</li>
              <li>Painting</li>
            </List>
          </Box>
        </Grid>
        
      </Grid>
    </Container>
    </Box>
  );
};

