import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>news!</h1><br />
        <Link href="/news/latest"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Latest news</button></Link>
    </div>
  )
}

export default page;