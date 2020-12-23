import React from 'react'
import { FcCancel } from 'react-icons/fc'
import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props}/>
      <span className={Styles.status}><FcCancel/></span>
    </div>
  )
}

export default Input
