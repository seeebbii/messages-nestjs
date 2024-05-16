import { Injectable } from '@nestjs/common';
import { MessagesRepoistory } from './messages.repository';

@Injectable()
export class MessagesService {

    constructor(public messagesRepository: MessagesRepoistory){

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