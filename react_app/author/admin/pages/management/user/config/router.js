import All from "../pages/All"
import UserLayout from "../Layoute"
import View from "../pages/View"
import setup from "./setup"
import Edit from "../pages/Edit"

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
            path: "userView/:id",
            element: <View></View>
        },
        {
            path: "editUser/:id",
            element: <Edit></Edit>
        },
    ]
}