import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout : ()=> {},
    onLogin : (email, password) =>{},
});

export const AuthProvider = (props) =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserInformation = localStorage.getItem('isLoggedIn');

    if(storedUserInformation === '1'){
      setIsLoggedIn(true);
    };
  },[]
  );

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
      };


  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

    return(
       <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin :loginHandler

       }}>{props.children}</AuthContext.Provider>
    );
}

export default AuthContext;