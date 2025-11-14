import React from "react";
import { createPortal } from "react-dom";

export const PostModal = ({ post, onClose }) => {
    if(!post) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={post.imageUrl} alt="" className="modal-img" />
                <p className="modal-text">{post.text}</p>
            </div>
        </div>,
        document.body
    );
};  