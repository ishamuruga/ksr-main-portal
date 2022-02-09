import { VUser } from "projects/common-model/src/public-api";
import { UserCredential } from 'firebase/auth';

interface LoginManager {

    registration(user:VUser):Promise<any>;

    signIn(user:VUser):Promise<any>;

    signOut():Promise<boolean>;
}

export default LoginManager;