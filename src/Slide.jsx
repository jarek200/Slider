import { FaQuoteRight } from 'react-icons/fa'
export default function Slide({ longList, index }) {
  const { image, name, title, content, quote } = longList[index]

  return (
    <div className='slide'>
      <img src={image} alt={title} className='person-img' />
      <p className='name'>{name}</p>
      <p className='title'>{title}</p>
      <p className='text'>{content}</p>
      <p>{quote}</p>
      <FaQuoteRight className='icon' />
    </div>
  )
}
