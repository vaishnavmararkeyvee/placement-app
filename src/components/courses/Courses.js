import React from 'react';
import './Courses.css';
import pic from '../../assets/fsd.png';
import pic1 from '../../assets/datascience.jpg';
import pic2 from '../../assets/rpa.jpg';
import pic3 from '../../assets/cybsec.jpg';
import pic4 from '../../assets/dm.jpg';
import pic5 from '../../assets/st.png';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Courses = () => {
  return (
      <div>
        <Header />
     
            <div className='wrapper'>
      
                <img className='background' src="https://wpassets.porttechnology.org/wp-content/uploads/2021/04/21114946/iStock-1293866142-scaled.jpg" alt="cover" />
                <h1 className='heading'>OUR COURSES</h1>
                <div >
                    <p className='paragraph'>The internship program strategies are very specific, measurable, realistic and fit well within the time framework and also showcases what the student 
                        hopes to learn from their experiences and the level of academic expectations that are expected!
                        <br /><br />
                        The Curriculum emphasizes exposure in technology areas like MEAN Stack, Blockchain, RPA, Data Science Analytics, Machine Learning, IoT, Embedded Systems, Cyber Security, 
                        Cloud Computing, Digital Marketing and also on Life Skill areas such as Communication Skill, Personality development, Soft Skill development, hands-on training in several 
                        laboratory modules which aids them in getting placed.
                        <br /><br />
                        The curriculum is more responsible to industry needs and provide the students with skills for employment and positive work values needed to meet the 
                        demands of the changing industry scenario and global environment. The curriculum for individual course has been designed by a perfect blend of inputs 
                        from renowned academicians and industry experts from across the Globe.
                    </p>  
                </div>  
                <div className='Main'>
                    <div className='Card'>
                        <img src={pic} alt="" className='Image'/>
                        <div>
                            <h4 className='Title'>CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT</h4>
                            <p className='Para'>The MERN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MERN stack – MongoDB, Express.js, React, and Node.js – all are based on one language, Javascript.</p>
                          
                        </div>
                    </div>
                    <div className='Card'>
                        <img src={pic1} alt="" className='Image'/>
                        <div>
                            <h4 className='Title'>CERTIFIED SPECIALIST IN DATA SCIENCE & ANALYTICS</h4>
                            <p className='Para'>Data Science and Analytics are amongst the Top 5 IT Jobs . One of the worlds famous tech group, CIO.com predicts that the skills around Data Science will remain as popular for the next few years.</p>
                            
                        </div>
                    </div>
                    <div className='Card'>
                        <img src={pic2} alt="" className='Image'/>
                        <div>
                            <h4 className='Title'>ROBOTIC PROCESS AUTOMATION</h4>
                            <p className='Para'>Robotic process automation (RPA) is the use of software with artificial intelligence (AI) and machine learning capabilities to handle high-volume, repeatable tasks that previously required humans to perform.</p>
                            {/* <a href="#">Read  more</a> */}
                        </div>
                    </div>
        
                    <div className='Card'>
                        <img src={pic3} alt="" className='Image'/>
                        <div>
                            <h4 className='Title'>CERTIFIED CYBER SECURITY ANALYST</h4>
                            <p className='Para'>Cyber Security is a specialized field in Information Technology (IT) which is regarded as a sub-stream in Computer  Science. Cyber Security as a  profession is evolving over the years, the reason being the increasing rate of cybercrime.</p>
                            {/* <a href="#">Read  more</a> */}
                        </div>
                    </div>
                    <div className='Card'>
                        <img src={pic4} alt="" className='Image'/>
                        <div>
                            <h4 className='Title'>DIGITAL MARKETING</h4>
                            <p className='Para'>Digital marketing encompasses all  marketing efforts that use an electronic device or the internet .Businesses leverage digital channels such as search engines, and their websites to connect with prospective customers.</p>
                            {/* <a href="#">Read  more</a> */}
                        </div>
                    </div>
                    <div className='Card'>
                        <img src={pic5} alt="" className='Image'/>
                        <div>
                            <h4 className='Title'>CERTIFIED SPECIALIST IN SOFTWARE DEVELOPMENT</h4>
                            <p className='Para'>Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs and improving performance.</p>
                            {/* <a href="#">Read  more</a> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    </div>

 )
}

export default Courses;