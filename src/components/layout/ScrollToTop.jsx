import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const previousScrollRestoration = window.history.scrollRestoration
      window.history.scrollRestoration = 'manual'

      return () => {
        window.history.scrollRestoration = previousScrollRestoration
      }
    }
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    // Force each route to start from the first section instead of preserving
    // the previous page's viewport offset.
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)

    const frame = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })

    return () => {
      window.cancelAnimationFrame(frame)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname])

  return null
}
