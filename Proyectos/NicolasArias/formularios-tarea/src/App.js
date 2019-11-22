import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      nombre:'',
      apellido:'',
      email:'',
      genero:'',
      date:''
    };
  }
  handleChange=(key)=>({target:{value}})=>{
    console.log(key, this.state, value)
    this.setState({ [key] :value });

  }
  
  handleSubmit = ()=>{
    const {nombre,apellido, email, genero, date}= this.state;
    alert(`${nombre} ${apellido} ${email} ${genero} ${date}`)
  }
  render(){
    const {nombre,apellido,email,genero,date}= this.state;

    return(
        <div className="App">
          <form className="Form" onSubmit={this.handleSubmit}>
            <input required value={nombre} onChange={this.handleChange('nombre')}/>
            <input required value={apellido} onChange={this.handleChange('apellido')}/>
            <input required type="email" value={email} onChange={this.handleChange('email')}/>
            <input required type="radio" name='genero' value='masculino' checked={this.state.genero==='masculino'} onChange={this.handleChange('genero')} /> Masculino
            <input required type="radio" name='genero' value='femenino' checked={this.state.genero==='femenino'} onChange={this.handleChange('genero')}/> Femenino
            <input required type="date" value={date} onChange={this.handleChange('date')}/>
            <button type="submit">Guardar</button>
          </form>
        </div>
      );
  }
}

export default App;