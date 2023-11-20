import {computed, signal} from '@angular/core';
import {User} from '@q9elements/ui-kit/common';
import {get} from 'lodash';

const USER_MOCK: Partial<User> = {
	id: '00000020f51bb4362eee2a4d',
	email: 'test@test.com',
	firstName: 'John',
	lastName: 'Doe'
};

export const sessionServiceMock: any = {
	user: signal(USER_MOCK as User),
	userId: computed(() => get(sessionServiceMock.user(), 'id')),
	teamId: computed(() => get(sessionServiceMock.user(), 'userInTeam.team.id')),
	teamIndex: computed(() =>
		get(sessionServiceMock.user(), 'userInTeam.teamIndex')
	),
	startSession() {
		sessionServiceMock.user.set(USER_MOCK as User);
	},
	endSession() {
		sessionServiceMock.user.set(null);
	}
};
