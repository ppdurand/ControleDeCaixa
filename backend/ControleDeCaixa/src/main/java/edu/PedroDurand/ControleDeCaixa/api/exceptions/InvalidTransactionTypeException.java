package edu.PedroDurand.ControleDeCaixa.api.exceptions;

public class InvalidTransactionTypeException extends RuntimeException {
    public InvalidTransactionTypeException() {
        super("O tipo é invalido");
    }

    public InvalidTransactionTypeException(String message) {
        super(message);
    }
}
