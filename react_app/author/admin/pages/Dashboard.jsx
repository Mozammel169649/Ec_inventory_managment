// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { get_all_data, get_single_data, create_data, update_data, delete_data } from '../redux/features/user/dataSlice';

function Dashboard() {
    <h2>Admin Dashboard</h2>
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