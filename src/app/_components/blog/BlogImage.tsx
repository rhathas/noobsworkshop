"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { getImageProps } from "next/image"
import { clsx } from "clsx"
import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer"

type Transform = {
  scale: number
  translateX: number
  translateY: number
}

const scrollOffset = 40

export const BlogImage = ({ src, alt }: ExportedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const zoomed = useRef(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const [transform, setTransform] = useState<Transform | null>(null)
  const scrollRef = useRef<number>(0)

  const closeZoom = useCallback(() => {
    zoomed.current = false
    setTransform(null)
  }, [])

  const openZoom = useCallback(() => {
    if (zoomed.current) {
      closeZoom()
      return
    }
    const { width: naturalWidth, height: naturalHeight } = getImageProps({ src, alt }).props
    if (!naturalWidth || !naturalHeight) return

    zoomed.current = true
    if (!containerRef.current || !imageRef.current) return

    const { width, height, left, top } = containerRef.current.getBoundingClientRect()
    const scaleX = Math.min(window.innerWidth, naturalWidth) / width
    const scaleY = Math.min(window.innerHeight, naturalHeight) / height
    const scale = Math.floor((Math.min(scaleX, scaleY) + Number.EPSILON) * 10) / 10
    const translateX = ((window.innerWidth - width) / 2 - left) / scale
    const translateY = ((window.innerHeight - height) / 2 - top) / scale
    scrollRef.current = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    setTransform({ scale, translateX, translateY })
  }, [alt, closeZoom, src])

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (Math.abs(scrollRef.current - currentScroll) > scrollOffset) {
      setTimeout(closeZoom, 150)
    }
  }, [closeZoom])

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key || event.keyCode
      if (key === "Escape" || key === "Esc" || key === 27) {
        closeZoom()
      }
    },
    [closeZoom],
  )

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [handleKeyUp, handleScroll])

  const translate = transform ? `translate3d(${transform.translateX}px, ${transform.translateY}px, 0)` : ""

  return (
    <>
      {transform && (
        <div
          className={"fixed left-0 top-0 z-30 size-full cursor-zoom-out bg-zinc-900/90 duration-300"}
          onClick={closeZoom}
        />
      )}
      <div
        className={clsx(transform && "z-40", "relative my-4 aspect-video w-full transform-gpu duration-300")}
        style={
          transform
            ? {
                scale: transform.scale,
                transform: translate,
              }
            : {}
        }
        ref={containerRef}
      >
        <ExportedImage
          src={src}
          alt={alt}
          fill
          className={clsx(
            transform ? "cursor-zoom-out" : "cursor-zoom-in",
            `
              m-0 object-contain
              lg:m-0
            `,
          )}
          onClick={openZoom}
          ref={imageRef}
          unoptimized={!!transform}
          sizes={
            "(min-width: 1024px) 960px, (min-width: 768px) 736px, (min-width: 640px) 608px, " +
            "(min-width: 480px) 448px, 100vw"
          }
        />
      </div>
    </>
  )
}
