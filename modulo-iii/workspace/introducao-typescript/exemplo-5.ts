// In

interface IUser {
    id: string;
    email: string;
}

interface IAdmin extends IUser {
    accessLevel: "gerente" | "coordenador" | "supervisor";
}

function defineAcessLevel(user: IUser | IAdmin) {
    if ("accessLevel" in user) {
        // Tem acesso à área administrativa.
    }
    // Tem acesso limitado.
}