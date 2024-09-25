import { useForm } from 'react-hook-form';
import './RegisterTransaction.css';

export const RegisterTransaction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="registerComponent">
            <h2 id="título">Movimentação</h2>
            <form>
                <fieldset>
                    <div className="campo">
                        <label htmlFor="value"><strong>Valor: </strong></label>
                        <input className={errors?.value && "input-error"} type="number" id="value" required /* tratando erro */
                            {...register("name", { required: true })} />
                        {errors?.value?.type === "required" && <p className='error-message'>O valor é obrigatório</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="data"><strong>Data: </strong></label>
                        <input className={errors?.date && "input-error"} type="date" id="date" required
                            {...register("date", { required: true })} />
                        {errors?.date?.type === "required" && <p className='error-message'>A data é obrigatória</p>}
                    </div>

                </fieldset>

                <div className="campo">
                    <label htmlFor="observation"><strong>Observação: </strong>(opcional)</label>
                    <input className={errors?.observation && "input-error"} type="text" id="observation" required
                        {...register("observation",  {maxLength: 250})} />
                    {errors?.date?.type === "maxLength" && <p className='error-message'>Digite menos que 250 caracteres</p>}
                </div>

                <div className="campoMov">
                    <label><strong>Tipo de Movimentação: </strong></label>
                    <label>
                        <input type="radio" value="RECEITA" checked
                            {...register("movimentacao")} />Receita
                    </label>
                    <label>
                        <input type="radio" value="DESPESA"
                            {...register("movimentacao")} />Despesa
                    </label>
                </div>
            </form>
            <button className="botao" type="submit" onClick={() => handleSubmit(onSubmit)()}>Movimentar</button>
        </div>
    )
}