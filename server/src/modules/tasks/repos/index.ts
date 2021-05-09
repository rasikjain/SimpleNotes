import { MongoDBTaskRepo } from "./implementations/mongoDBTaskRepo";

const taskRepo = new MongoDBTaskRepo();

export {taskRepo};