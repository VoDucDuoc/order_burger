const burgerState = {

    burger: { salad: 1, cheese: 1, beef: 1 },

    menu: {

        salad: 10,

        cheese: 20,

        beef: 55

   },
}
const burgerReducer = (state = burgerState, action) =>{
    switch(action.type){
        case 'ADD': {
            
            const burgerNew = {...state.burger}
            for (let index in state.burger){
                if(action.name === index){
                    
                    burgerNew[index] +=1;
                }
            }
            return {...state, burger: burgerNew}
            
        }
        case 'SUB': {
            
            const burgerNew = {...state.burger}
            for (let index in state.burger){
                if(action.name === index && burgerNew[index]>0){
                    
                    burgerNew[index] -=1;
                }
            }
            return {...state, burger: burgerNew}
            
        }
    
        default:
            return state;
    }}
export default burgerReducer


