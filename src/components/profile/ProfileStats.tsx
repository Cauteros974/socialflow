import React from "react";

interface ProfileStatsProps {
    posts: number;
    followers: number;
    following: number;
}

export const ProfileStats: React.FC<ProfileStatsProps> = ({ posts, followers, following }) => {
    return (
    <div className="profile-stats">
        <div>
          <strong>{posts}</strong>
          <span>Posts</span>
        </div>
        <div>
          <strong>{followers}</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>{following}</strong>
          <span>Following</span>
        </div>
      </div>
    );
};