# Routing System Documentation

A complete, modern routing system for React + TypeScript using React Router v7, following best practices in 2025.

## 📁 Folder Structure

```
src/routes/
├── types.ts                 # TypeScript types for routes
├── routes.tsx               # Main route configuration with code splitting
├── index.ts                 # Barrel exports
├── guards/                  # Route protection components
│   ├── AuthGuard.tsx       # Authentication guard
│   ├── RoleGuard.tsx       # Role-based access guard
│   ├── ProtectedRoute.tsx  # Combined guard component
│   └── index.ts
├── layouts/                 # Layout components for nested routes
│   ├── PublicLayout.tsx    # Public pages layout
│   ├── AuthLayout.tsx       # Authentication pages layout
│   ├── DashboardLayout.tsx # User dashboard layout
│   ├── AdminLayout.tsx      # Admin panel layout
│   └── index.ts
├── pages/                   # Example pages
│   ├── auth/               # Authentication pages
│   ├── dashboard/          # User dashboard pages
│   ├── admin/              # Admin pages
│   └── [other pages]
├── hooks/                   # Custom routing hooks
│   ├── useNavigation.ts    # Type-safe navigation hook
│   ├── useDocumentTitle.ts # Document title management
│   └── index.ts
└── utils/                   # Utilities
    └── authStore.ts        # Example auth store (Zustand)
```

## 🚀 Features

### ✅ Code Splitting
All routes are lazy-loaded using `React.lazy()` and `Suspense` for optimal performance and smaller bundle sizes.

### ✅ Route Guards
- **AuthGuard**: Protects routes requiring authentication
- **RoleGuard**: Protects routes requiring specific user roles
- **ProtectedRoute**: Combines both guards

### ✅ Nested Routes
Routes are organized hierarchically with layout components using React Router's nested routing.

### ✅ TypeScript Support
Full type safety with custom types for route parameters, query strings, and navigation.

### ✅ Dynamic Routes
Examples of dynamic routes with parameters (`/product/:id`, `/category/:slug`).

## 📖 Usage

### Basic Setup

The router is already configured in `App.tsx`:

```tsx
import { AppRouter } from './routes/routes';

function App() {
  return <AppRouter />;
}
```

### Adding a New Route

1. **Create the page component** (with lazy loading):

```tsx
// routes/pages/NewPage.tsx
const NewPage = lazy(() => import('./NewPage'));
```

2. **Add route to `routes.tsx`**:

```tsx
{
  path: "new-page",
  element: (
    <Suspense fallback={<LoadingFallback />}>
      <NewPage />
    </Suspense>
  ),
  meta: { title: "New Page", showInNav: true },
}
```

### Using Route Guards

Wrap protected routes with `ProtectedRoute`:

```tsx
{
  path: "/protected",
  element: (
    <ProtectedRoute meta={{ requiresAuth: true }}>
      <ProtectedPage />
    </ProtectedRoute>
  ),
}
```

For role-based access:

```tsx
{
  path: "/admin-only",
  element: (
    <ProtectedRoute meta={{ requiresAuth: true, requiredRoles: ["admin"] }}>
      <AdminPage />
    </ProtectedRoute>
  ),
}
```

### Using Navigation Hooks

```tsx
import { useNavigation, useRouteParams, useSearchParamsTyped } from '@/routes';

function MyComponent() {
  const { goTo, goToProduct, goBack } = useNavigation();
  const { id } = useRouteParams<ProductParams>();
  const { getParam, setParam } = useSearchParamsTyped();

  return (
    <button onClick={() => goToProduct("123")}>
      View Product
    </button>
  );
}
```

### Dynamic Routes

Access route parameters:

```tsx
import { useParams } from 'react-router-dom';
import { ProductParams } from '@/routes/types';

function ProductPage() {
  const { id } = useParams<ProductParams>();
  // id is typed as string | undefined
}
```

Access query parameters:

```tsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const page = searchParams.get('page');
}
```

## 🔐 Authentication Integration

### Step 1: Update Auth Guards

Edit `guards/AuthGuard.tsx` and `guards/RoleGuard.tsx` to use your actual auth store:

```tsx
import { useAuthStore } from "../utils/authStore";

const useAuth = () => {
  const { isAuthenticated, user } = useAuthStore();
  return { isAuthenticated, user };
};
```

### Step 2: Update Auth Store

Replace the mock implementation in `utils/authStore.ts` with your actual authentication logic (API calls, token management, etc.).

### Step 3: Update Login/Register Pages

Implement actual authentication in `pages/auth/LoginPage.tsx` and `pages/auth/RegisterPage.tsx`:

```tsx
const { login } = useAuthStore();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await login(email, password);
  navigate(from, { replace: true });
};
```

## 🎨 Layouts

### PublicLayout
Used for public pages (home, shop, about, contact). Includes header and footer.

### AuthLayout
Minimal layout for authentication pages without header/footer.

### DashboardLayout
Layout for authenticated user pages with sidebar navigation.

### AdminLayout
Layout for admin-only pages with admin-specific navigation.

## 📝 Route Types

All route-related types are defined in `types.ts`:

- `UserRole`: User role types ("admin" | "user" | "guest")
- `RouteMeta`: Route metadata for guards and navigation
- `RouteConfig`: Route configuration interface
- `ProductParams`: Parameters for product routes
- `CategoryParams`: Parameters for category routes
- `SearchQueryParams`: Query parameters for search

## 🔄 Route Structure

```
/ (PublicLayout)
  ├── / (Home)
  ├── /shop (Products)
  ├── /product/:id (Product Detail)
  ├── /category/:slug (Category)
  ├── /about (About)
  └── /contact (Contact)

/auth (AuthLayout)
  ├── /auth/login
  ├── /auth/register
  └── /auth/forgot-password

/dashboard (DashboardLayout + ProtectedRoute)
  ├── /dashboard (Dashboard)
  ├── /dashboard/orders
  ├── /dashboard/profile
  └── /dashboard/wishlist

/admin (AdminLayout + ProtectedRoute + RoleGuard)
  ├── /admin (Admin Dashboard)
  ├── /admin/products
  ├── /admin/orders
  └── /admin/users

/access-denied (Access Denied Page)
* (404 Not Found)
```

## 🛠️ Best Practices

1. **Always use lazy loading** for route components to enable code splitting
2. **Use TypeScript types** for route parameters and navigation
3. **Protect sensitive routes** with appropriate guards
4. **Use layouts** to avoid code duplication
5. **Update document titles** using `useDocumentTitle` hook
6. **Handle loading states** with Suspense fallbacks
7. **Use nested routes** for related pages (dashboard, admin)

## 🐛 Troubleshooting

### Routes not working
- Check that `AppRouter` is used in `App.tsx`
- Verify route paths match exactly (case-sensitive)
- Check browser console for errors

### Guards not redirecting
- Ensure auth store is properly integrated
- Check that `isAuthenticated` and `user.role` are correctly set
- Verify route meta configuration

### Code splitting not working
- Ensure all route components use `React.lazy()`
- Check that Suspense boundaries are in place
- Verify build output for separate chunks

## 📚 Additional Resources

- [React Router v7 Documentation](https://reactrouter.com/)
- [React.lazy() Documentation](https://react.dev/reference/react/lazy)
- [TypeScript with React Router](https://reactrouter.com/en/main/start/overview#type-safety)











