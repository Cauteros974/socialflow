import { string } from "zod";
import { Author } from "./user";

export default  Message{
    id: string;
    conversationId: string;
    sender: Author;
    text: string;
}