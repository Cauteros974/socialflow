import React, {useState} from "react";
import { type AppUser } from "../../types/user";
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { EditProfileForm } from './EditProfileForm';
import { Calendar } from 'lucide-react';
import { formatFullDate } from '../../utils/formatDate';

export const ProfileHeader: React.FC<{ profile: AppUser; postCount: number }> = ({ profile, postCount }) => {
    const current = useAuthStore((s) => s.user);
    const isOwn = current?.uid === profile.uid;
    const [open, setOpen] = useState(false);

    return(
        <>
            <header style={{ textAlign:'center', marginBottom:16 }}>
                <img src={profile.photoUrl} alt={profile.displayName} style={{ width:120, height:120, borderRadius:60, objectFit:'cover' }} />
                <h2 style={{ margin:8 }}>{profile.displayName}</h2>
                <p style={{ color:'var(--text-secondary)' }}>{profile.bio || 'No description'}</p>
                <div style={{ marginTop:8, color:'var(--text-secondary)' }}><Calendar /> Joined {formatFullDate(profile.createdAt)}</div>
                <div style={{ marginTop:12 }}><strong>{postCount}</strong> Posts</div>
                {isOwn && <Button variant="secondary" onClick={() => setOpen(true)} style={{ marginTop:12 }}>Edit Profile</Button>}
            </header>
            <Modal isOpen={open} onClose={() => setOpen(false)} title="Edit Profile">
                <EditProfileForm currentUser={profile} onSuccess={() => setOpen(false)} />
            </Modal>
        </>
    );
};