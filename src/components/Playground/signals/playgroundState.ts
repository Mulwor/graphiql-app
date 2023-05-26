import { signal } from '@preact/signals-react'

function createPlaygroundState() {
  const values = signal({
    variables: '',
    headers: '',
    document: '',
  })

  return { values }
}

export const { values } = createPlaygroundState()
