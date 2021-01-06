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
            <TextField id="outlined-basic" label="FirstName"
                       defaultValue="First Name" variant="outlined"
                       onChange={e => updateStudentData("FirstName", e.target.value)}/>
            <TextField id="outlined-basic" label="LastName"
                       defaultValue="Last Name" variant="outlined"
                       onChange={e => updateStudentData("LastName", e.target.value)}/>
            <TextField id="outlined-basic" label="Email"
                       defaultValue="Email" variant="outlined"
                       onChange={e => updateStudentData("Email", e.target.value)}/>
            <TextField id="outlined-basic" label="Password"
                       defaultValue="Password" variant="outlined"
                       onChange={e => updateStudentData("Password", e.target.value)}/>
        </>

    )
}

export default AddStudentForm