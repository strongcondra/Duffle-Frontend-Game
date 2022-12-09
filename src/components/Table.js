import {useState, useEffect} from 'react';
import './css/Table.scss';

export default function Table({theadArray, dataArray}) {

    const [columnCount, setColumnCount] = useState(0);

    useEffect(() => {

        setColumnCount(theadArray.length);

    }, []);

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {theadArray.map((thead, i) => {
                        return <th key={i}>{thead}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {dataArray.map((dataRow, i) => {
                    return (<tr key={i}>
                        {dataRow.map((data, j) => {
                            return <td key={j}>{data}</td>
                        })}
                    </tr>);
                })}
            </tbody>
        </table>
    );
}
