"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface Comment {
    name: string,
    text: string
};


export default function Comments() {
    const [commenterName, setCommenterName] = useState<string>("");
    const [commenterComment, setCommenterComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>([]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setCommenterName(e.target.value);
    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => setCommenterComment(e.target.value);

    function addComment() {
        const comment: Comment = { name: commenterName, text: commenterComment };
        setComments([...comments, comment]);
        console.log(comments);
        setCommenterName("");
        setCommenterComment("");
    }

    useEffect(() => {
        const button = document.getElementById('comment_button') as HTMLButtonElement;
        if (commenterName && commenterComment) {
            if (button.disabled != false)
                button.disabled = false;
        } else {
            if (button.disabled != true)
                button.disabled = true;
        }
    }, [commenterName, commenterComment]);

    return (
            <div className="px-4 py-2 flex flex-col gap-2 w-full max-w-lg bg-green-950">
            <p className="text-xl font-bold">Comments</p>
            {comments.map((_comment,id) => {
                    return (
                        <div key={id}>
                            <h3 className="text-lg font-semibold">{_comment.name}</h3>
                            <p className="italic">{_comment.text}</p>
                            <hr />
                        </div>
                    )
                })}
            <p className="text-xl font-bold">Add Comment</p>
            <label htmlFor="comment_name">Name</label>
            <input className="text-black" id="comment_name" placeholder="Name..." type="text" value={commenterName} onChange={handleNameChange} />
            <label htmlFor="comment_text">Comment</label>
            <input className="text-black" id="comment_text" placeholder="Your Comment..." type="text" value={commenterComment} onChange={handleCommentChange} />
            <button id="comment_button" onClick={addComment}
                className="mt-2 px-4 py-2 rounded-md bg-green-700 hover:bg-green-800"
            >Add Comment</button>
            </div>
    );
}