import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => setUser(data));
      setReady(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
