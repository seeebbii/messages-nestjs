import { MessagesService } from './messages.service';
import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';


@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService){
        
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll();
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);
        console.log(message)
        if( !message ){
            throw new NotFoundException('Message not found');
        }
        return message;
    }

    @Post()
    async createMessage(@Body() body: CreateMessageDTO){
        return this.messagesService.create(body.content);
    }


}
