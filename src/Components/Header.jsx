import React from 'react'

function Header() {
  return (
    <header className=' my-11 lg:my-8 md:py-8 lg:py-0' id='head'>
        <div className="container mx-auto flex items-center justify-end">
          <button className="btn btn-sm text-[15px]">Online Resume</button>
        </div>
    </header>
  )
}

export default Header