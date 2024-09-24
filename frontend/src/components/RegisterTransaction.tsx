import './RegisterTransaction.css';

export const RegisterTransaction = () => {
    return (
        <div className="registerComponent">
            <h2 id="título">Movimentação</h2>
            <form>
                <fieldset>
                    <div className="campo">
                        <label htmlFor="value"><strong>Valor: </strong></label>
                        <input type="number" name="value" id="value" required />
                    </div>

                    <div className="campo">
                        <label htmlFor="data"><strong>Data: </strong></label>
                        <input type="date" name="date" id="date" required />
                    </div>
                </fieldset>

                <div className="campo">
                    <label htmlFor="observation"><strong>Observação: </strong></label>
                    <input type="text" name="observation" id="observation" required />
                </div>

                <div className="campo">
                    <label><strong>Tipo de Movimentação: </strong></label>
                    <label>
                        <input type="radio" name="movimentacao" value="RECEITA" checked />Receita
                    </label>
                    <label>
                        <input type="radio" name="movimentacao" value="DESPESA" />Despesa
                    </label>
                </div>
            </form>
            <button className="botao" type="submit">Movimentar</button>
        </div>
    )
}