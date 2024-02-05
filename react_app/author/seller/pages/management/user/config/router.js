import All from "../All"
import UserLayout from "../Layoute"
import setup from "./setup"

const {route_prefix} = setup

export default {
    path: route_prefix,
    element:<UserLayout/>,
    children: [
        {
            path: "",
            element: <All></All>
        },
        {
            path: "all",
            element: <All></All>
        },
    ]
}