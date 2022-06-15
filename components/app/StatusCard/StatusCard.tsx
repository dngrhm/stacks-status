import React, { FC, HTMLAttributes } from "react"
import { Card } from "../../layout"
import { ProgressBar } from "../../status"

export interface StatusCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string,
  percent?: number,
  description?: string,
}

export const StatusCard: FC<StatusCardProps> = ({title = '', percent = 0, description = '', children}) => (
  <Card>
    <h4 className="sr-only">{title}</h4>
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <div className="text-4xl font-black">{percent.toFixed(2)}%</div>
    </div>
    <div className="mt-6" aria-hidden="true">
      <ProgressBar percent={percent} />
      <div className="block text-sm font-medium text-gray-600 mt-6">
        {description}
      </div>
    </div>
    {children}
  </Card>
)
