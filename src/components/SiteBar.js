import * as React from 'react';
import '../App.css';
import { styled } from '@mui/material/styles';
import {CardMedia, Grid, Link, Paper} from "@mui/material";
import Photo from "../images/my_photo_2.jpg";
import  {makeStyles} from 'tss-react/mui';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#455a64',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  
}));
const useStyles = makeStyles()((theme) => ({
    aboutMeName: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "45px",
      lineHeight:" 55px",
      color: "#ffffff",   
    },
    aboutMeProfession: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight:" 35px",
      color: "#ffffff",       
    },
    aboutMeProject: {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight:" 27px",
      color: "#ffffff",
    },
    cardMedia: {
    paddingTop:"100%",
    marginTop: "2em",
    marginRight:"1em",
    marginLeft:"1em",   
    }, 
  cardGrid: {
    marginTop: theme.spacing(4),
    },
  contactssectiontype: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight:" 24px",
    color: "#ffffff",        
    },
  contactssectionlink: {
    fontStyle:" normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#ffffff",
    opacity: 0.5,
    padding: "5px",
    },
  techskillslist: {
  padding:" 0 0 0 17px",
    },
  softskillslist: {
  padding:" 0 0 0 17px",
    },
  techskillsitem: {
  color: "#f8603a",
    },
  softskillsitem: {
  color: "#f8603a",
    },
  techskillsitemtext: {
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#ffffff",
    },
  softskillsitemtext: {
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#ffffff",
   },
}));

function SiteBar() {
    const { classes } = useStyles();
    return(     
       <Grid>
                <CardMedia
                className={classes.cardMedia}
                 image={Photo}
                 title="Image title"
                 align="center"                 
                />

                <Item className={classes.aboutMeName}align="left" >Nikolay Dovgiy</Item>
                <Item className={classes.aboutMeProfession}align="left">Front-End Developer</Item>
                <Item className={classes.contactssectiontype}align="left" color="#595959">GEOGRAPHY I live in: Poltava region Kremenchuk (Ukraine) Ready to relocate: Ukraine, other countries, Ready for business trips</Item>
                <Item className={classes.aboutMeProfession} >Contacts</Item>
                <Item className={classes.contactssectiontype}>Call:
                     <Link className={classes.contactssectionlink} href="tel:+380500252431">+38 050 025 24 31</Link>
                </Item>
                <Item className={classes.contactssectiontype}>E-mail:
                     <Link className={classes.contactssectionlink} href="mailto:kolyan25lk@gmail.com">kolyan25lk@gmail.com</Link>
                </Item>
                <Item className={classes.contactssectiontype}>Telegram:
                     <Link className={classes.contactssectionlink} href="https://t.me/nik_dov">@nik_dov</Link>
                </Item>
                <Item className={classes.contactssectiontype}>Linkedin:
                     <Link className={classes.contactssectionlink} href="https://www.linkedin.com/in/nikolay-dovgiy-a374961b7/">Nikolay (Nik_Dov) Dovgiy</Link>
                </Item>
                <Item className={classes.contactssectiontype}>Github:
                     <Link className={classes.contactssectionlink} href="https://github.com/kolyan25lk">kolyan25lk</Link>
                </Item>

                <Item className={classes.aboutMeProfession} >Tech Skills</Item>
                  <Item>
                <ul className={classes.techskillslist}>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>Developer of messenger bots</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>creating HTML-page based on Figma design layouts</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>HTML5</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>CSS3</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>Bootstrap</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>Materialize</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>Material UI</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>Mapbox</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>GIT</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>JavaScript</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>React.js</span></li>
                 <li className={classes.techskillsitem}><span className={classes.techskillsitemtext}>Node.js</span></li>
               </ul>
                 </Item>

                 <Item className={classes.aboutMeProfession} >Soft Skills</Item>
                 <Item>
               <ul className={classes.softskillslist}>
                <li className={classes.softskillsitem}><span className={classes.softskillsitemtext}>Scrum</span></li>
                <li className={classes.softskillsitem}><span className={classes.softskillsitemtext}>Agile</span></li>
                <li className={classes.softskillsitem}><span className={classes.softskillsitemtext}>GTD</span></li>
                <li className={classes.softskillsitem}><span className={classes.softskillsitemtext}>Teamwork</span></li>
            </ul>
                 </Item>          
      </Grid>        
    );}
export default SiteBar ;