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
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="w-32 h-4 bg-gray-200 rounded" /> 
            </div>

        </motion.div>
    )
}