import React from 'react'; 
import './App.css'; //estilos aplicacion


// Crear un formulario que permita ingresar la siguiente información:
// 	- Nombre
// 	- Apellido
// 	- Email
// 	- Genero (radio button)
// 	- Fecha de nacimiento

// Debe validar los campos como requeridos y el email.
// Al presionar el boton enviar la información se debe mostrar en una alerta.

class App extends React.Component {  
  constructor(props){ 
    super(props); 
    this.state = { 
      nombre:'',
      apellido: '',
      email:'',
      genero:'',
      fechaNacimiento:''

    };
  }
    //retorna una funcion, cuando lo q hace depende de alogo  
  handleChange=(key)=> ({target:{value}})=>{ //en la primera ejecucion almacena un valor, se vuelve a ejecutar en el onchange 
    console.log(key, this.state,value)
    this.setState({[key]:value})  //key en [] para q se guarde el string q tiene key. asi se lee pasa el ID
  }
  handleSubmit=()=>{
    const {nombre, apellido, email, genero, fechaNacimiento}= this.state;
    alert(`${nombre} ${apellido} ${email} ${genero} ${fechaNacimiento} `)

  }
//placeholder='algo' para que aparezca en el cuadradito el nombre del campo
  render (){
    const {nombre, apellido, email, fechaNacimiento}=this.state
    return ( //onclick es una propiedad creado por nosotros
      //< pasar solo el nombre de la propiedad es lo mismo que propiedad={true}>
      <div className="App">
        <form className="Form" onSubmit={this.handleSubmit}>
          <label> Nombre<input required value={nombre} onChange={this.handleChange('nombre')} /></label> 
          <label>Apellido<input required value={apellido} onChange={this.handleChange('apellido')} /></label>
          <label>{`Email`}<input required type='email' value={email} onChange={this.handleChange('email')} /></label>
          <fieldset>
            <legend>Escoja un género</legend>
            <label><input type='radio' name='genero' value='Femenino' required checked={this.state.genero==='Femenino'} onChange={this.handleChange('genero')}></input> Femenino </label>
           <div><label><input type='radio' name='genero' value='Masculino' required  checked={this.state.genero==='Masculino'} onChange={this.handleChange('genero')}></input> Masculino </label></div>

          </fieldset>

          
          <input required value={fechaNacimiento} type='date' onChange={this.handleChange('fechaNacimiento')} required/>

          <button type='submit'>{'Submit'}</button>
        </form>
      </div>
    );
  }
}

export default App;
