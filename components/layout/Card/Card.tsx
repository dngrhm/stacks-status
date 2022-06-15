import React, { FC, HTMLAttributes } from "react"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
}

export const Card: FC<CardProps> = ({children}) => (
  <div className="bg-white overflow-hidden shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      {children}
    </div>
  </div>    
)
