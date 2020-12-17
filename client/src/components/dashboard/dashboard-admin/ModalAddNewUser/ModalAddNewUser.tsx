import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {ReactElement} from "react";
import AdminRepository from "../../../../repositories/AdminRepository";
import {Modal} from "@material-ui/core";


const addNewUser = (): void => {
    new AdminRepository().addNewUser()
}

const ModalAddNewUser = (): ReactElement => {


    return()
}