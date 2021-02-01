# Stage 0: compile angular frontend
FROM node:latest as build
LABEL stage="builder"
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build --prod

# Stage 1: serve app with nginx server
FROM nginx:latest
COPY --from=build /app/dist/Davidoc  /usr/share/nginx/html
#COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80