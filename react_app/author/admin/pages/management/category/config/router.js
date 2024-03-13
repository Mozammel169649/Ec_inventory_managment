import All from "../pages/All"
import CategoryLayout from "../Layoute"
import View from "../pages/View"
import setup from "./setup"
import Edit from "../pages/Edit"
import Create from "../pages/create"

const {route_prefix} = setup

export default {
    path: route_prefix,
    element:<CategoryLayout/>,
    children: [
        {
            path: "",
            element: <All></All>
        },
        {
            path: "create_category",
            element: <Create/>
        },
        {
            path: "addCategory",
            element: <View></View>
        },
        {
            path: "categoryView/:id",
            element: <View></View>
        },
        {
            path: "editCategory/:id",
            element: <Edit></Edit>
        },
    ]
}