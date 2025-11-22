import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";
import { FiExternalLink, FiMove } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  clicks?: number;
  isDraggable?: boolean;
  className?: string;
  onClick?: () => void;
}

export const LinkCard = ({ 
  title, 
  url, 
  icon, 
  clicks,
  isDraggable = false,
  className,
  onClick 
}: LinkCardProps) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "glass-card rounded-2xl p-5 cursor-pointer relative overflow-hidden group",
        className
      )}
      onClick={onClick}
    >
      {isDraggable && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
          <FiMove size={18} />
        </div>
      )}
      
      <div className={cn("flex items-center justify-between", isDraggable && "ml-8")}>
        <div className="flex items-center gap-3 flex-1">
          {icon && (
            <div className="text-primary text-2xl flex-shrink-0">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{title}</h3>
            <p className="text-sm text-muted-foreground truncate">{url}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          {clicks !== undefined && (
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {clicks} clicks
            </span>
          )}
          <FiExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </motion.div>
  );
};
