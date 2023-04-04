export interface usersI {
    id: number,
    email : String,
    password: String,
    name: String,
    role: String,
    avatar: String,
    creationAt: String,
    updatedAt: String
}

export interface clientI {
    id: string,
    name: string
}


export const defaultErrorSms: string = 'Unauthorized user';
export const defaultUser: usersI = {
    id: 890427,
    email:'test.mancivent@com',
    password: 'mancivent',
    name: 'manciventTest',
  //role: 'BKBCN',
    role: 'ADMIN',
    avatar: '',
    creationAt: '',
    updatedAt: ''    
}
