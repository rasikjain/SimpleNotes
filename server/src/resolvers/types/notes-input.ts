import { Field, InputType } from "type-graphql";
import { Notes } from "../../models/notes.model";

@InputType()
export class NotesInput implements Partial<Notes>
{
    @Field()
    title: string;

    @Field()
    description: string

}