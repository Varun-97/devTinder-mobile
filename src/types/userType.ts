export interface UserProfile {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    photoUrl: string,
    about: string,
    skill: string[],
}

export interface EditProfileApiType {
    about?: string,
    skill?: string,
}
