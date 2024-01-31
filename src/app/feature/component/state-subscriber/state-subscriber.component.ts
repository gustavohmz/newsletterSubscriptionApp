import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsletterService } from '../../shared/services/newsletter.service';

@Component({
  selector: 'app-state-subscriber',
  templateUrl: './state-subscriber.component.html',
  styleUrls: ['./state-subscriber.component.scss'],
})
export class StateSubscriberComponent implements OnInit {
  dataEmails: string | null = '';
  isSuscriber: boolean = false;
  subscriber: any = {};

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit(): void {
    this.dataEmails = this.activeRouter.snapshot.paramMap.get('email');
    this.getSuscriberValid();
  }

  getSuscriberValid(): void {
    const email = this.dataEmails?.split('|')[0];
    const category = this.dataEmails?.split('|')[1];

    console.log({ email, category });
    this.newsletterService
      .getSubscriptor(email ?? '', category ?? '')
      .subscribe({
        next: (data) => {
          this.isSuscriber = true;
          this.subscriber = {
            email,
            category,
          };

          console.log(data);
        },
        error: (error) => {
          this.isSuscriber = false;
          console.log(error);
        },
      });
  }

  unSuscriber(): void {
    this.newsletterService
      .deleteSubscriptor(
        this.subscriber.email ?? '',
        this.subscriber.category ?? ''
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.isSuscriber = false;
          console.log(error);
        },
      });
  }
}
