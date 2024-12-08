FROM node:20-alpine as build


WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

# Pass environment variable for React
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]