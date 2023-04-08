import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FempureImg from '../public/assets/projects/Fempure.png'
import VidshieldImg from '../public/assets/projects/Vidshield.PNG'
import BAImg from '../public/assets/projects/bookauth.png'
import TYTImg from '../public/assets/projects/TTY.png'
import DDWImg from '../public/assets/projects/ddw.png'
import FFImg from '../public/assets/projects/FF.gif'
import LTImg from '../public/assets/projects/LTImg.png'
import MoonShotImg from '../public/assets/projects/MSImg.png'
import SSImg from '../public/assets/projects/SSImg.png'
import SNFTImg from '../public/assets/projects/SNFTImg.png'
import MSImg from '../public/assets/projects/marrysoul.png'
import ReSciImg from '../public/assets/projects/resci.png'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#005071]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Leaf Track'
            backgroundImg={LTImg}
            projectUrl='https://devfolio.co/projects/leaftrack-5ba7'
          />
          <ProjectItem
            title='StarSocial'
            backgroundImg={SSImg}
            projectUrl='https://devfolio.co/projects/starsocial-f457'
          />
          <ProjectItem
            title='MSImg'
            backgroundImg={MoonShotImg}
            projectUrl='https://web.ethglobal.com/showcase/moonshot-vwzkt'
          />
          <ProjectItem
            title='Future Flows'
            backgroundImg={FFImg}
            projectUrl='https://devfolio.co/projects/future-flows-72c8'
          />
           <ProjectItem
            title='Private_EHT'
            backgroundImg={DDWImg}
            projectUrl='https://github.com/shabbiryk/Private_EHT/tree/main/ehrBlockchain'
          />
          <ProjectItem
            title='Dream Date World'
            backgroundImg={DDWImg}
            projectUrl='https://www.dreamdateworld.com/'
          />
          <ProjectItem
            title='Tag Your Tree'
            backgroundImg={TYTImg}
            projectUrl='https://github.com/meta-ps/tagyourtree'
          />
           <ProjectItem
            title='MarrySoul'
            backgroundImg={MSImg}
            projectUrl='https://marry-soul.vercel.app/'
          />
           <ProjectItem
            title='ReSci'
            backgroundImg={ReSciImg}
            projectUrl='https://re-sci.vercel.app/'
          />
        <ProjectItem
            title='FemPure'
            backgroundImg={FempureImg}
            projectUrl='https://fempure.herokuapp.com/'
          />
          
          <ProjectItem
            title='VidShield'
            backgroundImg={VidshieldImg}
            projectUrl='/VidShield'
          />
          <ProjectItem
            title='BookAuth'
            backgroundImg={BAImg}
            projectUrl='/BookAuth'
          />
          <ProjectItem
            title='SmartNFT'
            backgroundImg={SNFTImg}
            projectUrl='https://ethglobal.com/showcase/smartnft-qzopx'
          />
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
