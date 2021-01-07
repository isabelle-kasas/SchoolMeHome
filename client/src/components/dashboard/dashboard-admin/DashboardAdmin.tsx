import React, {createContext, Dispatch, ReactElement, SetStateAction} from "react";
import ModalAddNewUser, {UserFormData} from "./ModalAddNewUser/ModalAddNewUser";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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
            <Container maxWidth="sm">
                <Grid container justify="center" spacing={10}>
                    <Grid item xs={12} sm={4}>
                        <ModalAddNewUser userType={UserType.STUDENT}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ModalAddNewUser userType={UserType.TEACHER}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ModalAddNewUser userType={UserType.CAMPUS_MANAGER}/>
                    </Grid>
                </Grid>
            </Container>
        </UserFormContext.Provider>
    )
}