import React, { FC } from "react"

export interface ProgressBarProps {
  label?: string,
  percent?: number,
}

export const ProgressBar: FC<ProgressBarProps> = ({label = '', percent = 0}) => (
  <div className="w-full bg-gray-200 rounded-full">
    <div 
      className="bg-primary-600 text-primary-50 text-xs text-center font-medium p-1 leading-none rounded-full truncate"
      style={{width: `${percent}%`}}
    >
      {label}
    </div>
  </div>
)
