import React from "react";

export default function CommentList({ comments }) {
    console.log(comments)
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id} className="border rounder p-2 mb-3 me-3">
                    <h6>{comment.user}</h6>
                    <p className="text-muted">{comment.comment}</p>
                </div>
            ))}
        </div>
    )
}