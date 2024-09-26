import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import './TableTransaction.css';
import { COLUMNS } from "./Columns";

// Definindo a interface com as propriedades corretas
interface Item {
  id: number;
  value: number;
  observation: string;  // Corrigido o typo de "obersevation" para "observation"
  date: string;  // Supondo que a API retorna uma data como string
  // Outras propriedades de acordo com o seu JSON
}

export const TableTransaction: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
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
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.value}</td>
              <td>{item.date}</td>  {/* Supondo que a API retorne uma data */}
              <td>{item.observation}</td>  {/* Corrigido o nome da propriedade */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
