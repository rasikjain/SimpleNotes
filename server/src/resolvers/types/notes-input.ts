import { Field, InputType, ID } from 'type-graphql';
import { Notes } from '../../models/notes.model';
@InputType()
export class NotesInput implements Partial<Notes> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  backgroundColor: string;

  @Field({ nullable: true })
  isArchived: boolean;
}
