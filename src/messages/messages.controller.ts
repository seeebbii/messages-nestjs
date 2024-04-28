import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages(){
        return [ ];
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log(id)
        return 'This will return one message';
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO){
        console.log(body)
        return 'This will create a message';
    }


}
