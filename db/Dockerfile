# Dockerfile for PostgreSQL database

# base image
FROM postgres:13.0

# run sql on init
ADD create.sql /docker-entrypoint-initdb.d
