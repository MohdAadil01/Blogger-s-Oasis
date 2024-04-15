import { useSelector } from "react-redux";
import BackgroundImage from "/assets/images/bg-star.jpeg";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div
        className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {children}
      </div>
    </div>
  );
}
