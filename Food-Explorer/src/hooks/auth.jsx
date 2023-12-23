import { createContext, useContext, useState, useEffect } from "react";


import { api } from "../services";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodEplorer:user" , JSON.stringify(user))
      localStorage.setItem("@foodEplorer:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel entrar");
      }
    }
  }

  function singOut(){
   localStorage.removeItem("@foodEplorer:user")
   localStorage.removeItem("@foodEplorer:token")

   setData({})

  }



  useEffect(() =>{

    const token = localStorage.getItem("@foodEplorer:token")
    const user = localStorage.getItem("@foodEplorer:user")

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  },[])

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      singOut,
      user: data.user,
      
      
      }}>

      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
