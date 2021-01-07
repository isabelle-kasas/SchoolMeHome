import React, {createContext, Dispatch, ReactElement, SetStateAction} from "react";
import ModalAddNewUser, {UserFormData} from "./ModalAddNewUser/ModalAddNewUser";

export const UserFormContext = createContext<any>({})

export enum UserType {
    STUDENT,
    TEACHER,
    CAMPUS_MANAGER,
}

export const DashboardAdmin = (): ReactElement => {

    //TODO: Create Custom Hook | export function
    const [userFormState, setUserFormState] = React.useState(new UserFormData("", "", "", "", -1));
    const useState = [userFormState, setUserFormState]

    return (
        <UserFormContext.Provider value={useState}>
            <ModalAddNewUser userType={UserType.STUDENT}/>
            <ModalAddNewUser userType={UserType.TEACHER}/>
            <ModalAddNewUser userType={UserType.CAMPUS_MANAGER}/>
        </UserFormContext.Provider>
    )
}