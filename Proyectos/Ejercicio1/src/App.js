import React from 'react';
<<<<<<< HEAD
import './App.css';



class  App extends React.Component {

    constructor(props){

      super(props);
      this.state = { 

        nombre: "",
        apellido: "",
        email: "",
        sexo:"",
        fecha:""
        
      };
    
    }

    handleChange=(key)=>({target:{value}})=>{


      this.setState({[key]:value});
    
  
    }

    handleSubmit=()=>{

      const {nombre,apellido,email,fecha,sexo}= this.state;

      alert(`Nombre: ${nombre} Apellido: ${apellido} Email: ${email} Fecha Nac: ${fecha} Sexo: ${sexo}`);
    }
    
    
  render(){ 

       const {nombre,apellido,email,fecha}= this.state;

        return(

          <div className="App">
            <h1>Ejercicio 1: Formulario </h1>

            <form onSubmit={this.handleSubmit}>

              <input type="text" required placeholder="Nombre"  value ={nombre} onChange={this.handleChange('nombre')} />
              <br/>
              <input type="text" required placeholder="Apellido" value ={apellido} onChange={this.handleChange('apellido')}/>
              <br/>
              <input type="email" required placeholder="Email" value ={email} onChange={this.handleChange('email')}/>
              <br/>
             
              Hombre: <input type="radio" name="sex"  value="masculino" required checked={this.state.sexo==='masculino'} onChange={this.handleChange('sexo')} />
              Mujer:  <input type="radio" name="sex"  value="femenino" required checked={this.state.sexo==='femenino'} onChange={this.handleChange('sexo')} />
              
             
              <br/>
              <input type="date" required value ={fecha} onChange={this.handleChange('fecha')}/>
              <br/>
              <br/>
              <button type='submit'>{'Enviar Datos'}</button>

            </form>

           

          </div>

        );
    }


}

export default App;

=======
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    
    return (
    <div className="App">
    </div>
  );
  }
}

export default App;
>>>>>>> master
