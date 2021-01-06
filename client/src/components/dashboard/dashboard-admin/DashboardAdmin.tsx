import React, {createContext, ReactElement, useState} from "react";
import ModalAddNewUser, {UserFormData} from "./ModalAddNewUser/ModalAddNewUser";

const userFormState = React.useState(new UserFormData("", "", "", "", -1));
export const UserFormContext = createContext(userFormState)

export enum UserType {
    STUDENT,
    TEACHER,
    CAMPUS_MANAGER,
}

const DashboardAdmin = (): ReactElement => {
    return (
        <UserFormContext.Provider value={userFormState}>
            <ModalAddNewUser userType={UserType.STUDENT}/>
            <ModalAddNewUser userType={UserType.TEACHER}/>
            <ModalAddNewUser userType={UserType.CAMPUS_MANAGER}/>
        </UserFormContext.Provider>
    )
}