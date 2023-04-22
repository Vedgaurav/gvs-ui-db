import React,{useState} from "react";
import { Dialog,DialogTitle,DialogActions,DialogContent,Button,DialogContentText } from "@mui/material";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {RxCrossCircled} from "react-icons/rx";

export default function Modal(props) {
    
    return (
      <>
        <Dialog open={props.open} onClose={props.onClose}>
          <DialogTitle bgcolor="blue" color="whitesmoke">{props.header=="Success"? <><BsFillCheckCircleFill size={30} color="green"/>{props.header}</>:<><RxCrossCircled size={30} color="red"/>{props.header}</>}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} 
                    color="success" >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }