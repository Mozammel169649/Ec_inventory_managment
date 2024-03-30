import React from 'react'

function Soluation() {

    const data = [10, 11, 12, 13, 14, 15, 30, 31, 32, 33, 34, 35];
    const input = [10, 20, 13, 35, 45]
    const mdata = []

    function getmatchData(maindata, matchdata) {
        matchdata.map((ele) => {
            const data = maindata.includes(ele)
            if (data == true) {
                mdata.push(ele)
            }
            console.log(mdata);
        })
    }

    getmatchData(data, input);


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> soluation </h3>
            </center>

            <center>
                <p>show match data  : {mdata.map((e) => e + ",")}</p>
            </center>

        </div >
    )
}

export default Soluation