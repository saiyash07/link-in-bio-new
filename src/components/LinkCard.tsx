import { FiExternalLink } from "react-icons/fi";

const LinkCard = ({ title, url, clicks }) => {
  const openLink = () => {
    // Open the real external link
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={openLink}
      className="glass-card p-6 rounded-xl cursor-pointer hover:scale-[1.01] transition-transform"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{url}</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{clicks} clicks</span>
          <FiExternalLink className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default LinkCard;