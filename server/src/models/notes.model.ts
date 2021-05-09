import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({ description: 'The Notes Model' })
@modelOptions({ schemaOptions: { collection: 'notes', timestamps: true } })
export class Notes {
  @Field()
  id: string;

  @Field()
  // Mongoose validation goes inside the @Props arguments
  @Property({ type: () => String, required: true })
  public title: string;

  @Field()
  @Property({ type: () => String, required: true })
  description: string;

  @Field({ nullable: true })
  @Property({ type: String, required: false })
  backgroundColor: string;
}

export const NotesModel = getModelForClass(Notes);
