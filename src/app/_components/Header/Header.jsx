'use client'
import { Avatar, Box, Card,  Container, Grid, LinearProgress, Typography, Tooltip, Zoom, Button, Chip, TextField } from '@mui/material'
import React from 'react'
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import toast, { Toaster } from 'react-hot-toast';
import CourseMaterials from '../CourseMaterials/CourseMaterials';
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



export default function Header() {
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

    const [openQuestion, setOpenQuestion] = React.useState(false);
  const handleOpenQuestion = () => setOpenQuestion(true);
  const handleCloseQuestion = () => setOpenQuestion(false);

    const [openComment, setOpenComment] = React.useState(false);
  const handleOpenComment = () => setOpenComment(true);
  const handleCloseComment = () => setOpenComment(false);

    const [openLeader, setOpenLeader] = React.useState(false);
  const handleOpenLeader = () => setOpenLeader(true);
  const handleCloseLeader = () => setOpenLeader(false);
  return (
    <>
    <Box component={'header'}>
        <Box component={'main'}>

        <Container  maxWidth >
            <Grid container spacing={5} sx={{px:4}}>
                <Grid size={{sm:12, md:8}}>
                    
                    <Box
  sx={{
    position: { xs: 'sticky', md: 'static' },
    top: { xs: 0, md: 'auto' },
    zIndex: 1000,
    mb: 2,
    bgcolor: '#000',
    borderRadius:2,
    transition: 'all 0.3s ease-in-out',
  }}
>
  <Box
    component="video"
    src="/header-video.mp4"
    controls
    poster="/video-cover.png"
    preload="metadata"
    sx={{
      width:  '100%',
      borderRadius: 2,
      ":hover":{cursor:'pointer'}
    }}
  />


</Box>

                    
                  <Box  component={'button'}  onClick={handleOpenComment}  sx={{mr:3}} >
              
                <Tooltip arrow slotProps={{ tooltip:{  sx: {
                    fontSize: '1rem',      
                    color: '#fff',         
                    px: 2, py: 1,          
                    borderRadius: 1,       
                    boxShadow: 3,
                    
                },}}}
                title="Add a comment" slots={{transition:Zoom}}>
                <Card
                sx={{
                    transition: 'all 0.3s ease, box-shadow 0.3s ease',
                    boxShadow:6,
                    p:1,
                    ':hover': {
                    transform: 'scale(1.2)',
                    cursor:'pointer',
                    boxShadow: 10,
                    bgcolor:'#000000de',
                    color:'#fff'
                    }
                }}
                >
                    <AddCommentOutlinedIcon sx={{fontSize:'2rem'}}></AddCommentOutlinedIcon>
                    
            </Card>
                </Tooltip>
            
            </Box>
             <Modal
  open={openComment}
  onClose={handleCloseComment}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  
>
  <Box sx={style}>
    <Box sx={{position:'static'}}>
    <Typography sx={{textAlign:'center', mb:4}} id="modal-modal-title" variant="h6" component="h2">
      Add A Comment
    </Typography>
    <Box  sx={{position:'absolute' , top:10, right:0}}>
      
                          <Button onClick={()=> handleCloseComment() }> <SpeedDialIcon></SpeedDialIcon></Button>
                        </Box>
    </Box>
    <TextField
    sx={{mb:2}}
      variant="outlined"
      placeholder='Submit your comment'
      rows={3}
      multiline
      fullWidth
    />
    <Button color='success' variant='contained' onClick={()=>{
      toast.success('Your Comment Has Been Submitted');
      handleCloseComment()
      } }>
              Submit
            </Button>
  </Box>
</Modal>

        <Box  component={'button'} onClick={handleOpenQuestion} sx={{mr:3}} >
         
                <Tooltip arrow slotProps={{ tooltip:{  sx: {
                    fontSize: '1rem',      
                    color: '#fff',         
                    px: 2, py: 1,          
                    borderRadius: 1,       
                    boxShadow: 3,
                    
                },}}}
                title="Ask a question" slots={{transition:Zoom}}>
                <Card
                sx={{
                    transition: 'all 0.3s ease, box-shadow 0.3s ease',
                    boxShadow:6,
                    p:1,
                    ':hover': {
                    transform: 'scale(1.2)',
                    cursor:'pointer',
                    boxShadow: 10,
                    bgcolor:'#000000de',
                    color:'#fff'
                    }
                }}
                >
                    <QuestionMarkOutlinedIcon sx={{fontSize:'2rem'}}></QuestionMarkOutlinedIcon>
                    
            </Card>
                </Tooltip>
            
            </Box>
             <Modal
  open={openQuestion}
  onClose={handleCloseQuestion}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Box sx={{position:'static'}}>
    <Typography sx={{textAlign:'center', mb:4}} id="modal-modal-title" variant="h6" component="h2">
      Ask A Question 
    </Typography>
    <Box  sx={{position:'absolute' , top:10, right:0}}>
      
                          <Button onClick={()=> handleCloseQuestion() }> <SpeedDialIcon></SpeedDialIcon></Button>
                        </Box>
    </Box>
    <TextField
    sx={{mb:2}}
      variant="outlined"
      placeholder='Submit your question'
      rows={3}
      multiline
      fullWidth
    />
    <Button color='success' variant='contained' onClick={()=>{
      toast.success('Your Question Has Been Submitted');
      handleCloseQuestion()
      } }>
              Submit
            </Button>
  </Box>
</Modal>
        <Box  component={'button'} onClick={handleOpenLeader} sx={{mr:3}} >
                <Tooltip arrow slotProps={{ tooltip:{  sx: {
                    fontSize: '1rem',      
                    color: '#fff',         
                    px: 2, py: 1,          
                    borderRadius: 1,       
                    boxShadow: 3,
                    
                },}}}
                title="Show Learderboard" slots={{transition:Zoom}}>
                <Card
                sx={{
                    transition: 'all 0.3s ease, box-shadow 0.3s ease',
                    boxShadow:6,
                    p:1,
                    ':hover': {
                    transform: 'scale(1.2)',
                    cursor:'pointer',
                    boxShadow: 10,
                    bgcolor:'#000000de',
                    color:'#fff'
                    }
                }}
                >
                    <LeaderboardOutlinedIcon sx={{fontSize:'2rem'}}></LeaderboardOutlinedIcon>
                    
            </Card>
                </Tooltip>
            
            </Box>
            <Modal
  open={openLeader}
  onClose={handleCloseLeader}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Box sx={{position:'static'}}>
    <Typography sx={{textAlign:'center', mb:1}} id="modal-modal-title" variant="h6" component="h2">
      Return Values from Functions
    </Typography>
    <Typography sx={{textAlign:'center', mb:2, fontWeight:'bold'}} id="modal-modal-title" variant="h6" component="h2">
      LeaderBoard
    </Typography>
    <Box sx={{textAlign:'center', mb:4,bgcolor:'#f5f9fa'}} id="modal-modal-title" >
      <Typography variant="h6" component="h2">Practice Makes Perfect. 🧠💪🏻</Typography>
      <Typography variant="h6" component="h2"> You are in top 60% ⬆️</Typography>
      <Typography variant="h6" component="h2"> Almost There To The Leaderboard ✌️</Typography>
    </Box>
    
    <Box  sx={{position:'absolute' , top:10, right:0}}>
      
                          <Button onClick={()=> handleCloseLeader() }> <SpeedDialIcon></SpeedDialIcon></Button>
                        </Box>
    </Box>

    <Card  sx={{width:'100%', mb:2, p:2}} elevation={5}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center', width:'35px', height:'35px',bgcolor:'gold', borderRadius:'50%',mr:1}}>
            <Typography  variant="body1" color="initial">1</Typography>
            </Box>
          <Typography variant="body1" color="initial">Shady Youssef</Typography>
          </Box>
          <Typography sx={{ml:1}} component={'span'} variant="body2" color="#444">Top 1%</Typography>
        </Box>
        <Box>
          <Typography  variant="body1" color="initial">Score</Typography>
        <Typography component={'span'} variant="body2" color="success">100%</Typography>
        </Box>
      </Box>
    </Card>
    <Card  sx={{width:'100%', mb:2, p:2}} elevation={5}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center', width:'35px', height:'35px',bgcolor:'silver', borderRadius:'50%',mr:1}}>
            <Typography  variant="body1" color="initial">2</Typography>
            </Box>
          <Typography variant="body1" color="initial">John Doe</Typography>
          </Box>
          <Typography sx={{ml:1}} component={'span'} variant="body2" color="#444">Top 2%</Typography>
        </Box>
        <Box>
          <Typography  variant="body1" color="initial">Score</Typography>
        <Typography component={'span'} variant="body2" color="success">95%</Typography>
        </Box>
      </Box>
    </Card>
    <Card  sx={{width:'100%', mb:2, p:2}} elevation={5}>
     <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center', width:'35px', height:'35px',bgcolor:'#CD7F32', borderRadius:'50%',mr:1}}>
            <Typography  variant="body1" color="initial">3</Typography>
            </Box>
          <Typography variant="body1" color="initial">Harry David</Typography>
          </Box>
          <Typography sx={{ml:1}} component={'span'} variant="body2" color="#444">Top 3%</Typography>
        </Box>
        <Box>
          <Typography  variant="body1" color="initial">Score</Typography>
        <Typography component={'span'} variant="body2" color="success">93%</Typography>
        </Box>
      </Box>
    </Card>
    <Card  sx={{width:'100%', mb:2, p:2}} elevation={5}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center', width:'35px', height:'35px',bgcolor:'gray', borderRadius:'50%',mr:1}}>
            <Typography  variant="body1" color="initial">4</Typography>
            </Box>
          <Typography variant="body1" color="initial">Jonathon Peter</Typography>
          </Box>
          <Typography sx={{ml:1}} component={'span'} variant="body2" color="#444">Top 4%</Typography>
        </Box>
        <Box>
          <Typography  variant="body1" color="initial">Score</Typography>
        <Typography component={'span'} variant="body2" color="success">90%</Typography>
        </Box>
      </Box>
    </Card>
    <Card  sx={{display:{xs:'none',md:'flex'},width:'100%', mb:2, p:2}} elevation={5}>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Box>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'center', width:'35px', height:'35px',bgcolor:'gray', borderRadius:'50%',mr:1}}>
            <Typography  variant="body1" color="initial">5</Typography>
            </Box>
          <Typography variant="body1" color="initial">Sarah Viktor</Typography>
          </Box>
          <Typography sx={{ml:1}} component={'span'} variant="body2" color="#444">Top 5%</Typography>
        </Box>
        <Box>
          <Typography  variant="body1" color="initial">Score</Typography>
        <Typography component={'span'} variant="body2" color="success">88%</Typography>
        </Box>
      </Box>
    </Card>
    

  </Box>
</Modal>

<CourseMaterials/>
<Comments/>

                </Grid>

                    <Grid  size={{sm:12, md:4}}>
                <Box sx={{display:{xs:'none', md:'flex', flexDirection:'column'}}}  component={'aside'}>
                <Box  sx={{p:2}}>
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
                <Box sx={{mb:5}} >
                    <List sx={dividerStyle}>
                    <ListItem>
                        <Typography variant="h5" color="initial">Week 1-4</Typography>
                    </ListItem>

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
                                  <Box   sx={{ mr:1}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem', mb:{xs:1, md:0}}} label="3 QUESTIONS" color="success" /> </Box>
                                <Box component={'div'} sx={{fontSize:'1.2rem'}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem'}} label="10 MINUTES" color="error" /> </Box>
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
                </Box>
                <Box sx={{my:2}} >
                    <List sx={dividerStyle}>
                    <ListItem>
                        <Typography variant="h5" color="initial">Week 5-8</Typography>
                    </ListItem>

                    <ListItem>
                        <Typography variant="body1" color="#888">Advanced story telling techniques for writers: Personas, Characters & Plots</Typography>
                    </ListItem>

                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Defining Functions </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Functions Parameters</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box onClick={handleOpenTasks} sx={{display:'flex', alignItems:'center', ":hover":{cursor:'pointer'}}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem', mr:1}} variant="body1" color="initial">Return Values From Functions</Typography>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                                  <Box   sx={{ mr:1}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem', mb:{xs:1, md:0}}} label="3 QUESTIONS" color="success" /> </Box>
                                <Box component={'div'} sx={{fontSize:'1.2rem'}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem'}} label="10 MINUTES" color="error" /> </Box>
                                </Box>
                            </Box>
                            
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Global Variable and Scope</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Newer Way of creating a Constant </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Constants</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    </List>
                </Box>
                <Box sx={{my:2}} >
                    <List sx={dividerStyle}>
                    <ListItem>
                        <Typography variant="h5" color="initial">Week 5-8</Typography>
                    </ListItem>

                    <ListItem>
                        <Typography variant="body1" color="#888">Advanced story telling techniques for writers: Personas, Characters & Plots</Typography>
                    </ListItem>

                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Defining Functions </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Functions Parameters</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box onClick={handleOpenTasks} sx={{display:'flex', alignItems:'center', ":hover":{cursor:'pointer'}}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem', mr:1}} variant="body1" color="initial">Return Values From Functions</Typography>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                                  <Box   sx={{ mr:1}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem', mb:{xs:1, md:0}}} label="2 QUESTIONS" color="success" /> </Box>
                                <Box component={'div'} sx={{fontSize:'1.2rem'}} variant="body1" color="initial">  <Chip sx={{fontSize:'0.8rem'}} label="15 MINUTES" color="error" /> </Box>
                                </Box>
                            </Box>
                            
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Global Variable and Scope</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Newer Way of creating a Constant </Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider  sx={{mb:1}} component="li" />
                    <ListItem sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

                            <Box sx={{display:'flex', alignItems:'center'}}>
                                <DescriptionOutlinedIcon sx={{mr:1}}></DescriptionOutlinedIcon>
                                <Typography sx={{fontSize:'1.2rem'}} variant="body1" color="initial">Constants</Typography>
                            </Box>
                            <Box>
                            <LockOutlinedIcon></LockOutlinedIcon>
                            </Box>
                    </ListItem>
                    <Divider sx={{mb:1}} component="li" />
                    </List>
                </Box>
                </Box>

                
                </Grid>
            </Grid>




            <Box sx={{display:'flex' , my:2, px:4}}>


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
        </Container>
        </Box>
    </Box>
    </>
  )
}
