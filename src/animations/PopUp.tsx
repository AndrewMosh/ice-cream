import { motion, Variants } from "framer-motion";

const cardVariantsRight: Variants = {
    offscreen: {
        x: 100,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,

        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
        },
    },
};

const cardVariantsLeft: Variants = {
    offscreen: {
        x: -100,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,

        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
        },
    },
};

function PopUp({ element, side }: any) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.6 }}
            variants={side === "right" ? cardVariantsRight : cardVariantsLeft}
            layout
        >
            {element}
        </motion.div>
    );
}

export default PopUp;
