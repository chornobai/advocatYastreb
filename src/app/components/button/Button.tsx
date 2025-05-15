import React, { ComponentProps } from 'react'
import clsx from 'clsx'
import s from './Button.module.scss'
import { Slot } from '@radix-ui/react-slot'

type Props = {
  asChild?: boolean
  variant?: 'primary' | 'secondary'| "icon"

} & ComponentProps<'button'>

 const Button = ({ className, variant = 'primary', asChild, ...props }: Props) => {
  const style = clsx(s.button, s[variant], className)
  const Component = asChild ? Slot : 'button'
  return <Component {...props} className={style} />
}
export {Button}
