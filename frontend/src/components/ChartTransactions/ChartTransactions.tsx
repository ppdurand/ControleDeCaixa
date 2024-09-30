import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import './ChartTransaction.css';


export const ChartTransaction = () => {
    const [receita, setReceita] = useState<number>();
    const [despesa, setDespesa] = useState<number>();

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/getSum`); 
            const result = response.data;
            setReceita(result[0]);
            console.log(receita)
            setDespesa(result[1]);
            console.log(despesa)

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => { fetchData(); }, []);

    const dataChart = [
        ["", "Receita", "Despesa"],
        [" ", receita, despesa],
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
