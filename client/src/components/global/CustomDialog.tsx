import React, {ReactChild, ReactElement} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import {TransitionProps} from "@material-ui/core/transitions";

interface CustomDialogProps {
    open: boolean,
    handleClose: () => void,
    handlePositiveAction: () => void,
    dialogTitle: String,
    dialogContent: String
    positiveButton: String,
    negativeButton: String
    children: ReactChild
}


const CustomDialog = (customDialogProps: CustomDialogProps): ReactElement => {

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & { children?: React.ReactElement<any, any> },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <Dialog open={customDialogProps.open} onClose={customDialogProps.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                TransitionComponent={Transition}>
            <DialogTitle id="alert-dialog-slide-title">{customDialogProps.dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {customDialogProps.dialogContent}
                </DialogContentText>
            </DialogContent>

            {customDialogProps.children}

            <DialogActions>
                <Button onClick={customDialogProps.handlePositiveAction} color="primary">
                    {customDialogProps.negativeButton}
                </Button>
                <Button onClick={customDialogProps.handleClose} color="primary">
                    {customDialogProps.positiveButton}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog