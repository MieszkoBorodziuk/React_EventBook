class UsersAPI {
    static getUsers = () => {
        return (new Promise((resolve) =>
            resolve(
                [

                    {
                        login: "User",
                        haslo: 12345,
                    },
                    {
                        login: "admin",
                        haslo: "admin,"
                    },
                ])))
    }

}
export default UsersAPI;