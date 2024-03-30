import All from "../All"
import Create from "../Create"
import Edit from "../Edit"
import ProductLayoute from "../Layoute"
import Soluation from "../Soluation"
import View from "../View"
import setup from "./setup"

const { route_prefix } = setup

export default {
    path: route_prefix,
    element: <ProductLayoute/>,
    children: [
        {
            path: "",
            element: <All></All>
        },
        {
            path: "edit/:id",
            element: <Edit></Edit>
        },
        {
            path: "view/:id",
            element: <View></View>
        },
        {
            path: "soluation",
            element: <Soluation></Soluation>
        },
        {
            path: "create",
            element: <Create></Create>
        }
       
    ]
}