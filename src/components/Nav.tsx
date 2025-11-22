import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { fadeInUp } from "@/lib/animations";
import { FiUser, FiEye, FiLogOut } from "react-icons/fi";
import { Button } from "./Button";

export const Nav = () => {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <motion.nav 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="glass-card rounded-2xl px-6 py-4 mb-8"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <span className="text-primary-foreground font-playfair font-bold text-xl">L</span>
          </div>
          <span className="font-playfair font-bold text-2xl gold-gradient">LinkLux</span>
        </Link>

        <div className="flex items-center gap-3">
          {isAdmin ? (
            <>
              <Link to="/@username">
                <Button variant="ghost" size="sm">
                  <FiEye className="mr-2" />
                  Preview
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <FiLogOut className="mr-2" />
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/admin">
              <Button variant="primary" size="sm">
                <FiUser className="mr-2" />
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};
