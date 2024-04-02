// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { get_all_data, get_single_data, create_data, update_data, delete_data } from '../redux/features/user/dataSlice';

import { useEffect, useState } from "react"
import SlelectCom from "../Components/SlelectCom"
import Select from "../Components/Select"
import { useDispatch, useSelector } from "react-redux"
import { get_all_supplier } from "../redux/features/supplier/supplierSlice";


let data = [
    {
        title: "cup",
        id: 1,
    },
    {
        title: "mouse",
        id: 2,
    },
    {
        title: "monitor",
        id: 3,
    },
]

let supplierData = []

function Dashboard() {
    const [selected, setSelected] = useState([
        {
            title: "mouse",
            id: 2,
        },
        {
            title: "monitor",
            id: 3,
        },

    ])

    const [supplier, setSupplier] = useState({})

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_supplier())
    })

    const suppliers = useSelector(state => state.supplier.suppliers);
    if (suppliers) {
        suppliers.map((item) => supplierData.push({ title: item.name, id: item._id, }))
    }
    // console.log(supplierData);
    return <div>
        <h2>Admin Dashboard</h2>
        <SlelectCom data={data} selected={selected} setSelected={setSelected} name={"sample_data"} />
        <h2 className="pt-3">Admin Dashboard</h2>
        <Select data={supplierData} supplier={supplier} setSupplier={setSupplier}/>
    </div>


    // const dispatch = useDispatch();
    // const store = useSelector(state => state['data']);

    // useEffect(() => {
    //     dispatch(get_all_data());
    // }, [])

    // function deleteUser(i) {
    //     dispatch(delete_data({ id: i.a }));
    //     dispatch(get_all_data());
    // }
    // return (
    //     <div>
    //         admin dashboard
    //         <h5>single data = {store.single_data.a}</h5>
    //         <ul>
    //             {
    //                 store.data_list.map((i, k) => <li key={k}>
    //                     {i.a}
    //                     <button onClick={() => dispatch(get_single_data({ id: i.a }))}>get {i.a} </button>
    //                     <button onClick={() => deleteUser(i)}>delete {i.a} </button>
    //                 </li>)
    //             }
    //         </ul>
    //         <form onSubmit={(e) => { e.preventDefault(); dispatch(create_data(new FormData(e.target))) }}>
    //             <input name="name" value="asdf" />
    //             <input name="number" value={Math.random()} />
    //             <button>submit</button>
    //         </form>
    //         <form onSubmit={(e) => { e.preventDefault(); dispatch(update_data({id: 2, form: new FormData(e.target)})) }}>
    //             <input name="name" value="edit" />
    //             <input name="number" value={Math.random()} />
    //             <button>submit</button>
    //         </form>
    //     </div>
    // )
}

export default Dashboard