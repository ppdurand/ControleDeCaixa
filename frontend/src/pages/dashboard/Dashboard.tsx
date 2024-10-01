import { ChartTransaction } from "../../components/ChartTransactions/ChartTransactions";
import { RegisterTransaction } from "../../components/RegisterTransaction/RegisterTransaction";
import { TableTransaction } from "../../components/TableTransaction/TableTransaction";
import { Title } from "../../components/Title/Title";

export const Dashboard = () => {

    return (
        <div>
            <Title />
            <RegisterTransaction />
            <ChartTransaction />
        </div>
    ); 
}