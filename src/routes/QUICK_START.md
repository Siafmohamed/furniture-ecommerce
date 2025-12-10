# Quick Start Guide

## 🚀 Getting Started

The routing system is already set up and ready to use! Here's what you need to know:

### 1. The Router is Active

The router is configured in `App.tsx` and will handle all navigation automatically.

### 2. Available Routes

**Public Routes:**
- `/` - Home page
- `/shop` - Products page
- `/product/:id` - Product detail (dynamic route)
- `/category/:slug` - Category page (dynamic route)
- `/about` - About page
- `/contact` - Contact page

**Auth Routes:**
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/auth/forgot-password` - Password reset

**Protected Routes (Requires Auth):**
- `/dashboard` - User dashboard
- `/dashboard/orders` - User orders
- `/dashboard/profile` - User profile
- `/dashboard/wishlist` - User wishlist

**Admin Routes (Requires Admin Role):**
- `/admin` - Admin dashboard
- `/admin/products` - Manage products
- `/admin/orders` - Manage orders
- `/admin/users` - Manage users

### 3. Using Navigation

```tsx
import { Link } from 'react-router-dom';

// Simple link
<Link to="/shop">Shop</Link>

// With navigation hook
import { useNavigation } from '@/routes';
const { goTo, goToProduct } = useNavigation();
goToProduct("123"); // Navigate to /product/123
```

### 4. Accessing Route Parameters

```tsx
import { useParams } from 'react-router-dom';
import { ProductParams } from '@/routes/types';

function ProductPage() {
  const { id } = useParams<ProductParams>();
  // Use id...
}
```

### 5. Testing Protected Routes

To test protected routes, update the mock values in:
- `routes/guards/AuthGuard.tsx` - Set `isAuthenticated = true`
- `routes/guards/RoleGuard.tsx` - Set `userRole = "admin"` or `"user"`

### 6. Integrating Real Authentication

1. Update `routes/utils/authStore.ts` with your actual auth logic
2. Update `routes/guards/AuthGuard.tsx` to use the auth store
3. Update `routes/guards/RoleGuard.tsx` to use the auth store
4. Update login/register pages to call the auth store

### 7. Adding New Routes

1. Create page component in `routes/pages/`
2. Add lazy import in `routes/routes.tsx`
3. Add route configuration with Suspense wrapper
4. Optionally add to navigation menu

## 📚 Full Documentation

See `README.md` for complete documentation.








