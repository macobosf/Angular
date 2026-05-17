import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';

/**
 * Tabla de rutas de la aplicación.
 *
 * Las rutas se evalúan en orden; el comodín '**' debe permanecer al final
 * para actuar como fallback solo cuando ninguna ruta anterior coincida.
 *
 * Convención de rutas:
 *  - ''            → página de inicio (ruta exacta)
 *  - 'students'    → listado de estudiantes
 *  - 'students/:id'→ detalle de un estudiante; :id es un parámetro dinámico
 *                    leído con ActivatedRoute en StudentDetailPage
 *  - 'layouts'     → demostración de distribuciones de layout con Tailwind
 *  - '**'          → redirige a '' ante cualquier URL desconocida
 */
export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'students', component: StudentsPage },
    { path: 'students/:id', component: StudentDetailPage },
    { path: 'layouts', component: LayoutsPage },
    { path: '**', redirectTo: '' },
];
