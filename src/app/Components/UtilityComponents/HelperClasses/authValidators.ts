import { UserInputLength } from './userInputLengths';

export class Validator{
    usernameValidator(username:string):boolean
    {
        if(username.length<UserInputLength.MIN_USERNAME_LENGTH){
          return false;  
        }
        else{
            if(username.length>UserInputLength.MAX_USERNAME_LENGTH){
                return false;
            }else{
                return true;
            }
        }
    
       
    }
}