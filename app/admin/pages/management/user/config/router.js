import Layouts from "../../../../layouts/Layouts";
import All from "../All";
import setup from "./setup";

const {route_prefix} = setup;

export default {
    path: route_prefix,
    element: <Layouts></Layouts>,
    children: [
        {
            path: "",
            element: <All></All>
        },
    ]
}