interface Props {
  prompt: string
}

export const getResult = async ({ prompt }: Props) => {
  return fetch('https://walrus-app-4egkd.ondigitalocean.app/api/openai', {
    method: 'POST',
    body: JSON.stringify({
      prompt
    }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(() => {
      return 'Error en la solicitud'
    })
}
