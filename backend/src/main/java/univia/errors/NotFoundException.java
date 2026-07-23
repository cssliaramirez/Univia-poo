package univia.errors;

public final class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}
