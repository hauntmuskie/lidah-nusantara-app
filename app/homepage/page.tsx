'use client'

import Typewriter from 'typewriter-effect';

import Navbar from "../components/navbar";
import TopPicks from '../components/top-picks';
import ReviewsSection from '../components/review';
import Link from 'next/link';
import Footer from '../components/footer';

export default function Home() {
  return (

    <main>

      <nav className='z-50 fixed top-0 left-0 w-full'>
        <Navbar />
      </nav>

      <section className='h-screen p-12 xl:p-48 flex flex-col gap-2 justify-center'>

        <h1 className='text-6xl  font-bold p-2 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>
          Mau Masak Apa Hari Ini?
        </h1>

        <div className='text-green-500 text-4xl font-bold shadow-xl p-2 w-72 shadow-green-300 rounded-3xl'>
          <Typewriter
            options={{
              strings: ['Nasi Goreng?', 'Gudeg?', 'Mendoan?', 'Soto Ayam?', 'Rujak Cingur?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className='flex flex-col gap-3 mt-5'>

          <h5 className='bg-[#BDCA4C] p-2 border rounded-full text-white w-32 font-semibold shadow-md'>
            Cari disini =&gt;
          </h5>

          <div className='flex gap-3 items-center'>
            <input type="search" name="search" id="search" className='border-2 rounded-full p-2 px-3 w-full shadow-md' />
            <Link href='' className='transition-all scale-105 hover:text-yellow-600 shadow-md p-2 rounded-full'>=&gt;</Link>
          </div>

        </div>
      </section>

      <section id='top__picks' className='flex justify-center items-center bg-white border-2 rounded-t-3xl border-b-0'>

        <div className=''>
          <h1 className='text-4xl font-bold text-center m-5 text-[#FFFF] bg-[#15F968] border shadow-xl rounded-full p-2'>Pilihan Teratas</h1>
          <TopPicks />
        </div>

      </section>

      <section className='p-10'>
        <ReviewsSection />
      </section>

      <footer>
        <Footer copyrightYear={2023} />
      </footer>

    </main>
  )
}