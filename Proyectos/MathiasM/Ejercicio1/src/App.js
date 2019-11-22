import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);//ingresar a las propiedades del padre
    this.state ={
      nombre:'',
      apellido:'',
      email:'',
      genero:'',
      fechaNacimiento:''
    };
  }
  handleChange=(key)=>({target:{value}})=>{
    console.log(key, this.state, value)
    this.setState({ [key] :value });

  }
  
  handleSubmit = ()=>{
    const {nombre,apellido, email, genero, fechaNacimiento}= this.state;
    alert(`${nombre} ${apellido} ${email} ${genero} ${fechaNacimiento}`)
  }
  render(){
    const {nombre,apellido,email,fechaNacimiento}= this.state;

    return(
        <div className="App">
          <form className="Form" onSubmit={this.handleSubmit}>
            <input required value={nombre} onChange={this.handleChange('nombre')}/>
            <input required value={apellido} onChange={this.handleChange('apellido')}/>
            <input required type="email" value={email} onChange={this.handleChange('email')}/>
            <input required type="radio" name='genero' value='masculino' checked={this.state.genero==='masculino'} onChange={this.handleChange('genero')} /> Masculino
            <input required type="radio" name='genero' value='femenino' checked={this.state.genero==='femenino'} onChange={this.handleChange('genero')}/> Femenino
            <input required type="date" value={fechaNacimiento} onChange={this.handleChange('fechaNacimiento')}/>
            <button type="submit">Guardar</button>
          </form>
        </div>
      );
  }
}

export default App;
