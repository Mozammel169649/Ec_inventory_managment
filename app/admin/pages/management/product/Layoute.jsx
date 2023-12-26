import React from "react";
import setup from "./config/setup";
import { Outlet } from "react-router";

const { page_title } = setup

function ProductLayoute() {
    return (
        <div>
            <div className="">
                <h4 >{page_title}</h4>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
    
}

export default ProductLayoute;