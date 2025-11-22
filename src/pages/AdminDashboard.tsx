import { motion } from "framer-motion";
import { useState } from "react";
import { pageTransition, staggerContainer, fadeInUp } from "@/lib/animations";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/Button";
import { LinkCard } from "@/components/LinkCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FiInstagram, FiTwitter, FiYoutube, FiMail, FiPlus, FiTrash2, FiSave } from "react-icons/fi";

interface Link {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
  clicks: number;
}

const AdminDashboard = () => {
  const [name, setName] = useState("Jane Doe");
  const [bio, setBio] = useState("Content creator, entrepreneur & coffee enthusiast ☕\nBuilding in public • Sharing the journey");
  const [links, setLinks] = useState<Link[]>([
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
      icon: <FiMail />,
      clicks: 892 
    },
    { 
      id: 3, 
      title: "Instagram", 
      url: "instagram.com/creator", 
      icon: <FiInstagram />,
      clicks: 2156 
    },
  ]);

  const handleSave = () => {
    toast.success("Changes saved successfully!", {
      description: "Your profile has been updated.",
      duration: 3000,
    });
  };

  const handleAddLink = () => {
    const newLink = {
      id: Date.now(),
      title: "New Link",
      url: "example.com",
      icon: <FiPlus />,
      clicks: 0
    };
    setLinks([...links, newLink]);
    toast.success("Link added!", {
      description: "Don't forget to save your changes.",
    });
  };

  const handleRemoveLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
    toast.success("Link removed", {
      description: "Link has been deleted from your profile.",
    });
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Nav />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center space-y-2"
          >
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold gold-gradient">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your profile and links</p>
          </motion.div>

          {/* Profile Settings */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-playfair font-bold text-foreground">
              Profile Settings
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Display Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background/50 border-border/50 text-foreground focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-foreground">Bio</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="bg-background/50 border-border/50 text-foreground focus:border-primary min-h-[100px] resize-none"
                  placeholder="Tell visitors about yourself..."
                />
              </div>
            </div>
          </motion.div>

          {/* Links Management */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-playfair font-bold text-foreground">
                Your Links
              </h2>
              <Button variant="primary" size="sm" onClick={handleAddLink}>
                <FiPlus className="mr-2" />
                Add Link
              </Button>
            </div>

            <div className="space-y-3">
              {links.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group"
                >
                  <LinkCard
                    title={link.title}
                    url={link.url}
                    icon={link.icon}
                    clicks={link.clicks}
                    isDraggable
                  />
                  <button
                    onClick={() => handleRemoveLink(link.id)}
                    className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110 flex items-center justify-center"
                    aria-label="Remove link"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </motion.div>
              ))}
            </div>

            {links.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No links yet. Add your first link!</p>
              </div>
            )}
          </motion.div>

          {/* Save Button */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center pb-8"
          >
            <Button variant="neon" size="lg" onClick={handleSave} className="min-w-[200px]">
              <FiSave className="mr-2" />
              Save Changes
            </Button>
          </motion.div>

          {/* Analytics Preview */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
              Quick Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-4xl font-playfair font-bold gold-gradient">
                  {links.reduce((acc, link) => acc + link.clicks, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Clicks</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-playfair font-bold text-gradient">
                  {links.length}
                </div>
                <div className="text-sm text-muted-foreground">Active Links</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-playfair font-bold text-primary">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">Profile Complete</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
