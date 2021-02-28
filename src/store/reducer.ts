import {initState, State} from "./state";
import {ActionsRes} from "./actions";


const reducer = ({ numberPartials }: State = initState, action: ActionsRes): State => {
  switch (action.type) {
    case "CHANGE_K": return {
      numberPartials: {
        ...numberPartials,
        k: action.payload
      }
    }
    case "CHANGE_H": return {
      numberPartials: {
        ...numberPartials,
        h: action.payload
      }
    }
    case "CHANGE_D": return {
      numberPartials: {
        ...numberPartials,
        d: action.payload
      }
    }
    case "CHANGE_U": return {
      numberPartials: {
        ...numberPartials,
        u: action.payload
      }
    }
    case "CHANGE_ALL": return {
      numberPartials: action.payload
    }
    default: return {
      numberPartials
    }
  }
}

export default reducer
