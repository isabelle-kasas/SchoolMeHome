import React, {createContext, ReactElement, useContext, useState} from "react";
import AdminRepository from "../../../../repositories/AdminRepository";
import CustomDialog from "../../../global/CustomDialog";
import AddUserForm from "../../../global/form/AddUserForm";
import {UserType} from "../DashboardAdmin";


const addNewUser = (userFormData: UserFormData): void => {
    new AdminRepository().addNewUser(userFormData)
}

interface ModalAddNewUserProps {
    userType: UserType
}

const ModalAddNewUser = ({userType}: ModalAddNewUserProps): ReactElement => {


    const DIALOG_TITLE = "Ajoutez un.e nouvel.le utilisateur (" + userType + ")"
    const DIALOG_CONTENT = "Remplissez le formulaire ci-dessous afin de créer un.e nouvel.le utilisateur"
    const DIALOG_POSITIVE = "Ajouter"
    const DIALOG_NEGATIVE = "Annuler"

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePositiveAction = (): void => {
        addNewUser(userType);
        handleClose();
    }


    return (
        <div>
            <button onClick={handleClickOpen}>Open Modal</button>
            <CustomDialog open={open}
                          handleClose={handleClose}
                          handlePositiveAction={handlePositiveAction}
                          dialogTitle={DIALOG_TITLE}
                          dialogContent={DIALOG_CONTENT}
                          positiveButton={DIALOG_POSITIVE}
                          negativeButton={DIALOG_NEGATIVE}>
                <AddUserForm userType={userType}/>
            </CustomDialog>
        </div>
    )
}

export class UserFormData {
    private firstName: String
    private lastName: String
    private email: String
    private password: String
    private userRole: number

    constructor(firstName: String, lastName: String, email: String, password: String, userRole: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    }
}

export default ModalAddNewUser