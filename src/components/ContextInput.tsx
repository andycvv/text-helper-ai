interface Props {
  setContext: (value: string) => void
}

export const ContextInput = ({ setContext }: Props) => {
  return (
    <input 
    placeholder='Dile algo adicional a la IA'
    style={{
      boxSizing: 'border-box',
      width: '100%',
      height: '40px',
      border: 'none',
      outline: 'none',
      borderRadius: '5px',
      padding: '0px 10px',
      fontSize: '16px',
      fontFamily: 'Poppins',
      textAlign: 'center',
      overflow: 'hidden'
    }}
    onChange={(e) => {
      setContext(e.target.value)
    }}
  />
  )
}