import React from 'react'; 
import './App.css'; //estilos aplicacion


class App extends React.Component {  
  constructor(props){ 
    super(props); 
    this.state = { 
      firstName:'',
      lastName: '',
      email:''
    };
  }
    //retorna una funcion, cuando lo q hace depende de alogo  
  handleChange=(key)=> ({target:{value}})=>{ //en la primera ejecucion almacena un valor, se vuelve a ejecutar en el onchange 
    console.log(key, this.state,value)
    this.setState({[key]:value})  //key en [] para q se guarde el string q tiene key. asi se lee pasa el ID
  }
  handleSubmit=()=>{
    const {firstName, lastName, email}= this.state;
    alert(`${firstName} ${lastName} ${email} `)

  }

  render (){
    const {firstName, lastName, email}=this.state
    return ( //onclick es una propiedad creado por nosotros
      //< pasar solo el nombre de la propiedad es lo mismo que propiedad={true}>
      <div className="App">
        <form className="Form" onSubmit={this.handleSubmit}>
          <input required value={firstName} onChange={this.handleChange('firstName')} />
          <input required value={lastName} onChange={this.handleChange('lastName')} />
          <input required type='email' value={email} onChange={this.handleChange('email')} />

          <button type='submit'>{'Submit'}</button>
        </form>


      </div>
    );
  }
}

export default App;
