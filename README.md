# Laravel Next.js Task Manager

A full-stack task management application built with Laravel (backend) and Next.js (frontend). This application allows users to create, view, and manage tasks with different statuses (pending, in progress, done).

## Project Structure

```
laravel-next-task-manager/
├── laravel-backend/     # Laravel API backend
└── next-frontend/       # Next.js frontend application
```

## Features

- **Task Management**: Create and view tasks
- **Status Tracking**: Tasks can have three statuses: pending, in progress, done
- **RESTful API**: Laravel backend provides API endpoints
- **Modern Frontend**: Next.js with React 19 and Tailwind CSS
- **Database**: MySQL database with migrations

## Prerequisites

Before running this application, ensure you have the following installed:

- **PHP** >= 8.2
- **Composer** (PHP dependency manager)
- **Node.js** >= 18.x
- **npm** or **yarn**
- **MySQL** >= 8.0
- **Docker** (optional, for Laravel Sail)

## Database Setup

### Option 1: Using Laravel Sail (Docker - Recommended)

1. Navigate to the Laravel backend directory:
   ```bash
   cd laravel-backend
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

4. Start the Docker containers:
   ```bash
   ./vendor/bin/sail up -d
   ```

5. Generate application key:
   ```bash
   ./vendor/bin/sail artisan key:generate
   ```

6. Run database migrations:
   ```bash
   ./vendor/bin/sail artisan migrate
   ```

7. (Optional) Seed the database with sample tasks:
   ```bash
   ./vendor/bin/sail artisan migrate --seed
   # Or run seeding separately:
   ./vendor/bin/sail artisan db:seed
   ```

### Option 2: Local MySQL Setup

1. Create a MySQL database:
   ```sql
   CREATE DATABASE laravel_backend;
   ```

2. Navigate to the Laravel backend directory:
   ```bash
   cd laravel-backend
   ```

3. Install PHP dependencies:
   ```bash
   composer install
   ```

4. Copy and configure the environment file:
   ```bash
   cp .env.example .env
   ```

5. Update the `.env` file with your database credentials:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel_backend
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

6. Generate application key:
   ```bash
   php artisan key:generate
   ```

7. Run database migrations:
   ```bash
   php artisan migrate
   ```

8. (Optional) Seed the database with sample tasks:
   ```bash
   php artisan migrate --seed
   # Or run seeding separately:
   php artisan db:seed
   ```

## Running the Application

### Backend (Laravel API)

#### Using Laravel Sail (Docker):
```bash
cd laravel-backend
./vendor/bin/sail up -d
```
The API will be available at: `http://localhost`

#### Using Local PHP Server:
```bash
cd laravel-backend
php artisan serve
```
The API will be available at: `http://localhost:8000`

### Frontend (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd next-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the API URL in `.env.local`:
   ```env
   # For Laravel Sail (Docker)
   NEXT_PUBLIC_API_URL=http://localhost/api
   
   # For local PHP server
   # NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at: `http://localhost:3000`

## API Endpoints

The Laravel backend provides the following API endpoints:

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task

### Task Model Structure

```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "status": "pending" // "pending", "in progress", or "done"
}
```

## Development

### Backend Development

- **Migrations**: Located in `laravel-backend/database/migrations/`
- **Models**: Located in `laravel-backend/app/Models/`
- **Controllers**: Located in `laravel-backend/app/Http/Controllers/`
- **Form Requests**: Located in `laravel-backend/app/Http/Requests/` (e.g., `StoreTaskRequest`)
- **Routes**: Defined in `laravel-backend/routes/api.php`

### Frontend Development

- **Components**: Located in `next-frontend/src/components/`
- **Pages**: Located in `next-frontend/src/app/`
- **Styling**: Uses Tailwind CSS
- **TaskList Component**: Based on Tailwind UI "Narrow with badges" from [Tailwind CSS Stacked Lists](https://tailwindcss.com/plus/ui-blocks/application-ui/lists/stacked-lists)

## Technology Stack

### Backend
- **Laravel** 12.x
- **PHP** 8.2+
- **MySQL** 8.0
- **Laravel Sail** (Docker)

### Frontend
- **Next.js** 15.5.2
- **React** 19.1.0
- **Tailwind CSS** 4.x
- **Turbopack** (for faster builds)