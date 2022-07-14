interface IVehicle {
    vehicleName: string;
    licensePlate: string;
    entryDate: Date | string;
}

(() => {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function calcTime(milliseconds: number) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}m${seconds}s`;
    }

    function vehicleRegister() {
        /* Ler os veículos já registrados. */
        function read(): IVehicle[] {
            return localStorage.vehicleRegister ? JSON.parse(localStorage.vehicleRegister) : [];
        }
        /* Salvar os novos veícuos que serão registrados. */
        function save(vehicle: IVehicle[]) {
            localStorage.setItem("vehicleRegister", JSON.stringify(vehicle));
        }

        function add(vehicle: IVehicle, dataSave?: boolean) {
            const tRow = document.createElement("tr");
            tRow.innerHTML = `
            <td>${vehicle.vehicleName}</td>
            <td>${vehicle.licensePlate}</td>
            <td>${vehicle.entryDate}</td>
            <td><button class="deleteVehicle" data-plate="${vehicle.licensePlate}">X</button></td>`;

            tRow.querySelector(".deleteVehicle")?.addEventListener("click", function () {
                remove(this.dataset.plate)
            });

            $("#new-vehicle-register")?.appendChild(tRow);

            if (dataSave) {
                save([...read(), vehicle]);
            };
        }

        function remove(plate: string) {

            const { entryDate, vehicleName } = read().find(vehicle => vehicle.licensePlate === plate);
            const time = calcTime(new Date().getTime() - new Date(entryDate).getTime());

            if (!confirm(`Tempo do veículo ${vehicleName}: ${time}.\nDeseja encerrar?`)) {
                return;
            }

            save(read().filter(vehicle => vehicle.licensePlate !== plate));
            render();
        }

        function render() {
            /* Forçar o acesso à propriedade innerHTML usando "!" em vez de "?". O que torna a propriedade de acesso opcional. */
            $("#new-vehicle-register")!.innerHTML = "";
            const dataVehicleRegister = read();
            if (dataVehicleRegister.length) {
                dataVehicleRegister.forEach(vehicle => {
                    add(vehicle);
                });
            }

        }
        return { read, add, remove, save, render };
    }

    vehicleRegister().render();

    $("#register")?.addEventListener("click", () => {
        const vehicleName = $("#vehicle-name")?.value;
        const licensePlate = $("#license-plate")?.value;

        if (!vehicleName || !licensePlate) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        vehicleRegister().add({ vehicleName, licensePlate, entryDate: new Date().toISOString() }, true);
    })
})();
