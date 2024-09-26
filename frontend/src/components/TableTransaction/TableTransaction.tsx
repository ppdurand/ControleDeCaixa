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
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Data</th>
            <th>Observação</th>
            <th>Tipo</th>
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
