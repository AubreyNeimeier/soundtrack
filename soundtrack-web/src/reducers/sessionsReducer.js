//this is good but we don't want to save data to the store... we want to post to our rails API 



  export default function sessionsReducer(state = {username: ""}, action) {
    // debugger
    switch(action.type) {
      
      case 'LOGIN_WITH_CREDENTIALS':
        
        return {username: action.payload.username}
     
      case 'LOGIN_WITH_OAUTH':

      // case 'LOGOUT':
      //   return { session:[] }

    default: return state
      
    }

    
  }
  //left off researching how to redirect in an action after proper authentication (session contains username)