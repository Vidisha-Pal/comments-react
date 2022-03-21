import React, { useEffect, useState , useRef} from "react";
import Comment from './Comment';

let commentsList = [
    { name: 'Sally', description: 'I really loved reading about your blog!' },
    { name: 'Mary', description: 'Great work! Definitely inspired me to add more green to my place.' },
    { name: 'Andrea', description: 'Thanks for the guide to buying houseplants for beginners.' }
];


function Comments() {
    const commentsRef = useRef(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);


    const addCommentHandler = () => {
        if(commentsRef.current && commentsRef.current.value) { 
            let updatedComments = comments;
            updatedComments.push( { name: 'Wendy', description : commentsRef.current.value})
            setComments([...comments] , updatedComments);   
        }
    }

    useEffect(() => {
        setComments(commentsList);
        setLoading(false);
    }, []);


    

    return (
        <>
            <div className="container">
                <h2>My Amazing Blog</h2>
                <hr />
                <br />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </div>
            <br />
            <div className="container">
                <h4>Comments</h4>
                <hr />
                <br />
            </div>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col xl-2 lg-2 md-3 sm-4 xs-4">
                        <textarea 
                            className="form-control" 
                            placeholder="Leave a comment here" 
                            ref={commentsRef}>
                        </textarea>
                    </div>
                    <div className="col xl-1 lg-1 md-1 sm-2 xs-2">
                        <button type="button" className="btn btn-outline-secondary" onClick={addCommentHandler}>Post comment</button>
                    </div>
                    <div className="col xl-10 lg-10 md-10 sm-6 xs-6"></div>
                </div>

            </div>
            
            <br />
            {loading ? 
           
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            :  comments && comments.length> 0 && comments.map((comment, index) => <Comment key={index} name={comment.name} description={comment.description} />)}

        </>
    )
}

export default Comments;