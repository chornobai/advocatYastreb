
import s from './NoAvatar.module.scss'
import { clsx } from 'clsx'
import {Avatar} from "@/app/ui/icons/Avatar";

type Props = {
  className?: string
}

export const NoAvatar = ({ className }: Props) => {
  return (
    <div className={clsx(s.no_avatar, className)}>
      <Avatar />
    </div>
  )
}
