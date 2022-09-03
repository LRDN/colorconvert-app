import type { FC, SVGAttributes } from 'react'

type ComponentProps = SVGAttributes<SVGElement>

const Transparency: FC<ComponentProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <pattern
          id="pattern"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="16"
            height="16"
            fill="var(--transparency-background-color)"
          />
          <path
            d="M8,8L8,0L0,0L0,8L8,8L8,16L16,16L16,8L8,8Z"
            fill="var(--transparency-alternate-background-color)"
          />
        </pattern>
      </defs>
      <rect fill="url(#pattern)" width="100%" height="100%" />
    </svg>
  )
}

export default Transparency
