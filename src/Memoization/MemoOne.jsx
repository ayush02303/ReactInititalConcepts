// demonstrating React.Memo() hook in React

import React from 'react'
import {MemoSecond} from './MemoSecond'

const MemoOne = () => {
  return (
    <div>
      <h1>He!</h1>
      <MemoSecond/>
    </div>
  )
}

export default MemoOne
