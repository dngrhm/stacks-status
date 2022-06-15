import React, { FC, HTMLAttributes } from "react"
import Image from "next/image"
import logo from "../../../images/stacks-stx-logo.svg"

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  status?: string,
  version?: string
}

export const PageHeader: FC<PageHeaderProps> = ({version = '...', status = 'loading...', children}) => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
    <div className="flex items-center space-x-5">
      <div className="flex-shrink-0">
        <div className="relative">
          <Image
            className="h-32 w-132 rounded-3xl"
            src={logo}
            alt="Stacks Logo"
          />
          <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-lime-500">	• {status}</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">Stacks Node</h1>
        <p className="text-sm font-medium text-gray-500">ver. {version}</p>
      </div>
    </div>
  </div>
)
