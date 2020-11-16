import React from "react";
import { Card } from "reactstrap";
import CreateProfile from "../components/CreateProfile/profile";

function Profile() {
    return(
        <Card>
            <form>
                <CreateProfile />
            </form>
        </Card>
    );
}

export default Profile;
