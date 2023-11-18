export interface User {
  email: string
  name: string
  password: string
}

export interface UserFindByEmail {
  email: string
}

export interface UserFindResponse {
  id: string
  name: string
  email: string
}
