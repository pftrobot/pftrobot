import { useEffect, useState } from 'react'

export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export const lockScroll = () => {
  const scrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
}

export const unlockScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}

type TRandomNumber = (min: number, max: number) => number

export const randomNumber: TRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
