import { useForm } from 'react-hook-form';
import './RegisterTransaction.css';
import { TableTransaction } from '../TableTransaction/TableTransaction';
import { useState } from 'react';

export const RegisterTransaction = (props: {addTransaction: any}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[refreshData, setRefreshData] = useState(true);

    const onSubmit = async (data: any) => {
        try {
            props.addTransaction(data);
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
        }
    }

    return (
        <div className="registerComponent">
            <h2 className="título">Movimentações</h2>
            <form>
                <fieldset>
                    <div className="campo">
                        <label htmlFor="value"><strong>Valor: </strong></label>
                        <input placeholder="Digite o valor" className={errors?.value && "input-error"} type="number" id="value" /* tratando erro */
                            {...register("value", { required: true })} />
                        {errors?.value?.type === "required" && <p className='error-message'>O valor é obrigatório</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="date"><strong>Data: </strong></label>
                        <input placeholder="Selecione a data" className={errors?.date && "input-error"} type="date" id="date" required
                            {...register("date", { required: true })} />
                        {errors?.date?.type === "required" && <p className='error-message'>A data é obrigatória</p>}
                    </div>

                </fieldset>

                <div className="campo">
                    <label htmlFor="observation"><strong>Observação: </strong>(opcional)</label>
                    <input placeholder="Digite a observação" className={errors?.observation && "input-error"} type="text" id="observation" required
                        {...register("observation",  {maxLength: 250})} />
                    {errors?.observation?.type === "maxLength" && <p className='error-message'>Digite menos que 250 caracteres</p>}
                </div>

                <div className="campoMov">
                    <label><strong>Tipo de Movimentação: </strong></label>
                    <label>
                        <input type="radio" value="RECEITA" checked
                            {...register("type")} />Receita
                    </label>
                    <label>
                        <input type="radio" value="DESPESA"
                            {...register("type")} />Despesa
                    </label>
                </div>
            </form>
            <button className="botao" type="button" onClick={() => handleSubmit(onSubmit)()}>Movimentar</button>
        </div>
    )
}