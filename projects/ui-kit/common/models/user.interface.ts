import {Team} from './team.interface';

type ObjectId = string;

export interface UserTeam<T = ObjectId> {
	sqlId: number;
	team: T;
	defaultTeam: boolean;
	personal: boolean;
	invitedBy: ObjectId;
	message: string;
	teamIndex: number;
	visited: boolean;
	role: 'author' | 'collaborator' | 'viewer';
	state: 'active' | 'blocked' | 'deleted';
	teamAdmin: boolean;
	resourceAdmin: boolean;
	dataStructureAdmin: boolean;
	requirementsManager: boolean;
	urlLibraryManager: boolean;
	releaseAdmin: boolean;
	billingManager: boolean;
	importManager: boolean;
	apiTokenManager: boolean;
	groups: ObjectId[];
	salesforce: {
		id: string;
		orgId: string;
		state: 'active' | 'blocked' | 'deleted';
	}[];
	partnerOrg: ObjectId;
	id: string;
}

export interface SysAdminPermissions {
	role: 'viewer' | 'editor';
}

export interface User {
	sqlId: number;
	firstName: string;
	lastName: string;
	state: 'active' | 'not_verified' | 'deleted' | 'disabled' | 'blocked';
	previousState: 'active' | 'not_verified' | 'deleted' | 'disabled' | 'blocked';
	blockedBy: ObjectId;
	avatar: string;
	enterprise: {
		domain: string;
		enterpriseAdmin: boolean;
		hasLicense: boolean;
	};
	email: string;
	externalEmail: string;
	password: string;
	phone: string;
	sysAdminPermissions: SysAdminPermissions;
	msEditor: boolean;
	canImportFromNimbus: boolean;
	canUseElementsGPT: boolean;
	advisoryGroupMember: boolean;
	showTeamSwitchTip: boolean;
	showSfRolePicker: boolean;
	onBoardWithProTrialTeam: boolean;
	referrerOrg: ObjectId;
	referrerUser: ObjectId;
	scim: any;
	teams: UserTeam[];
	userInTeam?: UserTeam<Team>;
	adminForPartners: ObjectId[];
	notViewedMaps: ObjectId[];
	followedDiagramVersions: ObjectId[];
	followedDiagrams: ObjectId[];
	recentlyViewedDiagramVersions: {
		diagramVersion: ObjectId;
		lastViewed: Date;
	}[];
	sfRole:
		| 'salesforce_admin'
		| 'salesforce_developer'
		| 'salesforce_business_analyst'
		| 'salesforce_consultant'
		| 'process_professional'
		| 'it_manager_executive'
		| 'business_manager_executive'
		| 'other'
		| 'rather_not_say'
		| 'end_user'
		| 'salesforce_architect';
	didEditDiagram: boolean;
	hadTrial: boolean;
	source: 'scim' | 'salesforce' | 'elementsNoOptin' | 'elementsWithOptin';
	loginPreference: 'salesforce' | 'password';
	id: string;
}
