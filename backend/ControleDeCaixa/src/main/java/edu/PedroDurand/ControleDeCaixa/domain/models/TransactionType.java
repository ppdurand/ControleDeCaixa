package edu.PedroDurand.ControleDeCaixa.domain.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum TransactionType {
    RECEITA("Receita"), DESPESA("Despesa");

    private String type;

    TransactionType(String type) {
        this.type = type;
    }

    @JsonValue
    public String getType() {
        return type;
    }

    @JsonCreator
    public static TransactionType fromString(String type) {
        for (TransactionType transactionType : TransactionType.values()) {
            if (transactionType.getType().equalsIgnoreCase(type)) {
                return transactionType;
            }
        }
        throw new IllegalArgumentException("Tipo desconhecido: " + type);
    }
}