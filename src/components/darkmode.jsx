import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react"; // Import icons

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  // Detects system preference if theme is set to "system"
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button variant="ghost" onClick={toggleTheme} className="p-3" title="dark mode">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}

export default ThemeToggleButton;
