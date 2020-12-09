import './App.css';
import React from "react"
import {BrowserRouter as Router} from "react-router-dom";
import * as ROUTES from "./constants/routes"
import { Home, Browse, SignUp, SignIn} from "./pages"
import { IsUserRedirect, ProtectedRoute} from "./helpers/routes"
import useAuthListener from "./hooks/use-auth-listener"


function App() {
  const { user } = useAuthListener()

  return ( 
    <div className="app">
      <Router>

          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
            <Home />
          </IsUserRedirect>
    

        
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
       

        
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
          </IsUserRedirect>
        

        
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
          </IsUserRedirect>
        
      </Router>

    </div>
  );
}

export default App;
