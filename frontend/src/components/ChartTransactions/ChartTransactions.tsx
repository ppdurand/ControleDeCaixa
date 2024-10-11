import Chart from "react-google-charts";
import './ChartTransactions.css';


export const ChartTransaction = (props: {receita: number, despesa: number}) => {
    const dataChart = [
        ["", "Receita", "Despesa"],
        [" ", props.receita, props.despesa],
    ];

    return (
        <div className="chartComponent">
            <h2 className="tituloChart">Receitas e Despesas</h2>
            <Chart className="charBar"
                chartType="Bar"
                width="100%"
                height="300px"
                data={dataChart}
                options={{
                    title: 'Receita e Despesa',
                    hAxis: { title: 'Categoria' },
                    vAxis: { title: 'Valor' },
                    chartArea: { width: '50%' },
                }}
            />
        </div>
    )
}
