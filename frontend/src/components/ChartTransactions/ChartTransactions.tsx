import './ChartTransactions.css';
import { Column, G2, Chart, Pie } from "@ant-design/plots";


export const ChartTransaction = (props: { graph: any }) => {
    const config = {
        data: props.graph,
        xField: 'type',
        yField: 'value',
        colorField: 'type',
        color: ['#00FF7F', '#B22222']
    }
    return (
        <div className="chartComponent">
            <h2 className="tituloChart">Receitas e Despesas</h2>
            <Column {...config} />
        </div>
    )
}