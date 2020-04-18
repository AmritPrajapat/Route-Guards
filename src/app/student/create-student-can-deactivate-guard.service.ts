import { CanDeactivate } from '@angular/router';
import { StudentComponent } from './student.component';
import {  Injectable } from '@angular/core';

@Injectable()
export class CreateStudentCanDeactivateGardService implements CanDeactivate<StudentComponent>{
    canDeactivate(component: StudentComponent): boolean
    {
        if (component && component.studentForm  && component.studentForm.dirty) {
            return confirm('Are you sure you want to discard the  changes?');
        }

        return true;
    }
}