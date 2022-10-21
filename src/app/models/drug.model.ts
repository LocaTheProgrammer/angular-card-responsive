export class Drug {
    id: number
    name: string
    expirationDate: Date
    prescribedBy: string


    constructor(id: number, name: string, expirationDate: Date, prescribedBy: string) {
        this.name = name
        this.id = id
        this.expirationDate = expirationDate
        this.prescribedBy = prescribedBy
    }
}