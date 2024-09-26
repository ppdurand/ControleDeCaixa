import { useForm } from 'react-hook-form';
import './RegisterTransaction.css';
import { log } from 'console';

export const RegisterTransaction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            const payload = {
                ...data,
                value: parseFloat(data.value), 
            };
            console.log(data)
            console.log(payload);
            const response = await fetch('http://localhost:8080/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
        

            if (response.ok) {
                console.log('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar os dados:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
        }
    }

    return (
        <div className="registerComponent">
            <h2 id="título">Movimentação</h2>
            <form>
                <fieldset>
                    <div className="campo">
                        <label htmlFor="value"><strong>Valor: </strong></label>
                        <input className={errors?.value && "input-error"} type="number" id="value" /* tratando erro */
                            {...register("value", { required: true })} />
                        {errors?.value?.type === "required" && <p className='error-message'>O valor é obrigatório</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="date"><strong>Data: </strong></label>
                        <input className={errors?.date && "input-error"} type="date" id="date" required
                            {...register("date", { required: true })} />
                        {errors?.date?.type === "required" && <p className='error-message'>A data é obrigatória</p>}
                    </div>

                </fieldset>

                <div className="campo">
                    <label htmlFor="observation"><strong>Observação: </strong>(opcional)</label>
                    <input className={errors?.observation && "input-error"} type="text" id="observation" required
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
            <button className="botao" type="submit" onClick={() => handleSubmit(onSubmit)()}>Movimentar</button>
        </div>
    )
}