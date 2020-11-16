import React from "react";

function Footer() {
    return (
        <div className="footer mt-4">
            <div className="container col-md-1">
                <a className="petfinder" href="https://www.petfinder.com/">
                    <i className="fa fa-2x">&#xf1b0;</i>
                </a>
                <a className="adoptapet" href="https://adoptapet.com/">
                <i className="fas fa-2x ml-3">&#xf6d3;</i>
                </a>
            </div>
        </div>
    );
}

export default Footer;