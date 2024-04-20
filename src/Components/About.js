import { Button, ButtonGroup, Container, IconButton, InputBase, Link, Paper, Stack, Typography } from "@mui/material"

import ArrowForward from "@mui/icons-material/ArrowForward";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
function About() {
  return (
    <Typography sx={{backgroundColor:"black"}}>
        <Container sx={{backgroundColor:"black"}}>
           <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            >
            <Button sx={{}}>
                <img src={'https://i.ibb.co/cFDsfJx/rootit-removebg-preview.png'} />
            </Button>
            <Typography>
                    <Typography variant="h6" sx={{marginTop:"30px",color:"white"}}>
                    COMPANY
                    </Typography> <br/>
                    <ButtonGroup variant="text" aria-label="Basic button group" >
                            <Button  sx={{color:"gray"}} >About Us</Button>
                            <Button  sx={{color:"gray"}}>Our Services</Button>
                            <Button  sx={{color:"gray"}}>Career</Button>
                            <Button  sx={{color:"gray"}}>Contact Us</Button>
                            <Button  sx={{color:"gray"}}>Our Work</Button>
                    </ButtonGroup>
              
            </Typography>
           
      </Stack><br/><br/>
      <Container sx={{backgroundColor:"rgb(33, 33, 33)",borderRadius:"15px"}}> <br/>
      <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-around"
            >
            <Typography sx={{}}>
                <Typography display={'inline'} sx={{fontSize:"30px",color:"white",fontWeight:"bold"}}>
                  Hello,
                </Typography>
                <Typography display={'inline'} sx={{fontSize:"20px",color:"rgb(206, 206, 206)",fontWeight:"bold"}}>
                We are Rootit!
                </Typography> <br/>

                <Typography variant="p" sx={{color:"rgb(206, 206, 206)"}}>
                Our goal is to translate the positive effect from revolutioning 
                </Typography>
                <br/>
                <Typography variant="p" sx={{color:"rgb(206, 206, 206)"}}>
                   how companies engage with their clients & thier team. 
                </Typography>
            </Typography>
            <Typography >
            <Paper
               
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,marginTop:"10px" }}
                >
                
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                   <Button variant="container" sx={{backgroundColor:"blue",color:"white"}}>
                   <ArrowForward />
                   </Button>
                </IconButton>
            </Paper>
              
            </Typography>
           
      </Stack><br/>
      </Container>
      <br/><br/>
      <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-around"
            >
            <Typography sx={{}}>
               <Typography variant="h6" sx={{color:'white'}}>
                   REACH US AT
                </Typography> <br/> <br/>
                <Typography variant="p" sx={{color:"gray"}}>
                   Email - <Link href="#" color="inherit">
                        {'Support@rootit.com'}
                        </Link> 
                </Typography><br/>
                <Typography variant="p" sx={{color:"gray"}}>
                   Call -
                   <Link href="#" color="inherit">
                        {'180-202-4849'}
                        </Link> 
                </Typography><br/>
                <Typography variant="p" sx={{color:"gray"}}>
                    Mon-Fri, 9am to 6pm
                </Typography>
           </Typography>
            <Typography>
            <img src={"https://i.ibb.co/jkVs1XP/map-base-1.png"} width={300} />
        </Typography>
         <Typography>
                <Typography variant="h6" sx={{color:"white"}}>
                HEADQUARTERS
                </Typography> <br/> <br/>
                <Typography variant="p" sx={{color:"gray"}}>
                H-20,Green park avenue,
                </Typography><br/>
                <Typography variant="p" sx={{color:"gray"}}>
                Omalur Main Road,Salem,
                </Typography><br/>
                <Typography variant="p" sx={{color:"white"}}>
                Salem,Tamil Nadu IN.
                </Typography><br/><br/>
                <Link href="#" underline="hover" sx={{color:"blue"}}>
                  {'Get directions - >'}
                </Link>
         </Typography>
         
      </Stack><br/><br/>
        <Typography sx={{borderBottom:"2px solid white",width:"100%"}}>
             
        </Typography>
        <br/>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-around"
            >
            <Typography variant="p" sx={{color:"gray"}}>
            @rootit solutions,2024,All Rights Reserved.
            </Typography>
            <Typography sx={{color:"gray"}}>
                <Twitter />
                <Instagram sx={{marginLeft:"15px"}}/>
                <LinkedIn sx={{marginLeft:"15px"}}/>
                <Facebook sx={{marginLeft:"15px"}}/>
            </Typography>
            <Typography variant="container" sx={{color:"gray"}} >
            <Link href="#" underline="none" sx={{color:"gray"}}>
                {'Privacy Policy'}
           </Link>
           <Link href="#" underline="none" sx={{color:"gray",marginLeft:"15px"}}>
                {'Terms & Conditions'}
           </Link>
           <Link href="#" underline="none" sx={{color:"gray",marginLeft:"15px"}}>
                {'Cookies'}
           </Link>
            </Typography>
      </Stack><br/>
      </Container>
    </Typography>
  )
}

export default About
