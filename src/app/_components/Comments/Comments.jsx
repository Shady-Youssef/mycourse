'use client'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, TextField } from '@mui/material'
import Image from 'next/image'
import Divider from '@mui/material/Divider';
import toast from 'react-hot-toast'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function Comments() {
  const [comment, setComment] = useState('')
  return (
    <>
    <Box sx={{mt:8, mb:3}}>
        <Typography sx={{mb:3}} component={'h2'} variant="h4" color="initial">Comments</Typography>

            <Box sx={{display:'flex', alignItems:'center', my:4}}>
              <Box sx={{mr:3}}>
                <Image className='avatarComment'  src='/shadyyoussef.png' width={100} height={60} alt='first comment'></Image>
              </Box>
              <Box>
                <Typography sx={{mb:1}} variant="body1" color="#444">Shady Youssef</Typography>
                <Typography sx={{mb:1}}  variant="body1" color="#444">Oct,10 2021</Typography>
                <Typography sx={{width:'80%', mb:1}} variant="body1" color="#444">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia vero animi sint molestiae perspiciatis quo ratione repellat dolore ea.</Typography>
              </Box>
            </Box>
            <Divider sx={{mb:1, width:'80%'}} variant='middle' component="li" />
            <Box sx={{display:'flex', alignItems:'center', my:4}}>
              <Box sx={{mr:3}}>
                <Image className='avatarComment'  src='/avatarComment1.jpg' width={100} height={60} alt='second comment'></Image>
              </Box>
              <Box>
                <Typography sx={{mb:1}} variant="body1" color="#444">Tom Alfred</Typography>
                <Typography sx={{mb:1}}  variant="body1" color="#444">Oct,15 2021</Typography>
                <Typography sx={{width:'80%', mb:1}} variant="body1" color="#444">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia vero animi sint molestiae perspiciatis quo ratione repellat dolore ea.</Typography>
              </Box>
            </Box>
            <Divider sx={{mb:1, width:'80%'}} variant='middle' component="li" />
            <Box sx={{display:'flex', alignItems:'center', my:4}}>
              <Box sx={{mr:3}}>
                <Image className='avatarComment'  src='/avatarComment2.jpg' width={100} height={60} alt='third comment'></Image>
              </Box>
              <Box>
                <Typography sx={{mb:1}} variant="body1" color="#444">Sarah.M</Typography>
                <Typography sx={{mb:1}}  variant="body1" color="#444">Oct,19 2021</Typography>
                <Typography sx={{width:'80%', mb:1}} variant="body1" color="#444">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia vero animi sint molestiae perspiciatis quo ratione repellat dolore ea.</Typography>
              </Box>
            </Box>

             <TextField
                sx={{mb:2, boxShadow:3}}
                  variant="outlined"
                  placeholder='Write a comment'
                  rows={3}
                  multiline
                  fullWidth
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button onClick={() => {
                  setComment('');
                  toast.success('Your Comment Has Been Submitted')
                }} disabled={comment.trim() === ''} sx={{py:2,px:4,bgcolor:'#009184'}} variant='contained' >
                Submit Review <ArrowRightAltIcon sx={{mb:0.5}}></ArrowRightAltIcon>
            </Button>
    </Box>
    </>
  )
}
