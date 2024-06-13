<template>
            <form action="">
                        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Usuario:</h1>
                        <!-- Usuario registro -->
                        <div class="mb-6">
                            <div class="w-min p-8 lg:w-auto">
                                <div class="mt-4">
                                    <label for="username" class="block text-gray-700 dark:text-white mb-1">Usuario</label>
                                    <input type="text" id="username" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                                </div>
                                <div class="mt-4">
                                    <label for="password" class="block text-gray-700 dark:text-white mb-1">Contraseña</label>
                                    <input type="password" id="password" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                                </div>
                                <div class="mt-4">
                                    <label for="ConfirmPassword" class="block text-gray-700 dark:text-white mb-1">Repetir Contraseña</label>
                                    <input type="password" id="ConfirmPassword" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required>
                                </div>
                                <div class="mt-8 flex justify-start">
                                    <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Registrar</button>
                                </div>
                            </div>
                        </div>
                    
            </form>

</template>

