<template>
        <form action="">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personas:</h1>

                    <!-- Persona registro -->
                    <div class="mb-6">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-gray-700 dark:text-white mb-1">Nombre</label>
                                <input type="text" id="name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="last_nameP" class="block text-gray-700 dark:text-white mb-1">Primer Apellido</label>
                                <input type="text" id="last_nameP" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="last_nameM" class="block text-gray-700 dark:text-white mb-1">Segundo Apellido</label>
                                <input type="text" id="last_nameM" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="curp" class="block text-gray-700 dark:text-white mb-1">CURP</label>
                                <input type="text" id="curp" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="genero" class="block text-gray-700 dark:text-white mb-1">Genero</label>
                                <select id="genero" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option selected>Selecciona tu genero</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">Otro</option>
                                </select>
                            </div>
                            <div>
                                <label for="sangreTipo" class="block text-gray-700 dark:text-white mb-1">Tipo de Sangre</label>
                                <select id="sangreTipo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                    <option selected>Selecciona tu tipo de sangre</option>
                                    <option value="1">O+</option>
                                    <option value="2">O-</option>
                                    <option value="3">A+</option>
                                    <option value="4">A-</option>
                                    <option value="5">B+</option>
                                    <option value="6">B-</option>
                                    <option value="7">AB+</option>
                                    <option value="8">AB-</option>
                                </select>
                            </div>
                            <div>
                                <label for="date" class="block text-gray-700 dark:text-white mb-1">Fecha de Nacimiento</label>
                                <input type="date" id="date" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            <div>
                                <label for="NumberTelephone" class="block text-gray-700 dark:text-white mb-1">Numero de telefono</label>
                                <input type="text" id="NumberTelephone" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                            </div>
                            
                        </div>
                        <div class="mt-4">
                            <label for="email" class="block text-gray-700 dark:text-white mb-1">Correo Electronico</label>
                            <input type="email" id="email" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                        </div>
                        <div class="mt-8 flex justify-start">
                                <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Registrar</button>
                        </div>
                    </div>
                    
                    

        </form>

</template>
