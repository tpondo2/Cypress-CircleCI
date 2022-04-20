FROM cypress/included:9.5.2

WORKDIR /app

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npx cypress run