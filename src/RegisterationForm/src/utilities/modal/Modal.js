import React,{useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Modal(props) {
    const [open, setOpen] = useState(props.open);
    
    const handleClickToOpen = () => {
      setOpen(true);
    };
    
    const handleToClose = () => {
      setOpen(false);
    };
    
    return (
      <div stlye={{}}>
        <Dialog open={open} onClose={props.onClose}>
          <DialogTitle>{props.header}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} 
                    color="primary" >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }