import img1 from '../Styles/Images/download.jpeg';
import img2 from '../Styles/Images/Tanishq-Diwali-Campaign.jpg';
import React ,{useRef} from 'react'
import styles from '../Styles/FrontPage.module.css'
import { useState ,useEffect } from 'react';
const FrontPage = () => {

  // closing Ad
  
  const Images = [img1, img2];
  const [btn,isbtnvisble]=useState(true);
  const [imageIndex, setImageIndex]=useState(0);
  const intervalRef = useRef();
  useEffect(() => {
   
     intervalRef.current = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);
  const closeAd=()=>{
    isbtnvisble(!btn);
  }



  const scrollContainerRef=useRef(null);
  const scrollLeft=()=>{
    if(scrollContainerRef.current)
    {scrollContainerRef.current.scrollBy({left:-100 , behavior:"smooth"})}
  };
  const scrollRight=()=>{
    if(scrollContainerRef.current)
    {
      scrollContainerRef.current.scrollBy({left:100 , behavior:"smooth"})
    }
  }
  return (
    <>
    <div className={styles.topDiv} >
   
      <div className={styles.entertainment}>
        <h6>ENTERTAINMNET</h6>
        <h3>Is perfectionism just procrastination in disguise?</h3>
        <p>What separates struggling artists from successful ones? Looking to creative geniuses like Mozart, Edison and Monet, video creator Jon Youshaei explains why aiming to be prolific — despite flops and failures along the way — is the key to unlocking your creative success.</p>
       
      </div>
      
       <div className={styles.iframe}>
       <img
      src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/talks/talk_143892/6ff0ba2c-757b-42ee-8067-32aefa6939bb/JonYoushaei_2024N-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=1080?w=1080&q=80"
      alt="Jon Youshaei"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />


       </div>
    </div>
    <hr />
    <div className={styles.videos}>
        <div>
          <img src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/talks/talk_143076/eba5215f-bae7-4bac-911b-72f711573173/JennyChase_2024T-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=1080?w=1080&q=80" alt="" />
          <p>CLIMATE CHNAGE</p>
          <h6>Solar Energy is even cheaper than you think</h6>
        </div>

        <div>
          <img src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/talks/talk_143986/409b3d60-58f8-4649-a2fe-c709f712f0d8/TEDExplains_Episode_Thumbnail_Risks-2025.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=1080?w=1080&q=80" alt="" />
          <p>GLOBAL ISSUES</p>
          <h6>the Biggest Global Risk</h6>
        </div>

        <div>
          <img src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/e828c8be-d054-4539-981f-5cb5b2fbbabc/JulieannaLRichardson_2021X-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=1080?w=1080&q=80" alt="" />
          <p>CULTURE</p>
          <h6>Mission to safeguard Black History in the US</h6>
        </div>

        <div>
          <img src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/9aea606e-f882-4c02-9c05-229867cb0b8c/AlexandrWang_2023-embed.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=80&w=1080?w=1080&q=80" alt="" />
          <p>TECHNOLOGY</p>
          <h6>WAR, AI and Global arms race</h6>
        </div>

        
    </div>

    <div className={styles.discover}>
      <h2>Discover</h2>
      <div className={styles.scrollButtons}>
        <button onClick={scrollLeft}>{"<"}</button>
        
      </div>
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <a href="">Psychology</a>

        <a href="">Leadership</a>
        <a href="">Education</a>
        <a href="">AI</a>
        <a href="">Mental Health</a>
        <a href="">Communication</a>
        <a href="">Personal Growth</a>
        <a href="">Sports</a>
        <a href="">Health</a>
        <a href="">Language</a>
        
      </div>
      <div className={styles.scrollButtons}>
        
        <button onClick={scrollRight}>{">"}</button>
      </div>
    </div>

    <div className={styles.Ads}>
      <p>TED is supported by ads and partners</p>
    
     <div className={styles.imageContainer}>
      { 
      btn?(<>
        <div className={styles.managebtn}> <button>i</button> <button onClick={closeAd}>x</button>
        </div>
             <img src={Images[imageIndex]} alt="Ads" />
             </>)
             : (<>
                   <div>
                    <h3>Ads by Google</h3>
                    <button>Stop seeing this ad</button> <button>Why this ad?</button>
                   </div>
             </>)
      }
     

         
     </div>
      
    </div>
  </>
  )
}

export default FrontPage
