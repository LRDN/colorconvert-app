import type { FC, SVGAttributes } from 'react'

type ComponentProps = SVGAttributes<SVGElement>

const Logo: FC<ComponentProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 182.103 24"
      width="182.103"
      height="24"
      {...props}
    >
      <path
        d="M4.108-10.948A7.476,7.476,0,0,0,9.436-9.12a7.369,7.369,0,0,0,5.172-1.707A6.023,6.023,0,0,0,16.47-15.5v-.241H12.4v.207a2.449,2.449,0,0,1-.776,1.931,3.078,3.078,0,0,1-2.121.69,2.994,2.994,0,0,1-2.293-.862,4.175,4.175,0,0,1-.81-2.9v-3.241q0-3.759,3.1-3.759a2.985,2.985,0,0,1,2.121.724,2.6,2.6,0,0,1,.776,2v.207H16.47v-.345a6.012,6.012,0,0,0-1.862-4.69,7.417,7.417,0,0,0-5.172-1.69,7.476,7.476,0,0,0-5.328,1.828Q2.16-23.81,2.16-19.982v3.345Q2.16-12.775,4.108-10.948Zm17.414,0A7.476,7.476,0,0,0,26.85-9.12a7.364,7.364,0,0,0,5.276-1.828q1.931-1.828,1.931-5.69v-3.345q0-3.828-1.931-5.655a7.364,7.364,0,0,0-5.276-1.828,7.476,7.476,0,0,0-5.328,1.828q-1.948,1.828-1.948,5.655v3.345Q19.574-12.775,21.522-10.948Zm8.293-5.724q0,3.759-2.966,3.759-3.034,0-3.034-3.759v-3.241q0-3.759,3.034-3.759,2.966,0,2.966,3.759ZM38.9-10.741a5.47,5.47,0,0,0,4.017,1.414h1.966v-3.69H43.436a1.613,1.613,0,0,1-1.293-.466,2.43,2.43,0,0,1-.4-1.569V-33.12H37.47v18.345A5.42,5.42,0,0,0,38.9-10.741ZM49-10.948A7.476,7.476,0,0,0,54.332-9.12a7.364,7.364,0,0,0,5.276-1.828q1.931-1.828,1.931-5.69v-3.345q0-3.828-1.931-5.655a7.364,7.364,0,0,0-5.276-1.828A7.476,7.476,0,0,0,49-25.637q-1.948,1.828-1.948,5.655v3.345Q47.057-12.775,49-10.948ZM57.3-16.672q0,3.759-2.966,3.759-3.034,0-3.034-3.759v-3.241q0-3.759,3.034-3.759,2.966,0,2.966,3.759Zm7.655-10.586V-9.327h4.276V-20.086a3.886,3.886,0,0,1,.948-2.81,3.315,3.315,0,0,1,2.5-.983,7.244,7.244,0,0,1,2.138.379v-4a7.043,7.043,0,0,0-1.448-.138,5.475,5.475,0,0,0-2.483.552,4.146,4.146,0,0,0-1.759,1.69v-1.862Zm13.293,16.31A7.476,7.476,0,0,0,83.574-9.12a7.369,7.369,0,0,0,5.172-1.707A6.023,6.023,0,0,0,90.608-15.5v-.241H86.539v.207a2.449,2.449,0,0,1-.776,1.931,3.078,3.078,0,0,1-2.121.69,2.994,2.994,0,0,1-2.293-.862,4.175,4.175,0,0,1-.81-2.9v-3.241q0-3.759,3.1-3.759a2.985,2.985,0,0,1,2.121.724,2.6,2.6,0,0,1,.776,2v.207h4.069v-.345a6.012,6.012,0,0,0-1.862-4.69,7.417,7.417,0,0,0-5.172-1.69,7.476,7.476,0,0,0-5.328,1.828Q76.3-23.81,76.3-19.982v3.345Q76.3-12.775,78.246-10.948Zm17.414,0a7.476,7.476,0,0,0,5.328,1.828,7.364,7.364,0,0,0,5.276-1.828q1.931-1.828,1.931-5.69v-3.345q0-3.828-1.931-5.655a7.364,7.364,0,0,0-5.276-1.828,7.476,7.476,0,0,0-5.328,1.828q-1.948,1.828-1.948,5.655v3.345Q93.712-12.775,95.66-10.948Zm8.293-5.724q0,3.759-2.966,3.759-3.034,0-3.034-3.759v-3.241q0-3.759,3.034-3.759,2.966,0,2.966,3.759Zm7.655-10.586V-9.327h4.276V-20.5a3.211,3.211,0,0,1,.81-2.345,2.75,2.75,0,0,1,2.052-.828,2.626,2.626,0,0,1,2.034.828,3.346,3.346,0,0,1,.759,2.345V-9.327h4.276v-11.69a6.9,6.9,0,0,0-1.517-4.724,5.4,5.4,0,0,0-4.276-1.724,6.01,6.01,0,0,0-2.328.466,5.166,5.166,0,0,0-1.914,1.362v-1.621Zm15.862,0,6.207,17.931h3.517l6.241-17.931h-4.517L135.47-15.879l-3.483-11.379ZM148.85-17.017h10.483V-19.4q0-4-1.983-6.034a7.143,7.143,0,0,0-5.362-2.034,7.209,7.209,0,0,0-5.414,2.017q-1.966,2.017-1.966,6.052v2.172q0,4.138,2.034,6.121a7.519,7.519,0,0,0,5.483,1.983,7.932,7.932,0,0,0,5.172-1.552,5.039,5.039,0,0,0,1.9-4.1v-.172h-4.069l-.034.1a1.941,1.941,0,0,1-.793,1.5,3.307,3.307,0,0,1-2,.534,3.535,3.535,0,0,1-2.552-.862,3.846,3.846,0,0,1-.9-2.862Zm.81-5.931a3.04,3.04,0,0,1,2.328-.862q3.069,0,3.069,3.414v.448H148.85v-.1A4.175,4.175,0,0,1,149.66-22.948Zm13.086-4.31V-9.327h4.276V-20.086a3.886,3.886,0,0,1,.948-2.81,3.315,3.315,0,0,1,2.5-.983,7.244,7.244,0,0,1,2.138.379v-4a7.043,7.043,0,0,0-1.448-.138,5.475,5.475,0,0,0-2.483.552,4.146,4.146,0,0,0-1.759,1.69v-1.862Zm18.069,3h3.448v-3h-3.448v-5l-4.241,1.483v3.517h-2.483v3h2.483V-14.5A5.033,5.033,0,0,0,178-10.723a5.316,5.316,0,0,0,3.879,1.4h2.034v-3.621h-1.345q-1.759,0-1.759-1.828Z"
        transform="translate(-2.16 33.12)"
        fill="currentColor"
      />
    </svg>
  )
}

export default Logo
