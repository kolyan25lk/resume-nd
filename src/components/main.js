import './styleMain.css';
import { Paper, Typography } from "@mui/material";
import React from "react";



function MainContainer() {
    
    return(
//  my projects section 

        <Paper className="main-content-section">
                <Typography className="main-content-title" variant="h5">2+ years of development JS, React.js, Node.js</Typography>
                <Typography className="main-content-title" variant="h5">6+ completed projects</Typography>

            <h3 className="main-content-title">Project</h3>
            <ol className="my-projects-list">
                <li className="my-projects-item">
                 <span className="my-projects-text">
                  <a href="https://t.me/FreshRolls_bot" className="my-projects-link"> https://t.me/FreshRolls_bot </a>
                                ...
                    <span className="my-projects-bracket">[</span> Telegram Bot <span className="my-projects-bracket">]</span></span>
                    <p className="my-work-experience-duty" >This is my first commercial experience in IT It was necessary to complete an order for the development of a Telegram bot - for ordering and delivering sushi. I developed the project structure, store menu and all functionality for processing and delivering goods, as well as filling 200+ product cards. The project was completed within 7 days.
                    </p>
                </li>

                <li className="my-projects-item">
                                <span className="my-projects-text">
                                <a href="https://kolyan25lk.github.io/Aim_Training_Game/" className="my-projects-link">  https://kolyan25lk.github.io/Aim_Training_Game/ </a>
                                 ...
                            <span className="my-projects-bracket">[</span> JavaScript <span className="my-projects-bracket">]</span></span>
                            <p className="my-work-experience-duty">This project was made to consolidate my JS knowledge. The project was developed using HTML + CSS and pure JavaScript using standard functions and methods. The project was completed within 3 days.
                            </p> 
                </li>

                <li className="my-projects-item">
                                <span className="my-projects-text">
                                <a href="https://kolyan25lk.github.io/bootcamp_ITN/" className="my-projects-link"> https://kolyan25lk.github.io/bootcamp_ITN/ </a>
                                 ...
                                <span className="my-projects-bracket">[</span> React.js, Node.js <span className="my-projects-bracket">]</span></span>
                                <p  className="my-work-experience-duty">This project was developed to consolidate my knowledge after completing the ITNaton training course on the Codifun platform from March 2020 - Oktober 2020. The project was created from a layout in Figma using HTML + CSS + JavaScript on React.js using the external Mapbox API and the Materialize, Node.js libraries. The project was completed within 7 days.
                                </p>
                </li>

                <li className="my-projects-item">
                                <span className="my-projects-text">
                                <a href="https://kolyan25lk.github.io/baker-shops/" className="my-projects-link"> https://kolyan25lk.github.io/baker-shops/ </a>
                                 ...
                                <span className="my-projects-bracket">[</span> React.js, Node.js <span className="my-projects-bracket">]</span></span>
                                <p  className="my-work-experience-duty">
                                  This project was developed to consolidate my knowledge after completing the ITNaton 2.0 Frontend advanced training course on the Powercode academy platform in the period from January 2022 - Oktober 2022. The project was created from a layout in Figma using HTML + CSS + JavaScript on React.js using Webpack , Node.js. The project was completed within 15 days.
                                </p>
                </li>

                <li className="my-projects-item">
                                <span className="my-projects-text">
                                <a href="https://kolyan25lk.github.io/material-site/" className="my-projects-link"> https://kolyan25lk.github.io/material-site/ </a>
                                ...
                                <span className="my-projects-bracket">[</span> React.js, Node.js, Material UI <span className="my-projects-bracket">]</span></span>
                                <p  className="my-work-experience-duty">This project was designed to consolidate my knowledge in mastering the skills of using Material UI. The project was created using React. js, JavaScript, Material UI Libraries, npm package manager and Node.js. The project was completed within 10 days.
                                </p>
                </li>

                <li className="my-projects-item">
                                <span className="my-projects-text">
                                <a href="https://kolyan25lk.github.io/resume-nd/" className="my-projects-link"> https://kolyan25lk.github.io/resume-nd/ </a>
                                ...
                                <span className="my-projects-bracket">[</span> React.js, Node.js, Material UI <span className="my-projects-bracket">]</span></span>
                                <p  className="my-work-experience-duty">This project was designed to consolidate my knowledge in mastering the skills of using Material UI. The project was created using React. js, JavaScript, Material UI Libraries, npm package manager and Node.js. The project was completed within 12 days.
                                </p>
                </li>
            </ol> 


{/* my work experience section */}
        <div className="my-work-experience-section">
            <h3 className="main-content-title">Work Experience</h3>
{/* company 1 */}
            <div className="my-work-experience-company-block">
            <h4 className="my-work-experience-position"> Front-End Developer <span className="my-work-experience-company">Freelance</span> </h4>
            <p className="my-work-experience-period"> September 2020 -up to now  <span className="my-work-experience-devider"> | </span> All country</p>
            <ul className="my-work-experience-duties">
                <li className="my-work-experience-duty">creating HTML-page based on Figma design layouts. </li>
                <li className="my-work-experience-duty">Basic knowledge and principles of the Mapbox API, creating and connecting interactive maps on websites.</li>
                <li className="my-work-experience-duty">Creating applications based on React.js using different libraries. </li>
                <li className="my-work-experience-duty">Semantic, cross-browser and adaptive layout Experience in creating responsive layout template</li>
            </ul>
        

            </div >
 {/* company 2 */}
                <div className="my-work-experience-company-block">
                    <h4 className="my-work-experience-position"> Bot Developer <span className="my-work-experience-company">Freelance</span></h4>
                    <p className="my-work-experience-period"> May 2021 - February 2022 <span className="my-work-experience-devider"> | </span> All Country</p>
                    <ul className="my-work-experience-duties">
                        <li className="my-work-experience-duty">I am engaged in the development of chat bots for messengers such as: Telegram, Viber, WhatsApp. .</li>
                        <li className="my-work-experience-duty">Development of bots with an administrative panel.</li>
                        <li className="my-work-experience-duty">I create universal bots for any business and any services: online marathons, online stores, beauty salons, medical
                        clinics, sales funnel, bots for HR and technical support users.</li>
                    </ul>
                
                
                </div>
{/* company 3 */}
                    <div className="my-work-experience-company-block">
                        <h4 className="my-work-experience-position"> Fiber optic network engineer <span className="my-work-experience-company"> TOV "TK Driada"</span> </h4>
                        <p className="my-work-experience-period"> March 2013 - February 2022 <span className="my-work-experience-devider">|</span> Ukraine</p>
                        <ul className="my-work-experience-duties">
                            <li className="my-work-experience-duty">Building fiber optic networks.</li>
                            <li className="my-work-experience-duty">Maintenance of fiber optic and wimax networks. </li>
                            <li className="my-work-experience-duty">Connecting subscribers to the Internet network.</li>
                        </ul>
                    </div>
                        </div>

{/* Education */}
                    <div className="my-education-section">
            <div>
                <h3 className="main-content-title">Education</h3>
                <h4 className="my-education-university"> <span className="my-education-university-color">IT Nation 1.0 </span> </h4>
                <h3 className="my-education-specialty">Web Coder </h3>
                <h3 className="my-education-specialty">HTML CSS JavaScript  </h3>
                <p className="my-education-period"> March 2020 - Oktober 2020 <span className="my-work-education-devider">|</span> Ukraine</p>

                <h4 className="my-education-university"> <span className="my-education-university-color">IT Nation 2.0</span> </h4>
                <h3 className="my-education-specialty">Advanced Frontend Developer </h3>
                <h3 className="my-education-specialty">JavaScript, React.js, Node.js, React-Router, props, promise </h3>
                <p className="my-education-period"> January 2022 - Oktober 2022 <span className="my-work-education-devider">|</span> Ukraine</p>


                <h4 className="my-education-university"> <span className="my-education-university-color">The College of the Volodymyr Dal National University of Ukraine</span> </h4>
                <h3 className="my-education-specialty">Information systems and technologies </h3>
                <p className="my-education-period"> September 2010 - February 2014 <span className="my-work-education-devider">|</span> Ukraine</p>

            </div>
    </div>



        </Paper>

              
    );
}
export default MainContainer;