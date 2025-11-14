import React from "react";
import { createPortal } from "react-dom";
import { type Post } from "../../types/post";

interface PostModalProps{
    post: Post | null;
    onClose: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
    if(!post) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {post.imageUrl && (
                    <img src={post.imageUrl} alt="" className="modal-img" />
                )}
                <p className="modal-text">{post.text}</p>
            </div>
        </div>,
        document.body
    );
};  