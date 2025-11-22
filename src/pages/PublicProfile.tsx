import { motion } from "framer-motion";
import { pageTransition, staggerContainer, fadeInUp } from "@/lib/animations";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/Button";
import { LinkCard } from "@/components/LinkCard";
import { FiInstagram, FiTwitter, FiGithub, FiYoutube, FiMail, FiGlobe } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PublicProfile = () => {
  const links = [
    { 
      id: 1, 
      title: "Latest YouTube Video", 
      url: "youtube.com/@creator", 
      icon: <FiYoutube />,
      clicks: 1284 
    },
    { 
      id: 2, 
      title: "Shop My Store", 
      url: "shop.creator.com", 
      icon: <FiGlobe />,
      clicks: 892 
    },
    { 
      id: 3, 
      title: "Instagram", 
      url: "instagram.com/creator", 
      icon: <FiInstagram />,
      clicks: 2156 
    },
    { 
      id: 4, 
      title: "Newsletter Signup", 
      url: "newsletter.creator.com", 
      icon: <FiMail />,
      clicks: 645 
    },
  ];

  const socialLinks = [
    { icon: <FiInstagram size={24} />, url: "#", label: "Instagram" },
    { icon: <FiTwitter size={24} />, url: "#", label: "Twitter" },
    { icon: <FiGithub size={24} />, url: "#", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Nav />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="space-y-8"
        >
          {/* Profile Header */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-[0_0_40px_hsla(42,88%,65%,0.2)]">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-4xl font-playfair">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center border-2 border-background">
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-playfair font-bold gold-gradient leading-tight">
              Jane Doe
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Content creator, entrepreneur & coffee enthusiast ☕
              <br />
              <span className="text-sm">Building in public • Sharing the journey</span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="glass-card w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-3"
          >
            <Button variant="neon" size="lg" className="w-full font-playfair text-xl">
              ✨ Book a Consultation
            </Button>
            <Button variant="primary" size="lg" className="w-full">
              Download My Free Guide
            </Button>
          </motion.div>

          {/* Links Section */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-playfair font-bold text-center text-foreground mb-6">
              Featured Links
            </h2>
            {links.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <LinkCard
                  title={link.title}
                  url={link.url}
                  icon={link.icon}
                  clicks={link.clicks}
                  onClick={() => window.open(`https://${link.url}`, '_blank')}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center pt-8 pb-4"
          >
            <p className="text-sm text-muted-foreground">
              Powered by <span className="gold-gradient font-semibold">LinkLux</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicProfile;
