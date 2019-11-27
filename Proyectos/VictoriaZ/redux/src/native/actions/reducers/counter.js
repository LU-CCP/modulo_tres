const INITIAL_STATE = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

// la primera vez cdo se levante viene como undefined

// acumular q mantiene el estado.cambiar uun objeto a traves del rducer, cdo se dispara la accion entra al reducer, cambia el estado y lo devuelve
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
// recomendable un reduces por pantalla que se esta mostrando
