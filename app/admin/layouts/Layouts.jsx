import React from 'react'
import Sidebar from './sitebar/Sidebar'
import Topbar from './topbar/Topbar'

function Layouts() {
  return (
    <div>
      <div className="wrapper">

        {/*sidebar wrapper */}
        <Sidebar></Sidebar>
        {/*end sidebar wrapper */}

        {/*start header */}
        <Topbar></Topbar>
        {/*end header */}

      </div>
    </div>
  )
}

export default Layouts