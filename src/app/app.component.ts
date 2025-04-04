import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-website';
  name = 'Eugene Hunter';
  occupation = 'Software Engineer';
  hobbies = ['Coding', 'Gaming', 'Reading'];
  skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Java', level: 'Beginner' },
  ];
  projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' },
    { name: 'Project 3', description: 'Description of Project 3' },
  ];
  education = [
    { degree: 'Bachelor of Science in Computer Science', institution: 'Machakos University', year: 2020 },
    { degree: 'Master of Science in Software Engineering', institution: 'ABC University', year: 2022 },
  ];
  experience = [
    { position: 'Software Engineer', company: 'Tech Company', year: 2022 },
    { position: 'Intern', company: 'Startup', year: 2021 },
  ];
  certifications = [
    { name: 'Certified JavaScript Developer', institution: 'Certification Body', year: 2021 },
    { name: 'Certified Python Developer', institution: 'Certification Body', year: 2022 },
  ];
  languages = [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Kiswahili', proficiency: 'Intermediate' },
  ];


}
