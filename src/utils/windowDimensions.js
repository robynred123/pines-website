import { useState, useEffect } from "react"

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const useWindowDimensions = () => {
  if (typeof window === "undefined") {
    return {
      width: 1200,
      height: 1200,
    }
  } else {
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
}
