import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page/layouts-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'students', component: StudentsPage },
    { path: 'students/:id', component: StudentDetailPage }, // :id es leído con ActivatedRoute en StudentDetailPage
    { path: 'layouts', component: LayoutsPage },
    { path: '**', redirectTo: '' }, // fallback: redirige cualquier URL desconocida al inicio
];
