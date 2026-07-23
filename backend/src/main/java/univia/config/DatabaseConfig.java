package univia.config;

public record DatabaseConfig(
        String host,
        int port,
        String name,
        String user,
        String password,
        int poolSize,
        String sslMode,
        String channelBinding) {

    public String jdbcUrl() {
        String url = "jdbc:postgresql://%s:%d/%s".formatted(host, port, name);
        if (sslMode == null || sslMode.isBlank()) {
            return url;
        }

        url += "?sslmode=" + sslMode;
        if (channelBinding != null && !channelBinding.isBlank()) {
            url += "&channelBinding=" + channelBinding;
        }
        return url;
    }
}

