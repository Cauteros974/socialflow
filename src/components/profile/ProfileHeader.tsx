import React, {useState} from "react";
import { type AppUser } from "../../types/user";
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { EditProfileForm } from './EditProfileForm';
import { Calendar } from 'lucide-react';
import { formatFullDate } from '../../utils/formatDate';

