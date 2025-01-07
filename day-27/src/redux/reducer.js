let count = 0 

    let Reducer = (state = count , action)=>{

        switch(action.type){
            case "INC" :
                return state + 1
        case "DEC" :
                return state - 1
        default : 
                return state
        }
    }

    export default Reducer