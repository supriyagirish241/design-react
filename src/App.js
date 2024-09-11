import React from 'react';
import './App.css';
import Header from './components/header';
import Button from './components/button';
import Description from './components/description';
import TextImg from './components/TextImg';
import About from './components/about';
import Head from './components/head';
import Funnel from './components/funnel';
import Card from './components/card';
// import img from './assets/image/logo.svg';
import Ques from './components/Ques';
import Footer from './components/footer';
import image1 from './Assets/Ig.png';
import image2 from './Assets/im1.avif';
import image3 from './Assets/image.png';
// import Calendly from './components/Calendly/calendly';

// import img from './assets/logo.svg';// Import image2 after Button


function App() {
  // let isButtonClick = false;
  return (
      <React.Fragment>
        <div className='container'>
        <div className='card-container'>
    {/* <div className='.indpro-text' style={{marginLeft:'461px', fontSize:'34px', fontWeight:'bolder',Fontfamily:'sans-serif'}}>INDPRO.IO</div>
    {/* Other card content goes here */}

          

          
          <div> 
            
            <Header />
          
          </div>
          
          <div>
            
              <Button />
            
          </div>
          <div>
          <img src={image2} alt="" style={{ width: '1226px', height: '350px', marginLeft: '385px', padding: '84px' }} />

          </div>

           
          <div>
          
              <Description />
            
          </div>
          <div>
          
              <TextImg
                image={image1}
                title="Call To Action (Without Distractions)"
                description="Whether you are driving organic or paid traffic, you can send your audience to a spot that leads them to take a specific action (without the distractions of a traditional website)."
                flexDirection="row"
                Width="522px"
                
              />
            
              <TextImg
                image={image1}
                title={"Generate Leads Fast"}
                description={
                  <div>
                    Our landing pages make it easy for you to grow your email list with new subscribers.
                    The more visitors you turn into leads, the faster you can turn them into
                    paying customers. In turn, you'll generate more money for your business!
                    <br />
                    Grow your audience effortlessly with opt-in pages, lead magnets, event
                    registrations, and more.
                  </div>
                }
                flexDirection="row-reverse"
                Width="527px"
                

              />
            
              <TextImg
                image={image1}
                title="Skyrocket Your Sales"
                description="Watch your sales increase to new heights with our well customized, drag and drop landing pages! Optimize your online business with subscriptions, one-time offers, upsells, order bumps, and other high-converting, simplified landing pages variations."
                flexDirection="row"
                Width="530px"
               
              />
            
              <TextImg
                image={image1}
                title="Nurture Your Audience"
                description={
                  <div>
                    Send your audience to landing pages where you provide value and training, so that they continue to know, like, and trust you…and see you as a go-to authority.<br />
                    You can send them to a page to watch a training, download a bonus, attend a webinar or online event, and more!"
                  </div>
                }
                flexDirection="row-reverse"
                Width="548px"
                
              />
            
          </div>
         
          <div>
            <About 
             image={image3} 
             title="What Real Customers Say About Indpro" 
             description="“I have a painting company, and I wanted to only market
             in certain towns. It’s a blessing to be able to say that I
             want this type of client, in this market, and I want them
             to see this ad, and buy this service. And, that’s what
             ClickFunnels with Facebook Ads can do for a local
             service business.”
             "
             by="— Yanni Fikaris, Verified Indpro Landing Page User"/>
          </div>
             
          <div>
            <Head />
          </div>
          <div> 
             <Funnel /> 
            
           </div>   
          
          <div>
            <Card />
          </div>
           
          <div>
            
              <Ques />
            
          </div>
          <div>
            
            <Footer />
          
        </div>
          {/* <div>
      
      <Calendly />
    </div> */}
         
       </div>
        
         

       </div>
        
      </React.Fragment>
   
  );
}

export default App;
