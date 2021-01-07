import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {ReactElement, useState} from "react";
import {Modal} from "@material-ui/core";
import ModalAddNewUser from "./ModalAddNewUser/ModalAddNewUser";



export enum UserType {
    STUDENT,
    TEACHER,
    ADMIN,
}

export const DashboardAdmin = (): ReactElement => {

    return (
        <ModalAddNewUser userType={UserType.STUDENT}/>
    )
}