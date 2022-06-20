import Image from 'next/image';
import React from 'react';
import VidShieldImg from '../public/assets/Vidshield.PNG';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={VidShieldImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> VidShield - A Creator platform with Video NFT and Piracy protection</h2>
          <h3>Polygon / Alchemy / Livepeer API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
         <b> The problem VidShield  solves : </b><br />
In current web2 centralized video platforms, a single company owns, operates and censors the whole platform just because of its infrastructure. The platform censors the content and also takes nearly 40% of video revenue from the creator. Basically, any platform is famous due to its creators and not the platform itself. Also, video piracy is a huge issue worldwide. All efforts, money, time and energy get wasted of filmmakers if video gets pirated or stolen. The loss due to video piracy is in billions of dollars.


<b> Solution:</b> <br />
<i> <b>VidShield</b> is an all-in-one platform. </i> <br />

-It is decentralized video platform. It creates a direct relationship between viewer and content creator. There are no user data leaks and ads. Here, viewer can upload video and its thumbnail and subscribed viewers can watch it seamlessly. <br />

-It is video NFT platform where creators can mint Video NFTs and sell them on Opensea marketplace. <br />

-It is one of the best Web3 video players. I have added a core piracy protection feature which itself will save money. Here creators are protected from any kind of video piracy. So, all hard work and sweat of the creator does not get captured by pirates. <br />

-It provides smooth and gasless onboarding experience for viewers and creators in just one click of a button using Biconomy. <br />

-It is content creator platform where we support the creator economy. Whenever a viewer subscribes for a yearly subscription for a creator, creator gets 80% and platform gets 20% of fees. This is advantageous for viewers because they can only see their favorite creators. <br />

-If someone screen records, a reporting platform is also made where a genuine viewer can register a complaint about the pirate and its pirated video. If the report is genuine, the pirate will get blocked and the reporter will get bounty ethers as reward. If we incentivise reporters, piracy will nearly stop. <br />

-It is also NFT Marketplace for viewers to buy NFTs. <br />

<b> Challenges we ran into</b> <br />
The first challenge was technology integrations where most of the errors came. 

<b> Methodology and technology integrations: </b> <br />
a) The video streaming and video NFT is done with the help of Livepeer API. <br />

b) The contract is deployed on Polygon Mumbai testnet. <br />

c) All the NFTs are fetched using Alchemy’s NFT API*. <br />

d) In contract deployment to Polygon, Alchemy’s Endpoint URL is used. <br />

e) User can onboard the platform using gasless onboarding using Biconomy. <br />

f) All the video thumbnails and the reporter’s pirated video is stored on Filecoin IPFS Storage. <br />

g) I was successful in integrating different tech stacks in my application by deeply reading their documentation, trying their hello world projects and joining their discord community(here, most of my errors got solved). <br />

h) My complete dapp with all above technologies and features integrated is deployed on Spheron. <br />

i) I would like to thank : Livepeer, Polygon, Alchemy, Biconomy, Filecoin, Spheron, Moralis for the easy documentation and active community support they provide. <br />

<b> Ideation</b> <br />
The second challenge I faced was ideation. I thought a lot to formulate this solution. <br />

<b> Errors</b> <br />
<i> I got some frustrating errors while making this product. But, no problem, thats the part and parcel of our life.</i> <br />
i) My Truffle crashed while using alchemy. I used optimisation to solve it. <br />
ii) My Livepeer Asset was not uploading from local file. So, I converted video file to Blob. <br />
iii) My Biconomy Gasless Transactions were not working. I saw their discord and put right domainData and domainType. <br />
iv) I also got environment variable and CORS errors while deploying on spheron but solved it by exploring on Internet. <br />

Last but not the least, I have put my heart and soul in this project so that I can add many features so thats why the video is little long. But, I am sure that it will be worth watching this video to understand the solution. <br />

*Note:- First, Alchemy NFT API is called, if URI error from them, then only Moralis NFT API is called. <br />
          </p>
        <Link rel="stylesheet" href="https://vidshield-3eb7ob.argoapp.io/#/" >
        <a target="_blank">
        <button className='px-8 py-2 mt-4 mr-8'>Website</button>
        </a>
       
        </Link>
        <Link rel="stylesheet" href="https://youtu.be/r4jMyfL4ZQI" >
        <a target="_blank">
        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
        </a>
       
        </Link>
          {/* <button className='px-8 py-2 mt-4'>Code</button> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Polygon Mumbai testnet
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Alchemy NFT API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Biconomy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Livepeer API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Filecoin
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Spheron
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
