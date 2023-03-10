import User from "src/Models/User";
import Drives from "src/Models/Drives";
import CreateRepository from "src/Patterns/Repository/CreateRepository";



interface IDriveCreate{
    filetype: string,
    filename: string,
    path: string,
    user: User,
}



export default class DriveCreateRepostory extends CreateRepository<IDriveCreate, Drives>{
    async create({
        filetype,
        filename,
        path,
        user
    }: IDriveCreate): Promise<Drives> {
       
        let drive: Drives = new Drives();

        drive.filetype = filetype;
        drive.filename = filename;
        drive.path = path;
        drive.iduser = user.id;

        await this.transaction.save(drive);

        return drive;
    }

}