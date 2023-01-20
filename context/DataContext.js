import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { PREFIX_API } from "../config";

export const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
  const [setting, setSetting] = useState(null);

  const fetchSettings = async () => {
    // Fetching data from jsonplaceholder.
    const res = await axios.get(`${PREFIX_API}settings/index`);

    const settings = await res.data;

    setSetting(res.data);
  };

  useEffect(() => {
    fetchSettings();
  }, []);
  // const [projects, setProjects] = useState(null);
  // const happyBirthday = () => setAge(age + 1);

  return (
    <DataContext.Provider value={[setting, setSetting]}>
      {children}
    </DataContext.Provider>
  );
};

// export function useDataContext() {
//   return useContext(DataContext);
// }
