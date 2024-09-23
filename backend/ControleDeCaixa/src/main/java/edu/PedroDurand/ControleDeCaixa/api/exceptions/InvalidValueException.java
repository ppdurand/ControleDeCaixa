package edu.PedroDurand.ControleDeCaixa.api.exceptions;

public class InvalidValueException extends RuntimeException {
    public InvalidValueException() {
        super("O valor não pode ser 0 ou negativo");
    }

    public InvalidValueException(String message) {
        super(message);
    }
}
