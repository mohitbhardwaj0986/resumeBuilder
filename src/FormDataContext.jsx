import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();
function FormDataContext({ children }) {
  const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem("resumeData")) || []
  );
  const value = { formData, setFormData };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
const useData = () => {
  const context = useContext(FormContext);

  return context;
};

export { FormDataContext, useData, FormContext };
