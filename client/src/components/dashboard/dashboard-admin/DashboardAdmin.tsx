import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {createContext, ReactElement, useState} from "react";
import {Modal} from "@material-ui/core";
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