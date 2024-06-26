class User {
    // email: string
    // name: string
    private _courseNum = 1
    protected city: string = ""
    readonly gender = "XXX"

    constructor(
        public email: string,
        public name: string
        ){}
    //     this.email = email
    //     this.name = name
    // }

    private deleteToken() {
        console.log('Token Deleted!')
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get courseCount(): number {
        return this._courseNum
    }
    set courseCount(couseNum) {
        if(couseNum <= 1){
            throw new Error("Course count must be more than 1")
        }
        this._courseNum = couseNum
    }
}

const cesar = new User("ces@gmail.com", "cesar")
// cesar.city = "FloridaBlanca"

class Student extends User {
    constructor(email: string, name:string, city: string){
        super(email, name)
        this.city = city
    }

    getInformation() {        
        console.log(this.gender + " - " + this.city)
    }
}

interface TakePhoto {
    cameraMode: string
    filter:string
    burst: number    
}

interface Story {
    createStory(): void
}

class Istagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {}

    createStory(): void {
        console.log("Story was created!")
    }
}

abstract class TakePhotoC {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract absMethod(): number

    getSepia(): void {
        console.log('From TkaePhotoC, Said Hey!')
    }
}
// const cr = new TakePhotoC("Test", "Filter") //Error

class Instagram extends TakePhotoC {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    absMethod(): number {
        return this.burst
    }
}

const cr = new Instagram("Mode", "Filter", 85)
cr.getSepia()

//----------------GENERICS----------------
function identityF<T>(val:T[]): T {
    return val[0]
}

const identity = <T>(val: T[]): T => {
    return val[0]
    // return [val]
}

interface Bootled {
    brand: string,
    type: string
}

identity<Bootled>([{brand: "Brnad!", type: "Type"}])

//---------------------GENERICS CLASSES---------------
interface Database {
    conection: string,
    username: string,
    password: string
}

const anotheFuntion = <T, U extends Database>(value1: T, value2: U):object => {

    return {
        value1,
        value2
    }
}

anotheFuntion(3, {conection: "", password: "", username: ""})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}
const mathemathis: Course = {
    author: "PHD Camilo",
    name: "Calculo II",
    subject: "Are behind the curve"
} 
const exampleSell = new Sellable()
exampleSell.addToCart(mathemathis)

//-------------NARROWING------------
const detectionType = (val: number | string) => {
    if(typeof val === "string") {
        return val.toLocaleLowerCase()
    }
    return val + 3
}

//We need add all case that type of the id that will add
//This is a bad example
const provideId = (id: string | string[]) => {
    if(id){
        if(typeof id === "object") {
            for(const s of id){
                console.log(s)
            }
        }else if(typeof id == "string"){
            console.log(id)
        }        
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

const isAdminAccount = (account: User | Admin) => {
    if("isAdmin" in account) {
        return account.isAdmin
    }    
}