FROM maven:3.8.5-openjdk-17-slim AS build
WORKDIR /app
COPY /src /app/src
COPY /pom.xml /app
RUN mvn -f /app/pom.xml clean package -Dmaven.test.skip

FROM openjdk:17-jdk-alpine3.14
EXPOSE 8080
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java",  "-jar",  "/app.jar"]