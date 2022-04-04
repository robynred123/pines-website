import { useState, useEffect } from "react"

export const isBrowser = () => typeof window !== "undefined"

const getWindowDimensions = () => {
  if (isBrowser()) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } else
    return {
      width: 960,
      height: 1200,
    }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleResize = () => {
      return setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
