import './ChartTransactions.css';
import { Column, G2, Chart} from "@ant-design/plots";


export const ChartTransaction = (props: { receita: number, despesa: number }) => {
    const data = [
        { type: 'Receita', value: props.receita },
        { type: 'Despesa', value: props.despesa }
    ];

    const config = {
        data,
        xField: 'type',
        yField: 'value',
        group: true, colorField: 'type',
        color: ['#5353EC', '#FF4D4F'],
        style: {
            inset: 5,
        },
        onReady: (plot: { chart: G2.Chart }) => {
            const {chart} = plot;
            try {
                chart.on('afterrender', () => {});
            } catch (e) {
                console.error(e);
            }
        }
    }
    return (
        <div className="chartComponent">
            <h2 className="tituloChart">Receitas e Despesas</h2>
            <Column {...config} />
        </div>
    )
}