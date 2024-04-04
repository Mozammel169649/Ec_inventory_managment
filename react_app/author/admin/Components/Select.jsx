import React, { useEffect, useRef, useState } from 'react'

function Select(props) {
    const { data , supplier, setSupplier} = props ;
    const [temp, setTemp] = useState([]);

    useEffect(()=>{
        setTemp(data)
    },[data])

    useEffect(()=>{
        console.log("supplier" ,supplier);
    },[supplier])


    // let seleced_list_html = useRef();

    function set(item) {
        let array = [...supplier, item];
        const uniqueArray = Array.from(new Set(array.map(obj => JSON.stringify(obj))))
            .map(str => JSON.parse(str));
            setSupplier(uniqueArray);
    }

    function search_item(e) {
        let value = e.target.value;
        setTemp(data.filter(i => i.title.includes(value)));
        if (value.length == 0) {
            setTemp([...data]);
        }
    }

    function remove_item(id) {
        setSupplier(supplier.filter(i => i.id != id));
    }

    return (
        <div>
            <div>
                <ol
                    style={{ minHeight: '40px' }}
                    className='d-flex gap-4 border border-info rounded'>
                    {
                        supplier.map((i) => <li key={i.id}>
                            <i onClick={() => remove_item(i.id)} class="bx bx-trash"></i>
                            {i.title}
                        </li>)
                    }
                </ol>
            </div>

            <div style={{ padding: '5px', border: '1px solid red' }}>
                <div>
                    <input onKeyUp={(e) => search_item(e)}  type="text" />
                </div>
                <ul>
                    {
                        temp.map((i) => <li onClick={() => set(i)} key={i.id}>
                            {i.title}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Select