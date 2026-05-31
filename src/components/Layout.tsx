import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { brand, routes } from "../data/kinsilverOntology";

const navRoutes = routes.filter((route) => route.path !== "/faq");

export function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-40 border-b border-brown/10 bg-cream/88 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between gap-6">
          <Link to="/" className="font-serif text-3xl font-bold tracking-normal" onClick={() => setOpen(false)}>
            kin<span className="text-gold">Silver</span>
          </Link>
          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.16em] text-brown lg:flex">
            {navRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) => (isActive ? "text-ink" : "transition hover:text-ink")}
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
          <Link className="button-primary hidden lg:inline-flex" to="/waitlist">
            First Collection
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brown/15 lg:hidden"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-brown/10 bg-cream lg:hidden">
            <nav className="page-shell grid gap-1 py-4">
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className="rounded-md px-2 py-3 text-sm font-bold uppercase tracking-[0.14em] text-brown"
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
      <Outlet />
      <footer className="border-t border-brown/10 py-10">
        <div className="page-shell grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="font-serif text-3xl font-bold">
              kin<span className="text-gold">Silver</span>
            </p>
            <p className="mt-2 text-sm text-brown">{brand.meaning}</p>
          </div>
          <p className="text-sm leading-7 text-brown md:text-right">
            Silver-plated to heirloom standard. .999 fine silver over lead-free brass. Checkout opens only after the
            supplier gate is approved.
          </p>
        </div>
      </footer>
    </div>
  );
}
