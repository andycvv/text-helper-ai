import './InputSection.css'

interface Props {
  setText: (value: string) => void
  text: string
  loading: boolean
}

export const InputSection = ({ setText, text, loading }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    setText(e.target.value)
  }

  return (
    <div className='input-section'>
      <textarea 
        className='input'
        style={{
          width: '100%', maxWidth: '100%'
        }}
        onChange={handleChange}
        value={loading ? 'Cargando...' : text}
        disabled={loading ? true : false}
        placeholder="Escribe algo"
      />
    </div>
  )
}