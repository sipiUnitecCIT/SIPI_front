import Unitec from '@icons/Unitec'
import React from 'react'
import Anchor from './Anchor';

const SideBar = () => {
  return (
    <aside className="SideBar">
      <nav>
        <Anchor href="/">
          <Unitec size="37"/>
        </Anchor>
      </nav>
    </aside>
  )
}

export default SideBar;