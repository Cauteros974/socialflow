import { boolean, string } from "zod";
import { Author } from "./user";

export default  Message{
    id: string;
    conversationId: string;
    sender: Author;
    text: string;
    createAt: number;
    read?: boolean;
}

export interface Conversation{
    id: string;
    participants: Author[];
    
}