import { Button, ButtonGroup, Stack, Switch, Typography, styled } from "@mui/material"
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Ok=styled(Button)({
    backgroundColor:"gray",
    padding:"10px 20px",
    color:'white',
    '&:hover':{
        backgroundColor:'white',
        color:"rgb(209, 137, 209) "
    }
})
const styled1={
  root:{
    backgroundImage:`url(https://i.ibb.co/QN3K4Hk/production-id-4779866-1080p-1.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:"cover"
  }
}

function Header() {
  return (
    <>
    <Typography style={styled1.root}>
      <Typography sx={{backgroundColor:"black",opacity:"0.9"}}>
      <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-around"
            >
            <Button sx={{}}>
                <img src={'https://i.ibb.co/cFDsfJx/rootit-removebg-preview.png'} />
            </Button>
            <Button sx={{}}>

                <ButtonGroup variant="contained"  aria-label="Basic button group" sx={{borderRadius:"30px"}}>
                    <Ok sx={{borderRadius:"30px"}}>Home</Ok>
                    <Ok>Services</Ok>
                    <Ok>About</Ok>
                    <Ok>Career</Ok>
                    <Ok sx={{borderRadius:"30px",color:"rgb(209, 137, 209)"}}>Work</Ok>
                </ButtonGroup>
            </Button>
            <Button variant="container" sx={{}}>
            <Button variant="contained" endIcon={<ArrowOutward/>}  sx={{borderRadius:"15px",color:"white",marginLeft:"5px",fontSize:"17px"}}>Contact</Button>
            
            </Button>
      </Stack><br/><br/>
      <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
           alignItems="center"
            >
            <Button sx={{}}>
                
                <Button variant="contained"  sx={{borderRadius:"15px",color:"white",marginLeft:"5px",fontSize:"12px",marginTop:"100px",backgroundColor:"rgb(131, 131, 246)"}}>Dasboard</Button>
                <Button sx={{marginTop:"50px",marginRight:"10px"}}><ArrowOutward/></Button> 
            </Button>
            <Typography   >
              <Typography display={'inline'} sx={{fontSize:"50px",color:"white",fontWeight:"bold"}} >
                  Our
              </Typography>
              <Typography display={'inline'}  sx={{fontSize:"50px",color:"rgb(193, 132, 193)",fontWeight:"bold",marginLeft:"15px"}} >
                Work
              </Typography>
               
            </Typography>
            <Button variant="container" sx={{}}>
            <Button sx={{marginBottom:"50px",marginLeft:"10px"}}><CallReceivedIcon/></Button> 
            <Button variant="contained"  sx={{borderRadius:"15px",color:"white",marginLeft:"5px",fontSize:"12px",marginBottom:"100px",backgroundColor:"rgb(116, 197, 116)"}}>Software</Button>
           </Button>
      </Stack><br/><br/>
      <Stack
           
            justifyContent="center"
           alignItems="center"
            >
          <Typography variant="p" sx={{color:"white",textAlign:"center",width:"480px",fontSize:"15px"}} >
            See how we help our clients became the best version of themselves  each and everday.
          </Typography>
       
      </Stack><br/><br/>
      
      <Stack
           
            justifyContent="center"
           alignItems="center"
            >
         <Switch {...label} defaultChecked sx={{transform:"rotate(90deg)",backgroundColor:"rgb(207, 207, 207)",borderRadius:"20px"}} />
      </Stack><br/><br/>
      </Typography>
      </Typography>
    </>
  )
}

export default Header
