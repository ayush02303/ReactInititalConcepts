import React from 'react'

export const MemoSecond = React.memo(() => {
  return (
    <div>
      <h1>I got called</h1>
    </div>
  )
})

// export default React.memo(MemoSecond)
