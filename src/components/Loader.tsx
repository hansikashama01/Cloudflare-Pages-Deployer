import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/90 to-transparent"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0ea5ff] to-[#7c3aed] p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-black/60 glass-strong animate-pulse" />
            </div>
            <div className="text-gray-300">Initializing systems...</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
