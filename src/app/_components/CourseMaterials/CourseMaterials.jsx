import React from 'react'
import Typography from '@mui/material/Typography'
import { Avatar, Box, Card,  Container, Grid, LinearProgress, Tooltip, Zoom, Button, Chip, TextField } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import Modal from '@mui/material/Modal';

import Divider from '@mui/material/Divider';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import toast, { Toaster } from 'react-hot-toast';
import Comments from '../Comments/Comments';


const steps = ['Question 1 ', 'Question 2', 'Question 3'];


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleCourse = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
//   border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};
const dividerStyle = {
  py: 0,
  p:2,
  width: '100%',
//   maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function CourseMaterials() {
      const [activeStep, setActiveStep] = React.useState(0);
      const [skipped, setSkipped] = React.useState(new Set());
      const [progress, setProgress] = React.useState(63);
    
    
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        };
    
        if (activeStep === steps.length - 1) {
          setProgress((prev) => Math.min(prev + 1, 100)); 
        };
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
    
      const handleReset = () => {
        setActiveStep(0);
      };
    
      
        const [openTasks, setOpenTasks] = React.useState(false);
      const handleOpenTasks = () => setOpenTasks(true);
      const handleCloseTasks = () => setOpenTasks(false);
    
      //   const [openQuestion, setOpenQuestion] = React.useState(false);
      // const handleOpenQuestion = () => setOpenQuestion(true);
      // const handleCloseQuestion = () => setOpenQuestion(false);
    
      //   const [openLeader, setOpenLeader] = React.useState(false);
      // const handleOpenLeader = () => setOpenLeader(true);
      // const handleCloseLeader = () => setOpenLeader(false);
    

  return (
    <>
   
        <Box sx={{mt:8, mb:3}}>
            <Typography sx={{mb:3, display:{xs:'none', md:'flex'}}} component={'h2'} variant="h4" color="initial">Course Materials</Typography>

                    <Card elevation={5} sx={{p:3, borderRadius:'25px'}}>
            <Grid container spacing={2}>
                <Grid size={{xs:12, md:6}}>

                     <List sx={styleCourse}>
                                <Typography sx={{mb:3, display:{xs:'flex', md:'none'}}} component={'h2'} variant="h6" color="initial">Course Materials</Typography>
                     <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <AccessTimeOutlinedIcon sx={{mr:1}}></AccessTimeOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Duration </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">3 Weeks</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <LocalLibraryOutlinedIcon sx={{mr:1}}></LocalLibraryOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Lessons </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">8</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <Groups2OutlinedIcon sx={{mr:1}}></Groups2OutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Enrolled </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">65 Students</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <LanguageOutlinedIcon sx={{mr:1}}></LanguageOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Language </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">English</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                    </List>
                </Grid>

                <Grid size={{xs:12, md:6}}>

                     <List sx={styleCourse}>
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <PersonOutlineOutlinedIcon sx={{mr:1}}></PersonOutlineOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Instructor </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">Shady Youssef</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <CodeOutlinedIcon sx={{mr:1}}></CodeOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Category </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">Front-End</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                   <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <GradeOutlinedIcon sx={{mr:1}}></GradeOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Level </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">Beginner</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                   <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                
                                <PaidOutlinedIcon sx={{mr:1}}></PaidOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Price </Typography>
                            </Box>
                            <Box>
                            <Typography variant="body1" color="initial">$ 59,99</Typography>
                            </Box>
                    </ListItem>
                    <Divider component="li" />
                    </List>
                </Grid>
            </Grid>
                    </Card>
        </Box>

         <Box sx={{display:{xs:'visible', md:'none'}}}>
            <Box sx={{p:2}}>
                    <Typography  variant="h4" color="initial">Topics for This Course</Typography>
                </Box>
                  {/* Progress Bar */}
                <Box sx={{py:3, px:2}}>
                    <Box sx={{ position: "relative", mb: 3 }}>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    counter={63}
                    sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#ddd",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#4CAF50",
                    },
                    }}
                  />
                     {/* Avatar*/}
                  <Avatar
                    src="/avatar.png"
                    alt="My Progress"
                    sx={{
                      width: 36,
                      height: 36,
                      position: "absolute",
                      left:`${progress}%`,
                      top: "-15px",
                      transform: "translateX(-50%)",
                      fontSize:'1rem',
                    //   boxShadow: 2,
                    }}
                  >You
                    </Avatar>
                   <Typography
                    variant="body2"
                    sx={{
                      textAlign: "right",
                      color: "gray",
                      mt: 1,
                      mr: 0.5,
                    }}
                  >
                  {  `${progress} %`}
                  </Typography>
                </Box>
                </Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h6' component="h2">Course Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={dividerStyle}>
                  

                    <ListItem>
                        <Typography variant="body1" color="#888">Advanced story telling techniques for writers: Personas, Characters & Plots</Typography>
                    </ListItem>

                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Introduction</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Course Overview</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box onClick={handleOpenTasks} sx={{display:'flex', alignItems:'center', ":hover":{cursor:'pointer'}}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem', mr:1}} variant="body1" color="initial">Course Overview</Typography>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                                  <Box   sx={{ mr:1}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem', mb:{xs:1, md:0,}}} variant="outlined"  color='success' label="3 QUESTIONS"  /> </Box>
                                <Box component={'div'} sx={{fontSize:'1.2rem'}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem'}} variant='outlined' label="10 MINUTES" color="error" /> </Box>
                                </Box>
                            </Box>
                            
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Course Exercise / Reference Files</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Code Editor Installation (Optional If You Have One) </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Embedding HTML in HTML</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    </List>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h6' component="h2">JavaScript Language Basics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={dividerStyle}>
                  

                    <ListItem>
                        <Typography variant="body1" color="#888">Advanced story telling techniques for writers: Personas, Characters & Plots</Typography>
                    </ListItem>

                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Introduction</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Course Overview</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box onClick={handleOpenTasks} sx={{display:'flex', alignItems:'center', ":hover":{cursor:'pointer'}}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem', mr:1}} variant="body1" color="initial">Course Overview</Typography>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                                  <Box   sx={{ mr:1}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem', mb:{xs:1, md:0,}}} variant="outlined"  color='success' label="3 QUESTIONS"  /> </Box>
                                <Box component={'div'} sx={{fontSize:'1.2rem'}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem'}} variant='outlined' label="10 MINUTES" color="error" /> </Box>
                                </Box>
                            </Box>
                            
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Course Exercise / Reference Files</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Code Editor Installation (Optional If You Have One) </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Embedding HTML in HTML</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    </List>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant='h6' component="h2">Components & Databinding</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={dividerStyle}>
                  

                    <ListItem>
                        <Typography variant="body1" color="#888">Advanced story telling techniques for writers: Personas, Characters & Plots</Typography>
                    </ListItem>

                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Introduction</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Course Overview</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box onClick={handleOpenTasks} sx={{display:'flex', alignItems:'center', ":hover":{cursor:'pointer'}}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem', mr:1}} variant="body1" color="initial">Course Overview</Typography>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                                  <Box   sx={{ mr:1}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem', mb:{xs:1, md:0,}}} variant="outlined"  color='success' label="2 QUESTIONS"  /> </Box>
                                <Box component={'div'} sx={{fontSize:'1.2rem'}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem'}} variant='outlined' label="15 MINUTES" color="error" /> </Box>
                                </Box>
                            </Box>
                            
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Course Exercise / Reference Files</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Code Editor Installation (Optional If You Have One) </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Embedding HTML in HTML</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    </List>
        </AccordionDetails>
      </Accordion>
       <Modal
        open={openTasks}
        onClose={handleCloseTasks}
        aria-labelledby="modal-questions-title"
        aria-describedby="modal-answers-description"
      >
        <Box sx={style}>
          <Box  sx={{position:'static'}}>
          <Typography sx={{mb:2}} id="modal-questions-title" variant="h5" component="h2">
            Course Overview - Quiz
          </Typography>

                        <Box  sx={{position:'absolute' , top:10, right:0}}>
                          <Button onClick={handleCloseTasks}> <SpeedDialIcon></SpeedDialIcon></Button>
                        </Box>
          </Box>

        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Stay positive and keep learning 💪🏻👌
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleCloseTasks}>Close</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
        <Box sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 ? (
            <>
              <Typography sx={{my:2}} variant="body1" color="initial"> Every mistake is a step forward 💪🏻</Typography>
              <Typography sx={{mb:1}} variant="h6" color="initial"> What's the largest country in the world?</Typography>
              <Box>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Russia</Button>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Austrilia</Button>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">USA</Button>
              </Box>
            </>
          ) : activeStep === 1 ? (
            <>
            <Typography sx={{my:2}} variant="body1" color="initial"> Small progress is still progress 😉</Typography>
            <Typography sx={{mb:1}} variant="h6" color="initial"> What's the fastest land animal?</Typography>
              <Box>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Tiger</Button>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Cheetah</Button>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Lion</Button>
              </Box></>
          ) : activeStep === 2 ? (
            <>
            <Typography sx={{my:2}} variant="body1" color="initial"> You're smarter than you think! 🧠</Typography>
            <Typography sx={{mb:1}} variant="h6" color="initial"> What's the name of Apple's voice assistant?</Typography>
              <Box>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Gemini</Button>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Cortana</Button>
                <Button onClick={handleNext} sx={{width:'100%', mb:2}} variant="contained" color="initial">Siri</Button>
              </Box></>
          ):null}
        </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
            color='info' variant='contained'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Previous Question
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button color='success' variant='contained' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next Question'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>

        </Box>
      </Modal>
    </Box>
    
    </>
)
}
