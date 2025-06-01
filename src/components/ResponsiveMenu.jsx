import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open, setOpen }) => {
  const handleClick = () => setOpen(false);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase text-white py-10 m-6 rounded-3xl bg-blue-400">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutme" onClick={handleClick}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#experiences" onClick={handleClick}>
                  Experiences
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" onClick={handleClick}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
