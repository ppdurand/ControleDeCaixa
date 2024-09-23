package edu.PedroDurand.ControleDeCaixa.api.exceptions;

public class IdNotFoundException extends RuntimeException{
    public IdNotFoundException() {
        super("ID informado não existe ou não encontrado");
    }

    public IdNotFoundException(String message) {
        super(message);
    }
}
