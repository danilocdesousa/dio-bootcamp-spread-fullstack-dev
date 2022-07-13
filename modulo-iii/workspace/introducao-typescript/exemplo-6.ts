// ? (torna uma variável opcional)

interface IUser {
    id: string;
    email: string;
    accessLevel?: "editor" | "gerente" | "coordenador" | "supervisor";
}

function defineAcessLevel1(user: IUser) {
    if (user.accessLevel) {
        // Tem acesso à área administrativa.
    }
    // Tem acesso limitado.
}