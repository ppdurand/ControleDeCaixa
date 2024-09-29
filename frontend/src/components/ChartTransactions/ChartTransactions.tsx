import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import './ChartTransaction.css';


export const ChartTransaction = () => {
    const [receita, setReceita] = useState<number | null>(null);
    const [despesa, setDespesa] = useState<number | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://localhost:8080/getSum`); // Insira seu endpoint aqui
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

    const dataTest = [
        ["", "Receita", "Despesa"],
        [" ", 90, 50],
    ]
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
                data={dataTest}
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
