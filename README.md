# 🚀 Fullstack Template: Symfony + API Platform + Nuxt.js + PostgreSQL + Docker

A modern starter for building **fullstack applications (API + Frontend)** using proven technologies. This project is designed for a **fast setup, scalability, and a smooth developer experience**.

---

## 🧩 Tech Stack

### 🔧 Backend

* **Symfony** – a robust PHP framework for building web applications
* **API Platform** – rapid development of REST/GraphQL APIs following best practices

### 🎨 Frontend

* **Nuxt.js** – a Vue-based framework for SSR/SPA, great for SEO and performance

### 🗄️ Database

* **PostgreSQL** – a powerful and reliable relational database

### 🐳 DevOps

* **Docker & Docker Compose** – consistent development environment and easy deployment

---

## 📁 Project Structure

```
.
├── backend/        # Symfony + API Platform
├── frontend/       # Nuxt.js app
├── compose.yml
└── README.md
```

---

## ⚙️ Requirements

* Docker
* Docker Compose
* (optional) Node.js & PHP for local development without containers

---

## 🚀 Quick Start

```bash
git clone https://github.com/your-repo/template-project.git
cd template-project

docker-compose up -d --build
```

The application will be available at:

* Frontend: http://localhost:3000
* API: http://localhost:8000/api
* Swagger: http://localhost:8000/api/docs

---

## 🧠 Backend (Symfony + API Platform)

The backend is built with Symfony and API Platform, providing:

* automatic REST/GraphQL endpoint generation
* Swagger/OpenAPI documentation
* data validation
* integration with Doctrine ORM

Example endpoint:

```http
GET /api/products
```

---

## 🎨 Frontend (Nuxt.js)

The frontend uses Nuxt.js:

* SSR or SPA modes
* easy API integration
* modular component structure
* TypeScript support (optional)

Run in development mode:

```bash
cd frontend
npm install
npm run dev
```

---

## 🗄️ Database (PostgreSQL)

* relational database
* managed via Doctrine ORM
* migrations:

```bash
docker exec -it backend php bin/console doctrine:migrations:migrate
```

---

## 🐳 Docker – Development Environment

The project includes a ready-to-use configuration:

* `nginx` / `php-fpm` for Symfony
* `node` for Nuxt
* `postgres` as the database

### Services:

* backend (Symfony)
* frontend (Nuxt)
* database (Postgres)

### Useful commands:

```bash
# stop containers
docker-compose down

# rebuild
docker-compose up -d --build

# logs
docker-compose logs -f
```

---

## 🔐 Environment Configuration

Use `.env` files:

### Backend (`backend/.env`)

```
DATABASE_URL=postgresql://user:password@db:5432/app
```

### Frontend (`frontend/.env`)

```
API_BASE_URL=http://localhost:8000/api
```

---

## 📦 Roadmap / Possible Extensions

* 🔑 JWT Authentication (e.g. LexikJWT)
* 🧪 Testing (PHPUnit + Cypress)
* 📊 Monitoring (Prometheus / Grafana)
* ☁️ CI/CD (GitHub Actions)

---

## 🤝 Contributing

Pull requests are welcome! If you have ideas for improvements — feel free to contribute 🚀

---

## 📄 License

MIT

---

## 💡 Why this template?

✅ fast project setup
✅ ready-to-use fullstack environment
✅ standards-compliant
✅ easy deployment

---

**Happy coding! 👨‍💻🔥**
