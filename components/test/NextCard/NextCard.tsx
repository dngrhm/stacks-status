import React, { FC, HTMLAttributes } from "react"
import styles from "../../../styles/Home.module.css"

export interface NextCardProps extends HTMLAttributes<HTMLDivElement> {
  link: string,
  text: string,
  description: string,
}

export const NextCard: FC<NextCardProps> = ({link, text, description}) => (
  <a href={link} className={styles.card}>
    <h2 className='mb-l text-2xl text-orange-500'>{text} &rarr;</h2>
    <p className="m-0 leading-6 text-xl">{description}</p>
  </a>
)
