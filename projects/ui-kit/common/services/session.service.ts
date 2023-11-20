import {HttpClient} from '@angular/common/http';
import {computed, Injectable, signal} from '@angular/core';
import {get} from 'lodash';
import {tap} from 'rxjs';

import {ConfigService} from './config.service';
import {User} from '../models/user.interface';

@Injectable({providedIn: 'root'})
export class SessionService {
	readonly user = signal<User | null>(null);
	readonly userId = computed(() => get(this.user()!, 'id'));
	readonly teamId = computed(() => get(this.user()!, 'userInTeam.team.id'));
	readonly teamIndex = computed(() =>
		get(this.user()!, 'userInTeam.teamIndex')
	);

	constructor(private http: HttpClient) {}

	public startSession(url?: string) {
		if (!url) {
			url = `${ConfigService.environment.API_ENDPOINT}/account`;
		}

		return this.http.get<User>(url).pipe(tap(user => this.user.set(user)));
	}

	public endSession() {
		this.user.set(null);

		window.location.href = `${ConfigService.environment.MAIN_APP_URL}?logout`;
	}
}
