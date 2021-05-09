import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql';
import { NotesModel, Notes } from '../models/notes.model';
import { NotesInput } from './types/notes-input';

@Resolver((_of) => Notes)
export class NotesResolver {
  @Query((_returns) => Notes, { nullable: false })
  async getNotesById(@Arg('id') id: string) {
    return await NotesModel.findById({ _id: id });
  }

  @Query(() => [Notes])
  async getAllNotes() {
    return await NotesModel.find();
  }

  @Mutation(() => Notes)
  async createNotes(@Arg('newNotesInput') { title, description, backgroundColor }: NotesInput): Promise<Notes> {
    const notes = (
      await NotesModel.create({
        title,
        description,
        backgroundColor,
      })
    ).save();

    return notes;
  }

  @Mutation(() => Notes)
  async updateNotes(@Arg('editNotesInput') { id, title, description }: NotesInput): Promise<Notes> {
    const notes = await NotesModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
      },
      { new: true }
    );

    return notes;
  }

  @Mutation(() => Boolean)
  async deleteNotes(@Arg('id') id: string): Promise<Boolean> {
    await NotesModel.deleteOne({ _id: id });
    return true;
  }
}
