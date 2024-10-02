import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import './ChartTransaction.css';


export const ChartTransaction = (props: {receita: number, despesa: number}) => {



    const dataChart = [
        ["", "Receita", "Despesa"],
        [" ", props.receita, props.despesa],
    ];

    return (
        <div className="chart">
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
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
