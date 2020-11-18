import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormContextProvider = ({ children }: any) => {
    const [intervenantSelected , setIntervenantSelected ] = useState({});

    return <FormContext.Provider value={{ intervenantSelected , setIntervenantSelected }}>{children}</FormContext.Provider>;
}
