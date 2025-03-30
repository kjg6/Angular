interface flags{
    nsfw:boolean;
    religious:boolean;
    political:boolean;
    racist:boolean;
    sexist:boolean;
    explicit:boolean;
}
interface Joke{
    error:boolean;
    category:string;
    type:string;
    joke:string;
    flags: flags;
    id:number;
    safe:boolean;
    
    
}