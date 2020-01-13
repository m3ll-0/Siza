import { Feedback } from '../../../models/Feedback';
import { User } from '../../../auth/user.model'

export class CommentViewModel {
    user: User 
    feedback: Feedback
}
