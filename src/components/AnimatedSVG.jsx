import { motion } from "framer-motion";

const AnimatedSVG = () => {
    return (
        // <motion.svg
        //     width="100"
        //     height="100"
        //     viewBox="0 0 100 100"
        //     animate={{ rotate: 360 }}
        //     transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        // >
        //     <circle cx="50" cy="50" r="40" stroke="blue" strokeWidth="5" fill="none" />
        // </motion.svg>

        // <motion.svg
        //     width="100"
        //     height="100"
        //     viewBox="0 0 100 100"
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: [0, 1, 0] }} // Fades in and out
        //     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        // >
        //     <circle cx="50" cy="50" r="40" stroke="blue" strokeWidth="5" fill="none" />
        // </motion.svg>
        <motion.svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, x: -50, y: -50 }} // Start faded, shifted left & up
            animate={{ opacity: 1, x: [0, 50, 0], y: [0, 50, 0] }} // Moves left-right and down
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <circle cx="50" cy="50" r="40" stroke="blue" strokeWidth="5" fill="none" />
        </motion.svg>
    );
};

export default AnimatedSVG;
