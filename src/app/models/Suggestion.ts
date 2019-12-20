export class Suggestion
{
    _id: string
    userId: string
    read: boolean
    message: string
    activity: {
        title?: string
        goal?: string
        material?: string
        activity?: string
        setup?: string
        pointsForAttention?: string
        differentiations?: string
    }
}