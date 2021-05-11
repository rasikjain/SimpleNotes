import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql';
import { NotesModel, Notes } from '../models/notes.model';
import { NotesInput } from './types/notes-input';

@Resolver((_of) => Notes)
export class NotesResolver {
  @Query((_returns) => Notes, { nullable: false, name: 'getNotesById' })
  async getNotesById(@Arg('id') id: string) {
    return await NotesModel.findById({ _id: id });
  }

  @Query(() => [Notes], { name: 'getAllNotes' })
  async getAllNotes() {
    return await NotesModel.find();
  }

  @Mutation(() => Notes, { name: 'createNotes' })
  async createNotes(@Arg('newNotesInput') { title, description, backgroundColor }: NotesInput): Promise<Notes> {
    const notes = (
      await NotesModel.create({
        title,
        description,
        backgroundColor,
        isArchived: false,
      })
    ).save();

    return notes;
  }

  @Mutation(() => Notes, { name: 'updateNotes' })
  async updateNotes(
    @Arg('editNotesInput') { id, title, description, backgroundColor, isArchived }: NotesInput
  ): Promise<Notes> {
    const notes = await NotesModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        backgroundColor,
        isArchived,
      },
      { new: true }
    );

    return notes;
  }

  @Mutation(() => Boolean, { name: 'deleteNotes' })
  async deleteNotes(@Arg('id') id: string): Promise<Boolean> {
    await NotesModel.deleteOne({ _id: id });
    return true;
  }
}
