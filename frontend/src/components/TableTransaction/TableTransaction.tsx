import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import './TableTransaction.css';
import { COLUMNS } from "./Columns";

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction: React.FC = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const columns = useMemo(() => COLUMNS, []);

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => {
        console.log("Dados recebidos: ", response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);



  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th id="valueCol">Valor</th>
            <th id="dateCol">Data</th>
            <th id="observationCol">Observação</th>
            <th id="typeCol">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.value}</td>
              <td>{transaction.date}</td>
              <td>{transaction.observation}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
