import React from 'react'; 
import logo from './logo.svg';
import './App.css'; //estilos aplicacion

import Instruction from './components/Instructions'
import Hiperlink from './components/Hiperlink'
import AddressLabel from './components/AddressLabel'
import Envelope from './components/envelope'


class App extends React.Component {  //clase dentro de una memoria, funcion se genera 
  //dentro de una clase no es necesario declarar function
  constructor(props){ //estado. // constructor inicializa instancias de la clase //recibe props del 'padre'
    super(props); 
    this.state = { //this contexto de la clase, con this se ingresa a las propiedades 
      value: 'Learn React',  //puede tener mas de un estado
      compare: ''
    };
    this._varGlobal=''; //_ para diferenciar q es global, no pertenece al estado plq no se renderiza
    console.log('constructor')
  }              //actualizaciones propiedades:nextProps
  shouldComponentUpdate(nextProps, nextState){  //no actualizar si la propiedad no cambia/estado
    console.log(nextProps);
    const {value, compare}=this.state;
    const should = nextState.value !== value || nextState.compare !== compare;
    console.log('shouldComponentUpdate', should)
    return should;
  }

  componentDidMount(){ //aqui se puede por ej cambiar datos
    console.log('componentDidMount')
    setTimeout(()=>{
      console.log('setState')
      this.setState({value: 'Learn React Now!'});   //cambiar estado
    },3000)
    setTimeout(()=>{
      this._varGlobal='Please';
      this.forceUpdate(); //sin esto no se actualiza el Please, pq es global, tpco se hace un setState -> no se renderiza
    },4000)
    setTimeout(()=>{
      console.log('setState compare')
      this.setState({compare:''});
    },5000)
  }

  componentDidUpdate(){ //logica para cuando el componente se termino de actualizar
    console.log('componentDidUpdate');
  }
  render (){ //metodo
    console.log('render')
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Instruction
            nombre='Victoria'
            edad= {23}  //para q lo tome como numero
            hacerClick ={nombre=>alert(nombre)}//  para pasar funciones
          
          />
          <Hiperlink/>
          {/* <AddressLabel
            nombrePersona='Victoria Zanforlin'
            direccion1='Los Mañios 1610'
            direccion2='Concepción, Chile'
          /> */}
          <Envelope
            toPerson={{
              nombrePersona:'Victoria Zanforlin',
              direccion1:'Los Mañios 1610',
              direccion2:'Concepción, Chile'}}

           fromPerson={{
            nombrePersona:'Pamela Brito',
            direccion1:'Los Acacios 10',
            direccion2:'Santiago, Chile'}

            }

          
          />

        </header>
      </div>
    );
  }
}

export default App;
