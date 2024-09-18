import '../input_data/index.css'

function  Form_data(props) {
  const {username,lastname,email,desc} = props.value
  return (
    <div className='form_data' > 
      <h1>Username : {username}</h1>
      <h1>Lastname : {lastname}</h1>
      <h1>Email : {email}</h1>
      <h1>Description : {desc}</h1>

    </div>
  )
}

export default  Form_data
