
type NameOfPlaceHolder = 'name' | 'email' | 'phone';


export const handlePlaseHolder = (name : NameOfPlaceHolder)  => {
    const options = {
        name: "e.j Juan Perez",
        email: "e.j juanperez@gmail.com",
        phone: "e.j +54 11 3265 - 6790"
    }
    return options[name]
}