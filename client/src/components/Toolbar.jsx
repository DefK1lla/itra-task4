import React from "react";
import { Button } from "react-bootstrap";

function Toolbar({ onDelete, onBlock, onUnblock, }) {
    return (
        <div>
            <Button title="delete" className="my-3" onClick={onDelete} variant="warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" /></svg>
            </Button>
            <Button title="block" className="mx-2 my-3" onClick={onBlock} variant="danger">
                Block
            </Button>
            <Button title="unblock" className="my-3" onClick={onUnblock} variant="success">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13 11h5v6h-8v-6h2v-2c0-1.103-.897-2-2-2s-2 .897-2 2v1h-1v-1c0-1.656 1.343-3 3-3s3 1.344 3 3v2zm11 1c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-2 0c0-5.514-4.486-10-10-10s-10 4.486-10 10 4.486 10 10 10 10-4.486 10-10z" /></svg>
            </Button>
        </div>
    );
}

export default Toolbar;