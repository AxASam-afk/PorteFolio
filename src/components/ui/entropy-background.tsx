'use client'

import * as React from "react"
import { Entropy } from "@/components/ui/entropy"

type Props = {
  className?: string
  /**
   * Facteur d’échelle (ex: 1 = taille du conteneur, 1.25 = un peu plus grand pour éviter les bords).
   */
  scale?: number
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function EntropyBackground({ className, scale = 1.1 }: Props) {
  const hostRef = React.useRef<HTMLDivElement | null>(null)
  const [size, setSize] = React.useState(400)

  React.useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const ro = new ResizeObserver(() => {
      const rect = host.getBoundingClientRect()
      const next = Math.ceil(Math.max(rect.width, rect.height) * scale)
      setSize(clamp(next, 320, 1400))
    })

    ro.observe(host)
    return () => ro.disconnect()
  }, [scale])

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      <div className="absolute inset-0 grid place-items-center">
        <Entropy className="pointer-events-none opacity-70" size={size} />
      </div>
    </div>
  )
}

