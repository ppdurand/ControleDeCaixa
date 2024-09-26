import { RegisterTransaction } from "../../components/RegisterTransaction/RegisterTransaction";
import { TableTransaction } from "../../components/TableTransaction/TableTransaction";

export const Dashboard = () => {

    return (
        <div>
            <h1>Controle de Caixa</h1>
            <RegisterTransaction />
            <TableTransaction />
        </div>
    ); 
}