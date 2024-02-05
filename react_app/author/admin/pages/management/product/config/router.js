import All from "../All"
import ProductLayoute from "../Layoute"
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
    ]
}