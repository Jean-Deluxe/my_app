import { motion } from 'framer-motion';

function AnimatedBox() {
  return (
    <motion.div
      className="w-32 h-32 bg-blue-500"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Animated Box
    </motion.div>
  );
}

export default AnimatedBox;
