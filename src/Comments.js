import React from "react";
import Comment from './Comment';

const addCommentHandler  = () => {

} 

function Comments() {
    const commentsList = [
        {name: 'Sally', description: 'I really loved reading about your blog!' },
        { name: 'Mary',description: 'Great work! Definitely inspired me to add more green to my place.'},
        { name : 'Andrea' , description:'Thanks for the guide to buying houseplants for beginners.'} 
    ];
    return (
        <>
            <br />
            <div class="container">
                <div class="row justify-content-start">
                    <div className="col xl-2 lg-2 md-3 sm-4 xs-4">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">

                        </textarea>
                    </div>
                    <div className="col xl-1 lg-1 md-1 sm-2 xs-2">
                        <button type="button" class="btn btn-outline-secondary" onClick={addCommentHandler}>Add comment</button>
                    </div>
                    <div className="col xl-10 lg-10 md-10 sm-6 xs-6"></div>
                </div>

            </div>

            <hr />
            <br />
            {commentsList.map( (comment, index) => <Comment key={index} name={comment.name} description={comment.description} />)}

        </>
    )

}

export default Comments;