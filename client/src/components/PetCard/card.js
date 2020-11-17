import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../utils/actions";
import API from "../utils/API";
import { Card } from 'reactstrap';


function PetCard() {
    const [state, dispatch] = useStoreContext();

    const removePost = id => {
        API.deletePost(id)
            .then(() => {
                dispatch({
                    type: REMOVE_POST,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    const getPosts = () => {
        dispatch({ type: LOADING });
        API.getPosts()
            .then(results => {
                dispatch({
                    type: UPDATE_POSTS,
                    posts: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>Pet(s)</h1>
            {/* <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {state.posts.length ? ( */}
            <List>
                {state.posts.map(post => (
                    <ListItem key={post._id}>
                        <Card>
                            <strong>
                                <div>
                                <h1>{post.name}</h1>
                                </div>
                                <div className="card-body">
                                {post.age}
                                {post.birthday}
                                {post.species}
                                {post.breed}
                                {post.weight}
                                {post.location}
                                </div>
                            </strong>
                        </Card>
                        <DeleteBtn onClick={() => removePost(post._id)} />
                    </ListItem>
                ))}
            </List>
      (
            <h3>You haven't added any pets yet!</h3>
      )
            {/* <div className="mt-5">
                <Link to="favorites">View favorites</Link>
            </div> */}
        </div>
    );
}

export default PetCard;
