import React, {createContext, ReactElement, useContext, useState} from "react";
import AdminRepository from "../../../../repositories/AdminRepository";
import CustomDialog from "../../../global/CustomDialog";
import AddUserForm from "../../../global/form/AddUserForm";
import {UserFormContext, UserType} from "../DashboardAdmin";


const addNewUser = (userType: UserType): void => {
    new AdminRepository().addNewUser(userType)
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

}

export default ModalAddNewUser