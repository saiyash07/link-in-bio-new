import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FiArrowRight, FiStar, FiZap, FiHeart } from "react-icons/fi";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center mb-4"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_60px_hsla(42,88%,65%,0.3)] animate-glow">
              <span className="text-primary-foreground font-playfair font-bold text-4xl">L</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight"
          >
            <span className="gold-gradient">LinkLux</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            The premium link-in-bio platform for creators who demand elegance.
            <span className="block mt-2 text-lg">
              Share your world, beautifully.
            </span>
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
              <FiStar className="text-primary" />
              <span>Premium Design</span>
            </div>
            <div className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
              <FiZap className="text-primary" />
              <span>Lightning Fast</span>
            </div>
            <div className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
              <FiHeart className="text-primary" />
              <span>Built for Creators</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link to="/admin">
              <Button variant="neon" size="lg" className="text-lg">
                Get Started Free
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/@username">
              <Button variant="secondary" size="lg" className="text-lg">
                View Example
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-playfair font-bold gold-gradient">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Creators</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-playfair font-bold text-gradient">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-playfair font-bold text-primary">5M+</div>
                <div className="text-sm text-muted-foreground">Links Clicked</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto mt-8"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-primary fill-primary" size={20} />
              ))}
            </div>
            <p className="text-lg text-foreground italic leading-relaxed">
              "LinkLux transformed how I share my content. The design is absolutely stunning, 
              and my audience loves the premium experience."
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              — Sarah J., Content Creator
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
