const { useState } = React

const App = () => {
    const data = {
        onBoardingCall: { c1: "", c2: "" }, GSCA: {}
    }

    const [tabelData, setTableData] = useState(data)

    function inputHandler(event) {
        const { name, value } = event.target
        const [name1, name2] = name.split(" ")
        console.log(name1)
        setTableData((prevData) => {
            return {
                ...prevData,
                [name1]: {
                    [name2]: value
                }
            }
        })
    }

    console.log(tabelData)

    return (
        <div className="wrapper">
            <table>
                <thead>
                    <tr className='row1'>
                        <th colSpan='8'>Month1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='col1'>On BoardCalling</th>
                        <td>
                            <input type="text" name="onBoardingCall c1" defaultValue={tabelData.onBoardingCall.c1} onChange={inputHandler}></input>
                        </td>
                        <td>
                            <input type="text" ></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)