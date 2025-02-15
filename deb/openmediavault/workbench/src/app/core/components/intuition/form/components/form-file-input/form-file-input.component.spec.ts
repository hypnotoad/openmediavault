import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FormFileInputComponent } from '~/app/core/components/intuition/form/components/form-file-input/form-file-input.component';
import { IntuitionModule } from '~/app/core/components/intuition/intuition.module';
import { TestingModule } from '~/app/testing.module';

describe('FormFileInputComponent', () => {
  let component: FormFileInputComponent;
  let fixture: ComponentFixture<FormFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntuitionModule, TestingModule, TranslateModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFileInputComponent);
    component = fixture.componentInstance;
    component.config = {
      type: 'fileInput',
      name: 'foo',
      cols: 20
    };
    const formBuilder = TestBed.inject(FormBuilder);
    component.formGroup = formBuilder.group({ foo: ['abc xyz'] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
