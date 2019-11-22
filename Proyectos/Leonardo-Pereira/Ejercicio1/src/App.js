import React from 'react';
import './App.css';



class  App extends React.Component {

    constructor(props){

      super(props);
      this.state = { 

        nombre: "",
        apellido: "",
        email: "",
        fecha:""


        
      };

      

      
    }

    handleChange=(key)=>({target:{value}})=>{
      console.log(key,this.state,value)
      this.setState({[key]:value});
    
  
    }

    handleSubmit=()=>{

      const {nombre,apellido,email,fecha}= this.state;

      alert(`${nombre} ${apellido} ${email} ${fecha}`);
    }



  
  render(){ 

       const {nombre,apellido,email,fecha}= this.state;

        return(

          <div className="App">

            <form onSubmit={this.handleSubmit}>

              <input type="text" required placeholder="Nombre"  value ={nombre} onChange={this.handleChange('nombre')} />
              <br/>
              <input type="text" required placeholder="Apellido" value ={apellido} onChange={this.handleChange('apellido')}/>
              <br/>
              <input type="email" required placeholder="Email" value ={email} onChange={this.handleChange('email')}/>
              <br/>
             
              Hombre: <input type="radio"/>
              Mujer:  <input type="radio"/>
              
             
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

