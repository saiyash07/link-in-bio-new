import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserLinks } from "@/lib/links";
import { getUserProfile } from "@/lib/auth";

const PublicProfile = ({ demo }) => {
  const { username } = useParams();
  const profileSlug = demo ? "demo" : username;

  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (demo) {
      setProfile({
        name: "Demo User",
        bio: "This is what your page will look like.",
        avatar: "https://i.pravatar.cc/150",
      });

      setLinks([
        { title: "Instagram", url: "https://instagram.com" },
        { title: "YouTube", url: "https://youtube.com" },
        { title: "Portfolio", url: "https://example.com" },
      ]);

      return;
    }

    const load = async () => {
      const p = await getUserProfile(profileSlug);
      const l = await getUserLinks(profileSlug);

      setProfile(p);
      setLinks(l);
    };

    load();
  }, [profileSlug, demo]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-background text-center pt-16">
      <img 
        src={profile.avatar}
        alt="avatar"
        className="w-28 h-28 rounded-full mx-auto mb-4"
      />

      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-muted-foreground mt-2">{profile.bio}</p>

      <div className="flex flex-col gap-4 max-w-md mx-auto mt-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 rounded-xl font-medium text-lg"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PublicProfile;