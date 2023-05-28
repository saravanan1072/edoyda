import React,{useState} from 'react'
import background from '../images/Back Ground.png';
import one from '../images/Vector (1).png'
import one1 from '../images/Vector (6).png'
import one2 from '../images/Vector (7).png'
import one3 from '../images/Vector (8).png'
import two2 from '../images/Vector (3).png'
import two1 from '../images/Vector (4).png'
import three from '../images/Vector (9).png'
import four1 from '../images/Vector (10).png'
import four2 from '../images/Vector (12).png'
import four3 from '../images/Vector (2).png'
import four4 from '../images/Vector (13).png'
import four5 from '../images/Vector (14).png'
import five from '../images/Rectangle 2713.png'
import formpic from '../images/Vector (16).png'
import razor from '../images/Frame 12537 (1).png'







export default function Container() {
  const [data,setData]=useState("149");

  const handle6month=()=>{
    setData("229")
  }
  const handle12month=()=>{
    setData("149")
  }
  const handle3month=()=>{
    setData("299")
  }
  
  return (
    <div className='c-body'>
    <img id='body' src={background} alt='background images' />

    <div className='flex'>
        <div className='child'><span className='heading1'>
        <span className='text1'>Access curated courses worth</span> <br/> 
        <span className='text2'>₹ <span className='text3'>18,500</span> </span>
          at just
        <span className='text4'> ₹ 99 </span>
         per year!
        </span> <br/> <br/> 
        <div className='main1'>
        <img src={one} alt='one'/>
        <div >
        <img className='inside1' src={one1} alt='two'/>
        <img className='inside2' src={one1} alt='two'/>
        <img className='inside3' src={one1} alt='two'/>
        <img className='inside4' src={one1} alt='two'/>
        <img className='inside5' src={one2} alt='three'/>
        <img className='inside6' src={one2} alt='three'/>
        <img className='inside7'src={one2} alt='three'/>
        <img className='inside8' src={one2} alt='three'/>
        <img className='inside9' src={one3} alt='three'/>
        <span className='inside10'><span className='text5'>100+</span> Job relevant courses </span>
        </div>
        </div> <br/>
        <div className='main1'> <img src={two1} alt='one'/>
        <div className='insidetwo'><img src={two2} alt='one'/>
        <span className='in '><span className='text5'>20,000++ </span>Hours of content</span>
        </div>
        </div>
        <br/>
        <div className='main1'> <img src={three} alt='one'/>
        <div className='insidethree'>live
        <span className='in '><span className='text5'>Exclusive </span> webinar access</span>
        </div>
        </div>
        <br/>
        <div className='main1'> <img src={four1} alt='one'/>
        <div className='insidefour'>
          <img className='insidefour1' src={four2} alt='one'/>
        <img className='insidefour2' src={four3} alt='one'/>
        <img className='insidefour3' src={four4} alt='one'/>
        <img className='insidefour4' src={four5} alt='one'/>
        <span className='four'>Scholarship worth<span className='text5'> ₹94,500 </span></span>
        </div>
        </div>

        <br/><br/>
        <div className='main1'> <img src={two1} alt='one'/>
        <div className='insidefour'><span className='middle'>ADS</span>
          <img className='insidefive1' src={five} alt='one'/>
        
        <span className='four'><span className='text5'>Ad Free </span> learning experience </span>
        </div>
        </div>
        </div>


        <div className='child child2'> 
        <form>
<div className='background'>

<div className='signup-box'>
   <div className='signup-button'> <button className='but'> 1</button>Sign Up</div>
   <div className='subscription-button'> <button className='but'> 2</button>Subscribe</div>
</div>

<div className='heading'><h2>Select your subscription plan</h2></div>
 
 <div className='months12-offerExpired'>

    
     <div className='top1'>Offer expired</div>
     
     <input type = "radio" value ="12months" name = "subscription"  id='subscription' className = "label12" disabled />
     <label htmlFor="subscription"className = "label12"> 12 Months Subscription</label>
 <span className='total1'>Total <span className='no1'>₹99</span></span>
 <div className='rupees1'>₹8 /mo</div>
 </div>


 <div className='months12'>
 <div className='top2'>Recommended</div>
<input type = "radio" value ="12months" name = "subscription" id='subscription12' className = "label13"  onClick={handle12month} checked/>
     <label htmlFor="subscription12"className = "label13"> 12 Months Subscription</label>
 <span className='total3'>Total <span className='no3'>₹179</span></span>
 <div className='rupees3'>₹15 /mo</div>
 </div>

<div className='months6'>
<input type = "radio" value ="12months" name = "subscription" id='subscription6' className = "label12" onClick={handle6month}/>
     <label htmlFor="subscription6"className = "label13"> 6 Months Subscription</label>
 <span className='total3'>Total <span className='no3'>₹149</span></span>
 <div className='rupees3'>₹25 /mo</div>
</div>

<div className='months3'>
<input type = "radio" value ="12months" id='subscription3' name = "subscription" className = "label13" onClick={handle3month} />
     <label for="subscription3"className = "label13"> 3 Months Subscription</label>
 <span className='total3'>Total <span className='no3'>₹99</span></span>
 <div className='rupees3'>₹33 /mo</div>
</div>

 <div className='subscription-fee'>
    Subscription fee<span className='fee'>₹18,500</span>
 </div>

<div className='limited-offer'>
    Limited time Offer <span className='limit'>₹-18,401</span>
    <div className='valid'><img src={formpic} className='formpic' alt='form' />Offer valid till 25th March 2023</div>
</div>

<div className='total-cost'>
    Total<span className='total'>(Incl. of 18% GST)</span>
    <span className='cost'>{`₹${data}`}</span>
</div>

 <div className='payment'>
    <div className='cancel'><button className='button1'>Cancel</button></div>
    <div className='proceed'><button className='button2'>proceed to pay</button></div>
 </div>

<div className='logo-last'><img src={razor}  alt='form' /> </div>      

</div>
</form>

        </div>
    </div>
    </div>
  )
}
