import Image from 'next/image';
import React from 'react';
import BAImg from '../public/assets/projects/bookauth.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
const BookAuth = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={BAImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'></h2>
          <h3>Polygon/ IPFS/ Superfluid</h3>
          <Link href='https://openstore.cf/'><button className='px-8 py-2 mt-4 mr-8'>Visit</button></Link>
          
          <Link href='https://github.com/shabbiryk/BookAuth'><button className='px-8 py-2 mt-4'>Code</button></Link>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2> <br />
          <div>
         <i> A NFT marketplace for e-Book. Here, Authors can self publish books. Readers can buy or sell books while compensating the author on every exchange transaction.</i>
<br /> <br />
<p>
<b>Our Vision</b> <br /> <br />
We firmly believe that Internet has not just made information sharing smooth and easy but also have promoted people to self-learn from online resources. Among these resources, Wikipedia is a wellspring of information and YouTube being a quick-learn companion. But books not just provide information or short-time learnings but alleviate gaining expertise and thus are more impactful overall.
</p>
<br />

<p>
<b>Our Mission</b> <br /> <br />
To further promote self-learning, by making quality books accessible and cheap for all. Smart phones are integral part of present human life and thus we want to leverage it for reading eBooks and saving trees by reducing paper books.
</p> <br />

<p>
<b>What we provide as of now?</b> <br /> <br />
Authors can self publish books, even anonymously, having all freedom and no censorship over the content. Publisher can easily control market supply, update book price, add sequels or new editions, and can withdraw revenue or split it amongst the contributors. Also, they receive specified royalty as compensation for every exchange transaction. Books can also be distributed for free, either to publicize or as a donation.
</p> <br />

Readers can buy directly from Authors. As the books can be self-published, authors can earn better even by selling books at cheaper prices. Readers can sell books which are less likely to be read again in future, and regaining most of the book cost. Readers get an inbuilt native ebook reader and does not require to use any other dedicated software.
<br />
If readers want to save books for future reads, they can still generate revenue in realtime by putting books on rent. This allows other readers to read books at relatively lower prices without purchasing.
<br />



<div>
<h1>Our Roadmap</h1> <br />
<b>Implemented :</b> <br /> 
<ul >
  <li>-Authors/Publisher can (self)publish Books</li>
  <li>-Free distribution of books by publisher</li>
  <li>-Readers buy books from Authors</li>
  <li>-Readers can buy/sell books on Exchange</li>
  <li>-Native Book Reader</li>

</ul>



<b>Under Development:</b>
<ul>
  <li>-Renting Books using Superfluid CFA</li>
  <li>-Support for revenue distribution using Superfluid IDA</li>
  <li>-Author&apos;s dashboard and profile</li>
  <li>-Searching and Filtering for Books and Authors</li>

</ul>
</div>

          </div> 
         
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Alchemy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ganache
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Metamask
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IPFS
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

export default BookAuth;
