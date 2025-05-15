import React, { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const ArrowLeft = (props: Props) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
          <g id="Right-2" data-name="Right">
              <polygon
                  points="7.5 5.999 8.207 6.706 2.914 11.999 24 11.999 24 12.999 2.914 12.999 8.208 18.294 7.501 19.001 1 12.499 7.5 5.999
"
                  fill="currentColor"/>
          </g>
      </svg>
  )
}
