import React from 'react'

function Header() {
  return (
    <header className=' my-11 lg:my-8 md:py-8 lg:py-0' id='head'>
        <div className="container mx-auto flex items-center justify-end">
          <a href="http://michyking.com/wp-content/uploads/2023/03/michy-portfolio.pdf">
          <button className="btn btn-sm text-[15px]">See my Resume</button>
          </a>
        </div>
    </header>
  )
}

export default Header