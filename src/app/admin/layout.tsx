import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home Public</NavLink>
        <NavLink href="/admin">DashBoard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/User">User</NavLink>
        <NavLink href="/admin/Oders">Oders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
