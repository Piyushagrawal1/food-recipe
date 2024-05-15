import Link from 'next/link'
import React from 'react'

const notfound = () => {
  return (
    <div>
          <h1>This page can not be found</h1>
          <Link href={'/'}>
            Go to Home
          </Link>
    </div>
  )
}

export default notfound