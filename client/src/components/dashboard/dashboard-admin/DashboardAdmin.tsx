import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {ReactElement, useState} from "react";
import {Modal} from "@material-ui/core";


const openModalAddNewUser = (): void => {

}

const DashboardAdmin = (): ReactElement => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal className={} open={open}>
                wow
            </Modal>
        </div>
    )
}