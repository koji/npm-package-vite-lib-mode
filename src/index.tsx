import * as React from 'react'

interface MySampleLibraryProps {
  message: string
}
export function MySampleLibrary({
  message,
}: MySampleLibraryProps): JSX.Element {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
