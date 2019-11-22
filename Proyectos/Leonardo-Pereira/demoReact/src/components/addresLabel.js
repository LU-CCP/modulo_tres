import React from 'react';

class AdressLabel extends React.Component{

    constructor(props){

        super(props); //permite que el componente hijo acceda a las propiedades del padre

    }

    componentDidMount(){

    }

 
    render(){

        const{nombre,direccion1,direccion2}=this.props;

        return(
            <div  >

                <p>  {` ${nombre} `}</p>
                <p>  {` ${direccion1} `}</p>
                <p>  {` ${direccion2} `}</p>



            </div>
           

            
            
        )
    }

}

export default AdressLabel;