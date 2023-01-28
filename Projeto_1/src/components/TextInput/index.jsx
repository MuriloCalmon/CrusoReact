import './styles.css'

export function TextInput({searchValue, handleChange}) {
  return (
    <input className='text-input'
    placeholder='Type for search'
    onChange={handleChange}
    type="search"
    value={searchValue}
   /> 
  )
}