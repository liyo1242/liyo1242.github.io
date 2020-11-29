import { useReducer, useEffect } from 'react'
import Context from './context'

export default () => {
  console.log('[Main Context Object Re-render]')
  return (
    <div>
      <Context.Provider

      >
        {/* Routes */}
      </Context.Provider>
    </div>
  )
}
