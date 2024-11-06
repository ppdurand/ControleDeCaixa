import './ChartTransactions.css';
import { Column, G2, Chart } from "@ant-design/plots";


export const ChartTransaction = (props: { receita: number, despesa: number }) => {
    const data = [
        { type: 'Receita', value: props.receita },
        { type: 'Despesa', value: props.despesa }
    ];

    const config = {
        data,
        xField: 'type',
        yField: 'value',
        colorField: 'type',
        color: '#00FF7F' + '#B22222',
        // onReady: (plot: { chart: G2.Chart }) => {
        //     const { chart } = plot;
        //     chart.on('afterrender', () => { });
        // }
    }
    return (
        <div className="chartComponent">
            <h2 className="tituloChart">Receitas e Despesas</h2>
            <Column {...config} />
        </div>
    )
}