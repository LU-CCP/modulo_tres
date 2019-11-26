import {Componets,UseState} from 'react'

const genders = ['male', 'female', 'other'];
const Function =()=>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setlastName] = useState('');
    const [email,setemail] = useState('');
    const [gender,setgender] = useState('');
    const [birthdate,setbirthdate] = useState('');

    const handleChange = (key) => ({ target: { value }}) => {
        setState({ [key]: value });
      }
    
    const handleSubmit = () => {
        const { firstName, lastName, email, gender, birthdate } = this.state;
        alert(`${firstName} ${lastName} ${email} ${gender} ${birthdate}`)
      }
      
    const renderGendersMap = () => {
        return genders.map((gender) => {
        return (
            <div key={gender}>
            <input 
                className='App-Form-Item' 
                name='genders' 
                required 
                type='radio' 
                value={gender}
                onChange={this.handleChange('gender')} 
                />{gender}
            </div>
        );
        })
    }
}