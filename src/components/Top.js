import React from 'react'
import family from '../images/famillly 1.png'
import frame1 from '../images/Frame 23190.png'
import frame2 from '../images/Frame 23191.png'
import frame3 from '../images/Frame 23192.svg'
import system from '../images/System.svg'
import life from '../images/Life.svg'
import overall from '../images/Overall Savings.svg'
import avg from '../images/avg.svg'
import one from '../images/one.jpg'
import circle1 from '../images/circle.png'
import circle2 from '../images/Frame 73.png'
import { useNavigate } from 'react-router-dom'
import trust from '../images/truste.jpg'
import phn from '../images/Fill 1.svg'

const Top = () => {
    const navigate=useNavigate()
    function nav(){
        navigate("/successstories")
    }
  return (
    <>
    <div className='topper'>
    
      <div className='innertopper'>
        <div className='toptext'>
            <div className='innertext'> <span className='inner2text'> Customer</span><br className='break'/>
            <span>Project Profiles</span></div>
           
<p>
View our vast portfolio of solar PV projects. Electrum customers have shared their profiles of their projects, which include: photos, reviews, savings information, and more. This should give you an extensive overview of what #hassle-free solar looks like!
</p><br/><p>Want to be featured below? <span className='specificword'>Build</span> your own Customer Project Profile today.</p>
        </div>
       
         
        <img src={family} className='topimg' alt="hi"/>
        
    </div>
    <div className='side'>
        <div className='sidebar'> 
        <ul className='sidenav'>
        <li><button className='btn4'>Get Started</button></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Installers</a></li>
        <li><a href='#'>Sign In</a></li>
        <div className='ligroup'><li><img src={phn} alt="hi"/></li><li className='phn'>888-454-9979</li></div>
       </ul>
        </div>
      </div>
    </div>
    <div className='outersection1'>
    <div className='section'>
    <p style={{textAlign:'center',fontWeight: '700',
fontSize: '40px'}}>Success <span style={{fontWeight:'normal'}}>Stories</span> </p><br/>
       <p style={{textAlign:'center',fontWeight: '400',
fontSize: '14px',color: 'rgba(102, 102, 102, 0.98)'}} className='upperpara'>See what our customers have to say about their journey with us</p>
       
        <header className='container1 topcontainer'>
        
          <img src={one}alt='hello' className='image'/>
          
          <div className='text'>
            <p style={{fontWeight:'bold'}}>Shumin Z.</p>
            <p style={{fontSize:'14px',color: '#666666',fontWeight: '400',marginTop:'8px',marginBottom:'24px'}}>Los Altos, California</p>
            
            <p style={{fontSize:'16px'}}>Electrum is really great! Putting up solar panels is not something you do often. Electrum was very helpful in sharing their knowledge and getting me very comfortable in making my decisions on lease versus own, what type of installer, and what to look for in quality. Really great service!</p>
          </div>
        </header>

        
            <div className='boxes'>
             
            <div className='box'>
              <img src={system} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>System Overview</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>9.45kW</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>25x SolarWorld280Mono Plus</span>
            </div>

            <div className='box'>
            <img src={avg} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Avg. Monthly Electric Bill</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Before Solar: $250</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>After Solar: $0</span>
            </div>
           
           
             
            <div className='box'>
            <img src={overall} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Overall Savings</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Annual Savings: $4,588</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Lifetime Savings: $114,689</span>
            </div>

            <div className='box'>
            <img src={life} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Lifetime Environmental Impact</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>CO2 Offset: 315,000 lbs</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Equivalent to 349,344 miles driven</span>
            </div>
            
            
            
            </div>
            <div className='circles'>
              <div className='circle'>
           <img src={circle1} alt="hi"/>
            <img src={circle2} alt="hi" className='circle2' onClick={nav}/>
            </div>
           <p className='viewall'>View All Stories</p>
           </div>
        
    </div>
    </div>
    <div className='trust'>
        <div className='trusting'>
            <div className='trusttext'>
                <span className='trusttext1'>Trusted by thousands of</span>
                <span className='trusttext2'>our customers</span>
            </div>
            
            <div className='innertrust'>
            <img src={trust} className='truste'/>
            <div className='firstbottomtext'>
                <span className='upper'>Everyone was easy to work with and kept us informed the entire project. Great job. We are extremely pleased!!</span>
                <br/>
                <span className='jill'>Jill Anne.</span>
                <br/>
                <span className='los'>Los Alamitos, CA</span>

            </div>
            <div className='firstbottomtext1'>
                <span className='upper'>Very professional, efficient and experienced crew.</span>
                <br/>
                <span className='jill'>Michael Grabowski</span>
                <br/>
                <span className='los'>Yorktown Heights, NY</span>

            </div>
            <div className='firstbottomtext2'>
                <span className='upper'>Very professional, efficient and experienced crew.</span>
                <br/>
                <span className='jill'>Michael Grabowski</span>
                <br/>
                <span className='los'>Yorktown Heights, NY</span>

            </div>

         </div>
         </div>
    </div>
    </>
  )
}

export default Top