import { useEffect, useState } from "react";
import { ChartTransaction } from "../../components/ChartTransactions/ChartTransactions";
import { RegisterTransaction } from "../../components/RegisterTransaction/RegisterTransaction";
import { TableTransaction } from "../../components/TableTransaction/TableTransaction";
import { Title } from "../../components/Title/Title";
import axios from "axios";
import './Dashboard.css';

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
                setTable(response.data.reverse());

            })
        axios.get(`http://localhost:8080/getSum`)
            .then(response => {
                setReceita(response.data[0]);
                setDespesa(response.data[1]);
            });

    }, [data]);

    async function addTransaction(transaction: Transaction) {

        await axios.post('http://localhost:8080/add', transaction, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                setData(prevData => [transaction, ...prevData]);
            }
        })
    }

    async function deleteTransaction(id: number) {
        await axios.delete(`http://localhost:8080/delete/${id}`);
        setData((prevData) => prevData.filter(transaction => transaction.id !== id));
    }

    return (
        <div className="dashboardContainer">
            <div className="titleContainer">
                <Title />
            </div>
            <div className="content">
                <div className="register">
                    <RegisterTransaction addTransaction={addTransaction} />
                </div>
                <div className="chart">
                    <ChartTransaction receita={receita} despesa={despesa} />
                </div>
            </div>
            <div className="table">
                <TableTransaction table={table} deleteTransaction={deleteTransaction} />
            </div>
        </div>
    );
}