type User = {
    readonly _id: string,
    name: string,
    email: string,
    isPaid: boolean,
    credicardDetails?: number,
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let user: User = {
    _id: "g545a656sf6s56",
    name: "Cesar",
    email: "cesar@email.com",
    isPaid: true,
}

// user.id = "65656asas" //Have an error
user.isPaid = false

// const createuser = ({name:string, isPaid:boolean}) => {
const createuser = (user: User): User => {
    return {_id: "g545a656sf6s56", name: "ret", email: "", isPaid: true}
}

createuser({_id: "g545a656sf6s56", name: "ret", email: "", isPaid: true})

const createCourse = ():{name: string, price:number} => {

    return {name:"Docker C", price:55}
}

const sueprHeroes: string[] = []
// const sueprHeroes: Array<string> = []
sueprHeroes.push("Spiderman")

const allUsers: User[] = []
allUsers.push(user)

const MLModels: number[][] = []

let score: number | string = 33

type BasicUser = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number
}

let cesrra: BasicUser | Admin = {name: "Ces", id: 55555}
cesrra = {username: "cesrra", id: 55555}

const getId = (id: string | number) => {
    if(typeof id === "string") {
        id.toLowerCase()
    }
}

const dataAll: (string | number | boolean)[] = [true,1,2,"3",4, false]
const dataStrict: [string, number, boolean] = ["3",4, false]

let myStrings: ("Ces" | "Nes" | "Sim") = "Ces"

enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 22,
    WINDOW = "window",
    FOURTH = 0,
}

const hcSeat: SeatChoice = SeatChoice.WINDOW

interface UserI {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string): number
}

interface AdminI extends UserI {
    role: "admin" | "ta" | "leader"
}

const cesrraI: AdminI = {
    dbId: 565656,
    role: "leader",
    email: "cesrra@gmail.com", 
    userId: 51111,
    startTrail: () => {
        return "Trail of Cesrra"
    },
    getCoupon: () => {
        return 10
    }
}



export {

}