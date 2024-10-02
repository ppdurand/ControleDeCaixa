import { useEffect, useState } from "react";
import { ChartTransaction } from "../../components/ChartTransactions/ChartTransactions";
import { RegisterTransaction } from "../../components/RegisterTransaction/RegisterTransaction";
import { TableTransaction } from "../../components/TableTransaction/TableTransaction";
import { Title } from "../../components/Title/Title";
import axios from "axios";

interface Transaction {
    id: number;
    value: number;
    observation: string;
    date: string;
    type: string;
}

export const Dashboard = () => {
    const [data, setData] = useState<Transaction[]>([])
    const [table, setTable] = useState<Transaction[]>([])
    const [receita, setReceita] = useState<number>(0)
    const [despesa, setDespesa] = useState<number>(0)

    useEffect(() => {
        axios.get('http://localhost:8080/get')
            .then(response => {
                setTable(response.data);

            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
            });

        axios.get(`http://localhost:8080/getSum`)
        .then(response => {
            setReceita(response.data[0]);
            setDespesa(response.data[1]);
        });

    }, [data]);

    async function addTransaction(transaction: Transaction) {

        const response = await axios.post('http://localhost:8080/add', transaction, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(response => {
            if (response.status == 200) {
                setData(prevData => [...prevData, transaction]);
            }
        })
    }

    async function deleteTransaction(id: number) {
        const response = await axios.delete(`http://localhost:8080/delete/${id}`)
            .then(response => {
                if (response.status != 200) {
                    console.error('Erro ao enviar os dados:', response.statusText);
                }
            });
        console.log('Dados enviados com sucesso!');
        setData((prevData) => prevData.filter(transaction => transaction.id !== id));
    }

    return (
        <div>
            <Title />
            <RegisterTransaction addTransaction={addTransaction} />
            <TableTransaction table={table} deleteTransaction={deleteTransaction} />
            <ChartTransaction receita={receita} despesa={despesa} />
        </div>
    );
}