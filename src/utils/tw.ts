import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function tw(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}
