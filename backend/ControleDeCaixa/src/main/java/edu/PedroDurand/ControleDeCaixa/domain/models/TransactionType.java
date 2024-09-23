package edu.PedroDurand.ControleDeCaixa.domain.models;

public enum TransactionType {
    RECEITA("Receita"), DESPESA("Despesa");

    private String type;

    TransactionType(String type) {
        this.type = type;
    }

    public String getType(){
        return type;
    }
}