import clampNumber from '@helpers/clampNumber'
import type { FC, HTMLProps, ReactNode } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

export type Position = { top: number; left: number }

type ComponentProps = HTMLProps<HTMLDivElement> & {
  onMove: (position: Position) => void
  clampPosition?: boolean
  children?: ReactNode
}

const Interaction: FC<ComponentProps> = ({
  clampPosition = true,
  children,
  onMove,
  ...props
}) => {
  const [isPointerDown, setPointerDown] = useState(false)
  const interactionRef = useRef<HTMLDivElement>(null)

  const getPosition = useCallback(
    (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => {
      const interactionRect = interactionRef.current!.getBoundingClientRect()
      const { top, left, width, height } = interactionRect
      const { pageXOffset, pageYOffset } = window
      const { pageX, pageY } = event

      const position = {
        top: ((pageY - (top + pageYOffset)) / height) * 100,
        left: ((pageX - (left + pageXOffset)) / width) * 100,
      }

      return clampPosition
        ? {
            top: clampNumber(position.top, 0, 100),
            left: clampNumber(position.left, 0, 100),
          }
        : position
    },
    [clampPosition],
  )

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (isPointerDown) {
        onMove(getPosition(event))
        event.preventDefault()
      }
    },
    [isPointerDown, getPosition, onMove],
  )

  useEffect(() => {
    const handlePointerUp = () => setPointerDown(false)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [handlePointerMove])

  return (
    <div
      ref={interactionRef}
      onPointerDown={(event) => {
        onMove(getPosition(event))
        setPointerDown(true)
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Interaction
