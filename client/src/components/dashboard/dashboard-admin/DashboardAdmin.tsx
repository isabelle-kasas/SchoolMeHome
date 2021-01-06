import React, {createContext, ReactElement, useState} from "react";
import ModalAddNewUser, {UserFormData} from "./ModalAddNewUser/ModalAddNewUser";

const userFormState = React.useState(new UserFormData());
export const UserFormContext = createContext(userFormState)

export enum UserType {
    STUDENT,
    TEACHER,
    ADMIN,
}

const DashboardAdmin = (): ReactElement => {
    return (
        <UserFormContext.Provider value={userFormState}>
            <ModalAddNewUser userType={UserType.STUDENT}/>
        </UserFormContext.Provider>
    )
}