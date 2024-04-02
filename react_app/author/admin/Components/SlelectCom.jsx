import React, { useRef, useState } from 'react'

function SlelectCom({ data, selected, setSelected, name }) {
    const [temp, setTemp] = useState(() => [...data]);
    let seleced_list_html = useRef();

    function set(item) {
        let array = [...selected, item];
        const uniqueArray = Array.from(new Set(array.map(obj => JSON.stringify(obj))))
            .map(str => JSON.parse(str));
        setSelected(uniqueArray);
    }

    function search_item(e) {
        let value = e.target.value;
        setTemp(data.filter(i => i.title.includes(value)));
        if (value.length == 0) {
            setTemp([...data]);
        }
    }

    function remove_item(id) {
        setSelected(selected.filter(i => i.id != id));
    }

    return (
        <div>
            <div>
                <input
                    type="hidden"
                    name={name}
                    value={JSON.stringify(selected.map((i) => i.id))}

                />

                <ol
                    style={{ minHeight: '40px' }}
                    className='d-flex gap-4 border border-info rounded'>
                    {
                        selected.map((i) => <li key={i.id}>
                            <i onClick={() => remove_item(i.id)} class="bx bx-trash"></i>
                            {i.title}
                        </li>)
                    }
                </ol>
            </div>

            <div style={{ padding: '5px', border: '1px solid red' }}>
                <div>
                    <input type="text" />
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

export default SlelectCom