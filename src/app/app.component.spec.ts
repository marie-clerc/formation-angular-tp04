import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule } from '@angular/router/testing';

// describe permet de créer un obj de test unitaire
describe('AppComponent', () => {    

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppComponent,             
             RouterTestingModule 
            ],
      
        }).compileComponents();
    });

    xit('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    xit(`should have the 'test-unitaires' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('test-unitaires');
    });

    xit('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Hello, test-unitaires');
    });
});
