from node:10.13-alpine
RUN mkdir app
WORKDIR app
COPY . .
RUN npm install
EXPOSE 8181
CMD node index