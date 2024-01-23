import React from 'react'

const Contact = () => {
  return (
    <div className='Contact-form'>
        <p>ContactUS</p>
        <div className="form">
         <input type="text" placeholder='Enter full name' />
         <input type="email" placeholder='Enter email address' />
        <textarea  cols="20" rows="7" placeholder='Your feedback'></textarea>
        <button type='submit'>Submit</button>
        </div>
    </div>
  )
}

export default Contact