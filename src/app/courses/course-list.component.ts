import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
        courses: Course[] = [];

        constructor(private courseService: CourseService){}

        // Método ngOnInit diz respeito ao ciclo de vida do componente.
        ngOnInit(): void{
            this.courses = this.courseService.retrieveAll();

        }

}
