import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../navbar/hd-logo.png';

const page = () => {
  return (
    <nav className='rubik'>
    <Image
    src={Logo}
    alt='Helpdesk logo'
    width={70}
    quality={100}
    placeholder='blur'
    />
        <Link href="/"><h1>Helpdesk</h1></Link>
        <Link href="/" >Dashboard</Link><br />
        <Link href="/tickets">Tickets</Link>
        {/* <Link href="/news">News</Link> */}
    </nav>
  )
}

export default page;