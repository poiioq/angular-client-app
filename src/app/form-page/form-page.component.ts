import { Component, OnInit, inject } from '@angular/core';
import { FeedbackService, IFeedback } from '../services/feedback.service';
import { CommonModule } from '@angular/common';
import { AddFeedbackComponent } from '../add-feedback/add-feedback.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, AddFeedbackComponent],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FeedbackListComponent implements OnInit {
  feedbacks: IFeedback[] = [];
  private feedbackService = inject(FeedbackService);

  ngOnInit(): void {
    this.feedbacks = this.feedbackService.getFeedback();
  }

  addFeedback($event: { user: string; message: string }) {
    this.feedbacks = this.feedbackService.addFeedback($event.user, $event.message);
  }
}
