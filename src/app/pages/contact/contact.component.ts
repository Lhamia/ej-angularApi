import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OlympusService } from 'src/app/services/olympus.service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactForm!: FormGroup;
  submited: boolean=false;
  createdGod: any;

  constructor(private formBuilder: FormBuilder, public olympusService:OlympusService ) {
    this.contactForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.maxLength(20)]],
      rol: ["",[Validators.required]],
      image:["",[Validators.required]],
      description: ["",[Validators.required]],

      

      
    })
   }

   onSubmit() {
    console.log(this.contactForm);
    console.log(this.contactForm.value);
    this.submited = true;
    if (this.contactForm.valid) {
      const newGod: any = {
        name: this.contactForm.get('name')?.value,
        rol: this.contactForm.get('rol')?.value,
        description: this.contactForm.get('description')?.value,
        image: this.contactForm.get('image')?.value,
      };
      console.log('Este seria el nuevo :', newGod);
      this.createdGod = newGod;
      console.log(this.createdGod);
      this.olympusService.postGod(this.createdGod)
    }
  }




  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe((changes)=>{
      console.log(changes);
    })
    console.log(this.createdGod);
}
}