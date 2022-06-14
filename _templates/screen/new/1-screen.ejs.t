---
to: screens/<%= dir %>/<%= name %>/<%= name %>.tsx
---
import React, { FC, HTMLAttributes } from "react"

export interface <%= name %>Props extends HTMLAttributes<HTMLDivElement> {
}

export const <%= name %>: FC<<%= name %>Props> = ({children}) => (
  <div>
    {children}
  </div>
)
