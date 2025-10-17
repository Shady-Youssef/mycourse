'use client'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useTheme, useMediaQuery, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Box, Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


export default function BreadcrumbHero() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const breadcrumbs = [
      <Link sx={{fontWeight:'600'}} underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={{fontWeight:'600'}}
    >
      Courses
    </Link>,
    <Typography key="3" sx={{fontWeight:'600' ,color: 'text.primary' }}>
      Course Details
    </Typography>,
  ];
  return (
    <>
    <Box component={'section'} sx={{bgcolor:'#f5f9fa', px:4}}>
       <Container maxWidth sx={{p:2}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

    </Container>
      <Box sx={{px:{xs:0, md:3}, pb:2}}>
      <Typography
      component="h1"
      variant={isMdUp ? 'h3' : 'h4'}
      sx={{ fontWeight: 600, fontSize:{xs:'1.6rem', md:'3rem'} }}
      color="initial"
    >
      Starting SEO as your Home
    </Typography>
      <Typography sx={{ display:{xs:'block', md:'none'}, fontWeight:'600',fontSize:{xs:'1.6rem', md:'3rem'} }} component={'h1'} variant="h4" color="initial">Based Business</Typography>
      </Box>
    </Box>
    </>
  );
}
