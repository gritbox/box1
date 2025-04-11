// components/custom/Callout.tsx

import React from 'react'
import clsx from 'clsx'

interface CalloutProps {
  type?: 'info' | 'warning' | 'success'
  children: React.ReactNode
}

export const Callout: React.FC<CalloutProps> = ({ type = 'info', children }) => {
  const baseStyle = 'border-l-4 p-4 my-4'
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
    success: 'bg-green-50 border-green-400 text-green-800',
  }

  return (
    <div className={clsx(baseStyle, styles[type])}>
      {children}
    </div>
  )
}