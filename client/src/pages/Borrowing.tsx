import CardDivider from "../components/CardDivider"
import UserIcon from "../components/UserIcon"
import TheTables from '../components/TableForBorrowing'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Students() {
  const [borrowing, setBorrowing] = useState<any[]>([]);
  useEffect(() => {
    fetch('/borrowing')
      .then(response => response.json())
      .then(data => setBorrowing(data))
  }
  , [])

  return (
    <main className="p-7 bg-background h-screen">
      <nav className="flex justify-between">
        <h1 className="text-2xl text-black font-semibold tracking-tight">Library Management System</h1>
        <UserIcon/>
      </nav>
      <section className="mt-5 flex text-white">
        <aside className="md:w-96 *:mb-5">
          <div className="text-black *:w-full *:text-left *:block *:p-3 *:rounded-lg">
            <Link to="/" className='shadow-sm hover:bg-white hover:text-blue-600 hover:scale-105 hover:shadow-sm'>
              🎓&nbsp;&nbsp;Students
            </Link>
            <Link to="/books" className='shadow-sm hover:text-blue-600 hover:scale-105 hover:shadow-sm'>
              📓&nbsp;&nbsp;Books
            </Link>
            <Link to="/borrowing" className='bg-blue-200 scale-105 shadow-sm hover:text-blue-600 hover:scale-105 hover:shadow-sm'>
              🖐&nbsp;&nbsp;Borrowing
            </Link>
          </div>
          <CardDivider/>           
        </aside>
        <article className="ml-7 pt-7 px-5 bg-white h-full w-full drop-shadow-lg rounded-2xl *:mb-5">
          {/* <DropdownWIcon /> */}
          <TheTables data={borrowing}/>
        </article>
      </section>
    </main>
  )
}
