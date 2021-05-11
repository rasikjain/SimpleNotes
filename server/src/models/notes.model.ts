import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({ description: 'The Notes Model' })
@modelOptions({ schemaOptions: { collection: 'notes', timestamps: true } })
export class Notes {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ type: () => String, required: true })
  public title: string;

  @Field()
  @Property({ type: () => String, required: true })
  description: string;

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  backgroundColor: string;

  @Field({ nullable: true })
  @Property({ type: Boolean, required: false })
  isArchived: boolean;
}

export const NotesModel = getModelForClass(Notes);
