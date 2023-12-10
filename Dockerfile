# Dockerfile

# Use an official nginx image
FROM nginx:alpine

# Copy static files to nginx
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
