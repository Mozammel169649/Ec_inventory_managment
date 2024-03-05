import All from "../pages/All"
import Layout from "../Layoute"
import View from "../pages/View"
import setup from "./setup"
import Edit from "../pages/Edit"
import Create from "../pages/create"

const {route_prefix} = setup

export default {
    path: route_prefix,
    element:<Layout/>,
    children: [
        {
            path: "",
            element: <All></All>
        },
        {
            path: "create",
            element: <Create/>
        },
        {
            path: "view/:id",
            element: <View></View>
        },
        {
            path: "edit/:id",
            element: <Edit></Edit>
        },
    ]
}