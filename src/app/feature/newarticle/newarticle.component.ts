import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.scss'],
})
export class NewarticleComponent implements OnInit {
  ngOnInit(): void {}

  /*************** Declarations**************************/

  public isError = false;
  public errorMessage: string;
  public articleForm: FormGroup = new FormGroup({
    articleTitle: new FormControl('', [Validators.required]),
    articleDescription: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    articleBody: new FormControl('', [Validators.required]),
    articleTags: new FormControl('', [Validators.required]),
  });
  /*  In onSubmit function else expression will used to send HTTPRequest */
  onSubmit() {
    if (!this.articleForm.valid) {
      this.errorMessage = 'Something wrong. Please try again';
      this.isError = true;
      setTimeout(() => (this.isError = false), 2000);
    } else {
      console.log(this.articleForm.status);
    }
  }
}
