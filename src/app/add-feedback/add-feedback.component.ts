import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-feedback',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
})
export class AddFeedbackComponent {
  @Output() addFeedback: EventEmitter<{ user: string; message: string }> = new EventEmitter();

  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      this.addFeedback.emit(this.feedbackForm.value);
      this.feedbackForm.reset();  // Reset form after successful submission
    }
  }
}
