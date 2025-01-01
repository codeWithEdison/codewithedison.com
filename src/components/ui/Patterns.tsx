export const GridPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full z-0 opacity-[0.03] dark:opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
  
  export const HexPattern = () => (
    <svg 
      className="absolute inset-0 w-full h-full z-0 opacity-[0.03] dark:opacity-[0.05]" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hex" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
          <path 
            d="M25,17.3205080756888L0,34.641016151378L0,8.6602540378444L25,17.3205080756888z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
          />
          <path 
            d="M25,17.3205080756888L50,34.641016151378L50,8.6602540378444L25,17.3205080756888z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  )
  
  export const CirclePattern = () => (
    <svg 
      className="absolute inset-0 w-full h-full z-0 opacity-[0.03] dark:opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="circles" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="25" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circles)" />
    </svg>
  )
  
  export const DotsPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full z-0 opacity-[0.03] dark:opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )