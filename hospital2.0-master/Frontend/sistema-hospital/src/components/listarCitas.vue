<template>
    <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-8">
        <table class="w-full table-fixed">
          <thead>
            <tr class="bg-gray-100">
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Nombre</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Fecha</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Peso</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Talla</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Edad</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">P.A</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Diagnóstico</th>
              <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Prescripción Médica</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
              <td class="py-4 px-6 border-b border-gray-200 truncate">2024-06-10</td>
              <td class="py-4 px-6 border-b border-gray-200">75 kg</td>
              <td class="py-4 px-6 border-b border-gray-200">180 cm</td>
              <td class="py-4 px-6 border-b border-gray-200">35 años</td>
              <td class="py-4 px-6 border-b border-gray-200">120/80 mmHg</td>
              <td class="py-4 px-6 border-b border-gray-200">Hipertensión</td>
              <td class="py-4 px-6 border-b border-gray-200">Recetar medicamento X</td>
            </tr>
            <!-- Más filas de datos aquí -->
            <tr>
            <td class="py-4 px-6 border-b border-gray-200">John Smith</td>
            <td class="py-4 px-6 border-b border-gray-200">2024-06-12</td>
            <td class="py-4 px-6 border-b border-gray-200">80 kg</td>
            <td class="py-4 px-6 border-b border-gray-200">175 cm</td>
            <td class="py-4 px-6 border-b border-gray-200">45 años</td>
            <td class="py-4 px-6 border-b border-gray-200">140/95 mmHg</td>
            <td class="py-4 px-6 border-b border-gray-200">Obesidad</td>
            <td class="py-4 px-6 border-b border-gray-200">Recetar medicamento Z</td>
            </tr>
            <tr>
                <td class="py-4 px-6 border-b border-gray-200">Alice Johnson</td>
                <td class="py-4 px-6 border-b border-gray-200">2024-06-13</td>
                <td class="py-4 px-6 border-b border-gray-200">65 kg</td>
                <td class="py-4 px-6 border-b border-gray-200">170 cm</td>
                <td class="py-4 px-6 border-b border-gray-200">30 años</td>
                <td class="py-4 px-6 border-b border-gray-200">115/75 mmHg</td>
                <td class="py-4 px-6 border-b border-gray-200">Ninguno</td>
                <td class="py-4 px-6 border-b border-gray-200">Sin prescripción</td>
            </tr>
            <tr>
                <td class="py-4 px-6 border-b border-gray-200">Michael Brown</td>
                <td class="py-4 px-6 border-b border-gray-200">2024-06-14</td>
                <td class="py-4 px-6 border-b border-gray-200">70 kg</td>
                <td class="py-4 px-6 border-b border-gray-200">185 cm</td>
                <td class="py-4 px-6 border-b border-gray-200">50 años</td>
                <td class="py-4 px-6 border-b border-gray-200">125/85 mmHg</td>
                <td class="py-4 px-6 border-b border-gray-200">Colesterol alto</td>
                <td class="py-4 px-6 border-b border-gray-200">Recetar medicamento A</td>
            </tr>
            <tr>
                <td class="py-4 px-6 border-b border-gray-200">Sophia Garcia</td>
                <td class="py-4 px-6 border-b border-gray-200">2024-06-15</td>
                <td class="py-4 px-6 border-b border-gray-200">60 kg</td>
                <td class="py-4 px-6 border-b border-gray-200">160 cm</td>
                <td class="py-4 px-6 border-b border-gray-200">25 años</td>
                <td class="py-4 px-6 border-b border-gray-200">110/70 mmHg</td>
                <td class="py-4 px-6 border-b border-gray-200">Ninguno</td>
                <td class="py-4 px-6 border-b border-gray-200">Sin prescripción</td>
            </tr>
          </tbody>
        </table>

    </div>
</template>