import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"   // ⚡ instant jump
    });
  };

  return (
    visible && (
      <button
        onClick={goToTop}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
