import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import React from "react";
// import { Card } from 'reactstrap';


function PetCard(props) {
    
    return (

        <div>
            <h1>Pet(s)</h1>
      {props.posts.length ? (
            <List>
                {props.posts.map(post => (
                    <ListItem key={post._id}>
                                <h1>{post.name}</h1>
                                <p>{post.age}</p>
                                <p>{post.gender}</p>
                                <p>{post.breed}</p>
                                <p>{post.species}</p>
                                <p>{post.microchip}</p>
                                <p>{post.weight}</p>
                                <p>{post.location}</p>
                        <DeleteBtn onClick={() => props.removePost(post._id)} />
                    </ListItem>
                ))
                }
                
            </List>
     ) : (
            <h3>You haven't added any pets yet!</h3>
      )}
            {/* <div className="mt-5">
                <Link to="favorites">View favorites</Link>
            </div> */}
        </div>
    );
}

export default PetCard;
