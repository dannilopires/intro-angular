import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
        courses: Course[] = [];

        // Método ngOnInit diz respeito ao ciclo de vida do componente.
        ngOnInit(): void{
            this.courses = [
                {
                    id: 1,
                    name: 'Angular Forms',
                    imageUrl: '/assets/images/forms.png',
                    price: 99.99,
                    code: 'XPS-8796',
                    duration: 120,
                    rating: 4.5,
                    releaseDate: '4 de Abril'
                },
                {
                    id: 2,
                    name: 'Angular HTTP',
                    imageUrl: '/assets/images/http.png',
                    price: 49.99,
                    code: 'XPS-4057',
                    duration: 50,
                    rating: 4,
                    releaseDate: '20 de Abril'
                }
            ];
        }
}
