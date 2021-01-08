export class Artitle {

    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteup(){
        this.votes += 1;        
    }

    votedown(){
        this.votes -= 1;
    }

    getDomain(): string {
        try{
            const domainPath: string = this.link.split('//')[1];
            return domainPath.split('/')[0];
        }catch(err){
            return null;
        }
    }

}