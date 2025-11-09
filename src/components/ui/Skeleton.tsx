import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const PostSkeleton = () => {
    <div className="rounded-2xl p-4 bg-white/5 dark:bg-black/10 mb-4">
        <Skeleton circle width={48} height={48} />
        <Skeleton height={20} width="60%" style={{ margin: "8px 0"}}/>
        <Skeleton height={250}/>
    </div>
};