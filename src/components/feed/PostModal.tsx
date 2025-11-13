import React from "react";
import { createPortal } from "react-dom";

export const PostalModel = ({ post, onClose }) => {
    if(!post) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                
            </div>
        </div>
    )
}