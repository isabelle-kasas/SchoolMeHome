import React, {ReactElement, useContext} from "react";
import {TextField} from "@material-ui/core";
import {UserFormContext} from "../../dashboard/dashboard-admin/DashboardAdmin";


const AddStudentForm = (): ReactElement => {

    const [studentData, setStudentData] = useContext(UserFormContext)
    const updateStudentData = (key: String, value: String) => {
        switch (key) {
            case "FirstName" :
                studentData.firstName = value
                break;
            case "LastName" :
                studentData.lastName = value
                break;
            case "Email" :
                studentData.email = value
                break;
            case "Password" :
                studentData.password = value
                break;
        }
        setStudentData(studentData)
    }

    return (
        <>
            <TextField label="FirstName"
                       autoFocus
                       id="standard-basic"
                       margin="dense"
                       fullWidth
                       variant="filled"
                       required
                       onChange={e => updateStudentData("FirstName", e.target.value)}/>
            <TextField label="LastName"
                       margin="dense"
                       fullWidth
                       id="standard-basic"
                       required
                       onChange={e => updateStudentData("LastName", e.target.value)}/>
            <TextField label="Email"
                       margin="dense"
                       fullWidth
                       id="standard-basic"
                       required
                       onChange={e => updateStudentData("Email", e.target.value)}/>
            <TextField label="Password"
                       margin="dense"
                       fullWidth
                       id="standard-basic"
                       required
                       onChange={e => updateStudentData("Password", e.target.value)}/>
        </>

    )
}

export default AddStudentForm