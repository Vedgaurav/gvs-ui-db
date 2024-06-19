import React, { useEffect } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import RotateLoader from "react-spinners/RotateLoader";

export default function PleaseWait({ active, children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div
            style={{
                display: "flex",
                marginTop: "50vh",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <div>
                <LoadingOverlay
                    active={true}
                    spinner={<RotateLoader size="25" margin="2" />}
                ></LoadingOverlay>
                <br />
                <br />
            </div>
            <div>Please Wait....</div>
        </div>
    );
}

