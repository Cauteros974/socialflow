import React from "react";
import { motion } from "framer-motion";

export const PostSkeleton = () => {
    return(
        <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="bg-white rounded-2xl shadow-sm p-4"
        >

        </motion.div>
    )
}