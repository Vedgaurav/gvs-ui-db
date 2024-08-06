import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { CiEdit } from "react-icons/ci";
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Profile=()=>{

    const profile=useSelector((state)=>state.profile)
    // console.log(profile);

    useEffect(()=>{



    },[profile])

          const [expanded, setExpanded] = React.useState(false);
    
      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    
      return (
        <div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
               expandIcon={<CiEdit />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 , fontWeight:"bold" ,background:"darkblue",color:"white", borderRadius:"2rem"}}>
                Personal Info.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Read/Edit Personal Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Grid container spacing={2}>
                <Grid item xs={3}>
               <Paper style={{fontWeight:"bold",background:"darkblue",color:"white"}}>First Name</Paper><Paper elevation={1}>{profile.fname}</Paper>
               </Grid>
               {profile.mname && <Grid item xs={3}>
               <Paper style={{fontWeight:"bold",background:"darkblue",color:"white"}}>Middle Name</Paper><Paper elevation={1}>{profile.mname}</Paper>
               </Grid>}
               {profile.lname && <Grid item xs={3}>
               <Paper style={{fontWeight:"bold",background:"darkblue",color:"white"}}>Last Name</Paper><Paper elevation={1}>{profile.lname}</Paper>
               </Grid>}
               {profile.initiatedName && <Grid item xs={3}>
               <Paper style={{fontWeight:"bold",background:"darkblue",color:"white"}}>Initiated Name</Paper><Paper elevation={1}>{profile.initiatedName}</Paper>
               </Grid>}
               {profile.gender && <Grid item xs={3}>
               <Paper style={{fontWeight:"bold",background:"darkblue",color:"white"}}>Gender</Paper><Paper elevation={1}>{profile.gender}</Paper>
               </Grid>}
               {profile.dateOfBirth && <Grid item xs={3}>
               <Paper style={{fontWeight:"bold",background:"darkblue",color:"white"}}>Date of Birth</Paper><Paper elevation={1}>{profile.dateOfBirth}</Paper>
               </Grid>}
               </Grid>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Family Details</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Family Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            //   expandIcon={<ExpandMoreIcon />}
            contentEditable
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              ico
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Devotional Info.
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            //   expandIcon={<ExpandMoreIcon />}
            expandIcon={"^"}

              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Contact Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    }

export default Profile;