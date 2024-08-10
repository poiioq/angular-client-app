import { Injectable } from '@angular/core';

export interface IFeedback {
  id: number;
  user: string;
  message: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private feedbackList: IFeedback[] = [];

  getFeedback(): IFeedback[] {
    return this.feedbackList;
  }

  addFeedback(user: string, message: string): IFeedback[] {
    const newFeedback: IFeedback = {
      id: Math.floor(Math.random() * 1000),
      user,
      message,
      date: new Date(),
    };
    this.feedbackList.push(newFeedback);
    return this.feedbackList;
  }

  deleteFeedback(id: number): IFeedback[] {
    this.feedbackList = this.feedbackList.filter((feedback) => feedback.id !== id);
    return this.feedbackList;
  }
}
