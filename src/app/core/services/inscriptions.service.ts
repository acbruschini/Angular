import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Inscription } from '../../layout/dash/pages/inscriptions/models';

@Injectable({
  providedIn: 'root'
})


export class InscriptionsArrayDbService {
  
  url: string = `${environment._API_URL}:${environment._API_PORT}`;
  private inscriptions$: BehaviorSubject<Inscription[]>

  constructor(private httpClient: HttpClient) {
    this.inscriptions$ = new BehaviorSubject<Inscription[]>([])
    this.updateAndEmitBehavior();
  }

  // EXPONGO EL BEHAVIOR COMO OBSERVABLE
  get inscriptionsObs() {
    return this.inscriptions$.asObservable();
  }

  private updateAndEmitBehavior() {
    this.httpClient.get<Inscription[]>(this.url + '/inscriptions').subscribe({
      next: (data) => {
        this.inscriptions$.next(data)
      }
    })
  }

  addInscription(inscription: Inscription) {
    return this.httpClient.post(this.url + "/inscriptions", inscription).subscribe({
      next: () => this.updateAndEmitBehavior()
    })
  }

  deleteInscription(id: number) {
    return this.httpClient.delete(this.url + "/inscriptions/" + `${id}`).subscribe({ next: () => this.updateAndEmitBehavior() })
  }


  updateInscription(inscription: Inscription) {
    return this.httpClient.put(this.url + "/inscriptions/" + `${inscription.id}`,inscription).subscribe({ next: () => this.updateAndEmitBehavior() })
  }

  getAllInscriptions() {
    return this.httpClient.get<Inscription[]>(this.url + "/inscriptions")
  }

}
