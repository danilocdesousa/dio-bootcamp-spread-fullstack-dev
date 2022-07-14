(() => {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTime(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}m${seconds}s`;
    }
    function vehicleRegister() {
        /* Ler os veículos já registrados. */
        function read() {
            return localStorage.vehicleRegister ? JSON.parse(localStorage.vehicleRegister) : [];
        }
        /* Salvar os novos veícuos que serão registrados. */
        function save(vehicle) {
            localStorage.setItem("vehicleRegister", JSON.stringify(vehicle));
        }
        function add(vehicle, dataSave) {
            var _a, _b;
            const tRow = document.createElement("tr");
            tRow.innerHTML = `
            <td>${vehicle.vehicleName}</td>
            <td>${vehicle.licensePlate}</td>
            <td>${vehicle.entryDate}</td>
            <td><button class="deleteVehicle" data-plate="${vehicle.licensePlate}">X</button></td>`;
            (_a = tRow.querySelector(".deleteVehicle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                remove(this.dataset.plate);
            });
            (_b = $("#new-vehicle-register")) === null || _b === void 0 ? void 0 : _b.appendChild(tRow);
            if (dataSave) {
                save([...read(), vehicle]);
            }
            ;
        }
        function remove(plate) {
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
            $("#new-vehicle-register").innerHTML = "";
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
    (_a = $("#register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const vehicleName = (_a = $("#vehicle-name")) === null || _a === void 0 ? void 0 : _a.value;
        const licensePlate = (_b = $("#license-plate")) === null || _b === void 0 ? void 0 : _b.value;
        if (!vehicleName || !licensePlate) {
            alert("Todos os campos são obrigatórios.");
            return;
        }
        vehicleRegister().add({ vehicleName, licensePlate, entryDate: new Date().toISOString() }, true);
    });
})();
