import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myphotu from '../public/assets/myphotu.jpg';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>
             I am not your average developer
          </p> */}
          <p className='py-2 text-gray-600'>
          
           -Co-founded <span className='tracking-widest text-[#5651e5]'><a href="https://www.dreamdateworld.com/">Dream Date World</a></span>, an immersive cross-chain dating metaverse. 
           <br /> -Been in crypto for over 3 years now, closed 7 partnerships with  web3 protocols as of March 2023.
           <br /> -Community person at Chainlink, organized 20+ meetups in Pune/Mumbai region
           <br />  -Spoke on 7-panel discussions, and talked about Oracles, DeSci and ZK commitments at Eth conferences.
          <br /> -An experienced Full Stack Developer with a history of working in the Financial Service Industry.
           <br /> -Competent in React Js/Next JS, Kubernetes (Certified Kubernetes application developer), Docker, <br /> &nbsp;  Azure, AWS and blockchain (Hyperledger Fabric).
           <br />-BTech in Computer Science and Engineering Specialization in Cloud Computing from Pune University.
           <br />-Hyperledger Fabrics and Zero Knowledge tech (zk-Snarks/Starks) are two of my strongest areas.
           <br /> -Worked on projects across public blockchains such as Solana, Ethereum, Aptos and Substrates.
           <br />Currently, I am fascinated by blockchain technologies and interested in solutions to consensus problems for crypto project
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing. 
            Currently, I’m focused on building responsive front-end web applications while writing 
            smart contracts/canisters.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image
                  src={myphotu}
                  alt='/'
                />
        </div>
      </div>
    </div>
  );
};

export default About;
