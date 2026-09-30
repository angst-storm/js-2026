FROM nginx:1.31-alpine3.24

# Copy custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the HTML pages
COPY src/ /usr/share/nginx/html/

# Copy the generated SSL certificates
COPY certs/ /etc/nginx/certs/

# Expose HTTP and HTTPS ports
EXPOSE 80 443
