import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
import { Card } from 'reactstrap';


function PetCard(props) {
    
    return (

        <div>
            <h1>Pet(s)</h1>
            {/* <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {state.posts.length ? ( */}
            <List>
                {props.posts.map(post => (
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
                        <DeleteBtn onClick={() => props.removePost(post._id)} />
                    </ListItem>
                ))
                }
                
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
