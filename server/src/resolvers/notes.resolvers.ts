import {Resolver, Mutation, Arg, Query} from 'type-graphql'
import {NotesModel, Notes } from '../models/notes.model'
import { NotesInput } from './types/notes-input';

@Resolver(_of => Notes)
export class NotesResolver {

    @Query(_returns => Notes, { nullable: false})
    async getNotesById(@Arg("id") id: string)
    {
        
        return await NotesModel.findById({_id: id});
    };

    @Query(() => [Notes])
    async getAllNotes(){
        return await NotesModel.find();
    }

    @Mutation(() => Notes)
    async createNotes(@Arg("data"){title, description} : NotesInput) : Promise<Notes> { 
      const notes = (await NotesModel.create({      
        title,
        description
      })).save();
      
      return notes;
    };
}
