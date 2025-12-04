# Product API Backend

A RESTful API for managing products built with Express.js and Sequelize ORM.

## Features

- **ORM Integration**: Uses Sequelize for database operations
- **Input Validation**: Comprehensive validation with express-validator
- **Error Handling**: Centralized error handling
- **Security**: Helmet.js for security headers, CORS enabled
- **Pagination**: Support for paginated results
- **Search & Filtering**: Advanced search and filter capabilities
- **CRUD Operations**: Complete Create, Read, Update, Delete operations

## API Endpoints

### Products

- `GET /api/products` - Get all products with pagination and filtering
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### Query Parameters (for GET /api/products)

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search in name and description
- `category` - Filter by category
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter

## Product Schema

```json
{
  "id": "integer",
  "name": "string (required, max 255)",
  "description": "text (optional)",
  "price": "decimal (required, min 0)",
  "stock": "integer (default 0, min 0)",
  "category": "string (optional, max 100)",
  "image_url": "string (optional, valid URL)",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Make sure MySQL is running and create a database named `products`

3. Update database configuration in `src/config/database.js` if needed

4. Start the server:

```bash
npm start
```

The server will run on port 3000 by default.

## Example Usage

### Create a product

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High-performance laptop",
    "price": 999.99,
    "stock": 50,
    "category": "Electronics"
  }'
```

### Get products with pagination and search

```bash
curl "http://localhost:3000/api/products?page=1&limit=5&search=laptop&category=Electronics"
```

### Update a product

```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 899.99,
    "stock": 45
  }'
```

### Delete a product

```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Database

The API uses MySQL with Sequelize ORM. The `products` table will be automatically created when the server starts.

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400` - Validation errors
- `404` - Resource not found
- `500` - Internal server error

Error responses include detailed error information:

```json
{
  "error": "Validation failed",
  "details": [
    {
      "msg": "Name is required",
      "param": "name",
      "location": "body"
    }
  ]
}
```
