import React,{useState} from "react";
import { Dialog,DialogTitle,DialogActions,DialogContent,Button,DialogContentText } from "@mui/material";

export default function Modal(props) {
    
    return (
      <>
        <Dialog open={props.open} onClose={props.onClose}>
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
      </>
    );
  }