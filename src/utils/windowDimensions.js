import { useState, useEffect } from "react"

const getWindowDimensions = () => {
  if (typeof window != undefined) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } else
    return {
      width: 1200,
      height: 1200,
    }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      return setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
