import React, {createContext, ReactElement, useContext, useState} from "react";
import AdminRepository from "../../../../repositories/AdminRepository";
import CustomDialog from "../../../global/CustomDialog";
import AddUserForm from "../../../global/form/AddUserForm";
import {UserFormContext, UserType} from "../DashboardAdmin";


const addNewUser = (userFormData: UserFormData, userType: UserType): void => {
    userFormData.userRole = userType
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
    const [userForm] = useContext(UserFormContext)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePositiveAction = (): void => {
        addNewUser(userForm, userType);
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
    private _firstName: String
    private _lastName: String
    private _email: String
    private _password: String
    private _userRole: number


    set firstName(value: String) {
        this._firstName = value;
    }

    set lastName(value: String) {
        this._lastName = value;
    }

    set email(value: String) {
        this._email = value;
    }

    set password(value: String) {
        this._password = value;
    }

    set userRole(value: number) {
        this._userRole = value;
    }

    constructor(firstName: String, lastName: String, email: String, password: String, userRole: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._userRole = userRole;
    }
}

export default ModalAddNewUser