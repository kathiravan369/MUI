
import { Button, Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function Security() {
  return (
    <Typography sx={{padding:"10px"}}>
    <Typography sx={{backgroundColor:"#E5D4FF",borderRadius:"10px"}} ><br/><br/>
     <Container maxWidth="lg" sx={{backgroundColor:"#E5D4FF"}}>
     <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 4 }}
        justifyContent="space-around"
        >
            <Typography sx={{}}>
                <Typography variant='h4'>
                Gate Security Control
                </Typography>
                <Typography sx={{marginBottom:"20px",marginTop:"10px",width:"450px"}} >
                <Typography variant='p' align='center' sx={{fontSize:"20px",maxWidth:"30%"}} >
                  Step into a new era of security with Root it advanced gate secunity control project. Our team has developed a state-of-the-art solution to enhance access control,ensuring the safety and security of your prkemises.This project combines cutting-edge Technology with design to create a robust gate security system.
                </Typography>
                </Typography>
            <Button variant="contained" sx={{borderRadius:"8px",fontSize:"11px",color:"white"}}>license Plate Recognition</Button>
            <Button variant="contained" sx={{borderRadius:"8px",marginLeft:"5px",fontSize:"11px",color:"white"}}>Fully customization feature</Button>
            
            </Typography>
            
               <Typography sx={{}}>
                <Typography  sx={{marginBottom:"20px",marginTop:"10px"}} >
                   <img src={"https://i.ibb.co/Df4srQn/Rectangle-2511.png"} width={450} height={300} />
              
                </Typography>
              </Typography>
           
    </Stack><br/><br/>
    <Stack
        direction={{ xs: 'column', sm: 'row-reverse' }}
        spacing={{ xs: 2 }}
        justifyContent="space-around"
        >
           
            <Typography sx={{}}>
                <Typography variant='h4'>
                Canteen management
                </Typography>
                <Typography sx={{marginBottom:"20px",marginTop:"10px",width:"450px"}} >
                <Typography variant='p' align='center' sx={{fontSize:"20px",maxWidth:"30%"}} >
                It's our innovative canteen project! Our team embarked on a mission to revolutionize the dining experience, creating a dynamic and vibrant space for our clients and their employees / students. The primary goal of this project is to enhance the overall dining experience through thoughtful design, efficient operations, and a commitment to quality.
               </Typography>
                </Typography>
            <Button variant="contained" sx={{borderRadius:"8px",fontSize:"11px",color:"white"}}>User friendly UI</Button>
            <Button variant="contained" sx={{borderRadius:"8px",marginLeft:"5px",fontSize:"11px",color:"white"}}>Sustainability Initiatives</Button>
            <Button variant="contained" sx={{borderRadius:"8px",marginLeft:"5px",fontSize:"11px",color:"white"}}>User freedom</Button>
            
            </Typography>
            <Typography sx={{}}>
                <Typography  sx={{marginBottom:"20px",marginTop:"10px"}} >
                   <img src={"https://i.ibb.co/Xp2QJRH/Rectangle-2511-1.png"} width={450}  />
              
                </Typography>
            </Typography>
         
           
    </Stack><br/><br/>
    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2 }}
        justifyContent="space-around"
        >
            <Typography sx={{}}>
                <Typography variant='h4'>
                Hostel management
                </Typography>
                <Typography sx={{marginBottom:"20px",marginTop:"10px",width:"450px"}} >
                <Typography variant='p' align='center' sx={{fontSize:"20px",maxWidth:"30%"}} >
                Discover the next level of hostel management with Root it's innovative solution. Our hostel management project aims to streamline and enhance the entire hostel experience, providing administrators, residents, and staff with powerful tools for efficient operations and improved living conditions.
                </Typography>
                </Typography>
            <Button variant="contained" sx={{borderRadius:"8px",fontSize:"11px",color:"white"}}>Fully responsive</Button>
            <Button variant="contained" sx={{borderRadius:"8px",marginLeft:"5px",fontSize:"11px",color:"white"}}>Fully responsive </Button>
            <Button variant="contained" sx={{borderRadius:"8px",marginLeft:"5px",fontSize:"11px",color:"white"}}>Role based control</Button>
            
            </Typography>
            
               <Typography sx={{}}>
                <Typography  sx={{marginBottom:"20px",marginTop:"10px"}} >
                   <img src={"https://i.ibb.co/ypr9zQ1/Rectangle-2511-2.png"} width={450}  />
              
                </Typography>
              </Typography>
           
    </Stack><br/><br/>
          <Stack
        direction={{ xs: 'column', sm: 'row-reverse' }}
        spacing={{ xs: 2 }}
        justifyContent="space-around"
        >
           
            <Typography sx={{}}>
                <Typography variant='h4'>
                Quality control
                </Typography>
                <Typography sx={{marginBottom:"20px",marginTop:"10px",width:"450px"}} >
                <Typography variant='p' align='center' sx={{fontSize:"20px",maxWidth:"30%"}} >
                Embark on a journey of efficiency and sustainability with Rootlt Cotton Mill Management project. Our innovative solution is designed to revolutionize the cotton manufacturing process, with a primary focus on minimizing wastage, optimizing machine performance, and promoting sustainable practices.
               </Typography>
                </Typography>
            <Button variant="contained" sx={{borderRadius:"8px",fontSize:"11px",color:"white"}}>Wastage Monitoring System</Button>
            <Button variant="contained" sx={{borderRadius:"8px",marginLeft:"5px",fontSize:"11px",color:"white"}}>Role based controll</Button>
            
            </Typography>
            
            <Typography sx={{}}>
                <Typography  sx={{marginBottom:"20px",marginTop:"10px"}} >
                   <img src={"https://i.ibb.co/QFNtQwS/Rectangle-2511-3.png"} width={450}  />
              
                </Typography>
            </Typography>
           
    </Stack>
    </Container>
    </Typography>
    </Typography>
  )
}

export default Security
