# Microservices-based E-commerce Application

This project is a microservices-based system for managing a simple e-commerce application. It consists of several microservices, each responsible for different aspects of the application, including user authentication, product management, and order processing. The system emphasizes concurrency control, clustering for high availability, and RESTful API communication between microservices.

## Table of Contents

- [Microservices Architecture](#microservices-architecture)
- [Concurrency Control](#concurrency-control)
- [Clustering and High Availability](#clustering-and-high-availability)
- [Database Integration](#database-integration)
- [APIs and Communication](#apis-and-communication)
- [Authentication and Authorization](#authentication-and-authorization)
- [General Requirements](#general-requirements)
- [Bonus Features](#bonus-features)
- [Submission](#submission)
- [Assessment Criteria](#assessment-criteria)

## Microservices Architecture

The system is divided into the following microservices:

- **User Authentication Service**: Responsible for user registration, login, and authentication.
- **Product Management Service**: Handles CRUD operations for products and product inventory management.
- **Order Processing Service**: Manages order creation, retrieval, updates, and fulfillment.

Each microservice is implemented as a separate Node.js application using Express.js framework.

## Concurrency Control

Concurrency control is implemented using optimistic locking mechanism for product management service. It ensures that multiple users can safely read and update product information without conflicts.

## Clustering and High Availability

Clustering mechanism is implemented using PM2 process manager for Node.js applications. The system is deployed on multiple nodes or containers to ensure high availability. In case of a node/container failure, the system remains available.

## Database Integration

PostgreSQL database is used for storing user information, product data, and order history. The database schema is designed to accommodate these entities, and appropriate queries are implemented within the microservices.

## APIs and Communication

RESTful APIs are developed for each microservice using Express.js framework. These APIs allow microservices to communicate with each other synchronously or asynchronously. Endpoints are provided for user registration, product CRUD, and order management.

## Authentication and Authorization

User authentication and authorization are implemented using JWT (JSON Web Tokens) for accessing protected endpoints. Users can only access their own orders and the products they are authorized to view/update.

## General Requirements

- Code Quality: Clean, well-documented, and maintainable code is written following best practices.
- Version Control: Git is used to track changes in the code, and the project is hosted on GitHub.
- Error Handling: Comprehensive error handling and logging are implemented for the microservices.
- Testing: Unit tests are written for critical components and concurrency control mechanisms.
- Deployment: Clear instructions are provided for deploying and running the microservices on a local development environment or a cloud platform.

## Bonus Features

- API rate limiting to prevent abuse.
- Message queues for asynchronous communication between microservices.
- Caching strategies to improve system performance.
- Monitoring and alerting solutions using Prometheus and Grafana.
