import React from "react";
import { Button } from "react-bootstrap";

function Toolbar({ onDelete, onBlock, onUnblock, }) {
    return (
        <div>
            <Button className="my-3" onClick={onDelete} variant="danger">Delete</Button>
            <Button className="mx-2 my-3" onClick={onBlock} variant="warning">Block</Button>
            <Button className="my-3" onClick={onUnblock} variant="primary">Unblock</Button>
        </div>
    );
}

export default Toolbar;