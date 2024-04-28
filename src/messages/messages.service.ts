import { MessagesRepoistory } from './messages.repository';

export class MessagesService {
    messagesRepository: MessagesRepoistory;
    constructor(){
        this.messagesRepository = new MessagesRepoistory();
    }

    async findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    async findAll() {
        return this.messagesRepository.findAll();
    }

    async create(content: string) {
        return this.messagesRepository.create(content);
    }
}