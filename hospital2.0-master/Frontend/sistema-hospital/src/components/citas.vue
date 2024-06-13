<template>
    <div class="flex flex-col md:flex-row justify-center items-center">
        <div class="w-max md:w-2/4 p-8">
            <form action="">
                <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Citas:</h1>

                        <!--  -->
                <div class="mb-6">
                    <div class="mt-4 py-2">
                        <div>
                            <label for="id_busqueda" class="block text-gray-700 dark:text-white mb-1">Buscar ID</label>
                            <input type="text" id="id_busqueda" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" placeholder="Introduce el ID a buscar" required>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="nombre" class="block text-gray-700 dark:text-white mb-1">Nombre</label>
                            <input type="text" id="nombre" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                            <label for="apellido" class="block text-gray-700 dark:text-white mb-1">Apellidos</label>
                            <input type="text" id="apellido" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                            <label for="fechaNacimiento" class="block text-gray-700 dark:text-white mb-1">Fecha de Nacimiento</label>
                            <input type="date" id="fechaNacimiento" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                            <label for="genero" class="block text-gray-700 dark:text-white mb-1">Género</label>
                            <select id="genero" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option selected>Selecciona tu género</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div>
                            <label for="fechaCita" class="block text-gray-700 dark:text-white mb-1">Fecha de la cita</label>
                            <input type="date" id="fechaCita" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                            <label for="horaCita" class="block text-gray-700 dark:text-white mb-1">Hora de la cita</label>
                            <input type="time" id="horaCita" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                            <label for="numeroTelefono" class="block text-gray-700 dark:text-white mb-1">Número de Teléfono</label>
                            <input type="tel" id="numeroTelefono" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                            <label for="email" class="block text-gray-700 dark:text-white mb-1">Correo Electronico</label>
                            <input type="email" id="email" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="motivo" class="block text-gray-700 dark:text-white mb-1">Motivo de la cita</label>
                        <textarea id="motivo" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required></textarea>
                    </div>
                    
                        <div class="mt-8 flex justify-start">
                            <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Agendar Cita</button>
                        </div>
                </div>

            </form>
        </div>
    </div>

</template>
