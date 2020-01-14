export class Suggestion {
    _id: string
    userId: string
    read: boolean
    message: string
    activity: {
        title?: string
        goal?: string
        material?: string
        activity?: string
        setUp?: string
        tooHard?: string 
        tooEasy?: string 
        duration?: number
        amountOfPeople?: number
        wheelchair?: boolean
        pointsForAttention?: string
    }
}
