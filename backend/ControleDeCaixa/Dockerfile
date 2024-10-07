FROM openjdk:17-jdk-alpine3.14
COPY . .
RUN ./mvnw clean install -DskipTests
ENTRYPOINT [ "java", "-jar", "out/artifacts/backend_jar/backend.jar" ]