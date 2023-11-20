type ObjectId = string;

export interface PlanManualDetails {
	numberOfEditors: number;
	renewalDate: Date;
	sfcm: boolean;
	expiryDate: Date;
	invoiceContact: string;
	invoiceContactEmail: string;
}

export interface Plan {
	type: 'pro' | 'free' | 'suspended';
	method?: 'manual' | 'card';
	enterprise: boolean;
	trial: boolean;
	proPlus: boolean;
	msSpace: boolean;
	trialStartedAt?: Date;
	nonProfit: boolean;
	premium: boolean;
	manualDetails?: PlanManualDetails;
	trialExpired: boolean;
	adoptionLicense: boolean;
	enabledTrainings: boolean;
	numberOfAdoptionLicense: number;
	numberOfSfLicense: number;
}

export interface PlanTypeHistory {
	date: Date;
	newState:
		| 'pro'
		| 'manualPro'
		| 'proTrial'
		| 'proTrialExpired'
		| 'free'
		| 'suspended'
		| 'manualSuspended'
		| 'enterprise'
		| 'enterpriseTrial'
		| 'enterpriseTrialExpired'
		| 'enterpriseSuspended'
		| 'consultingSuspended'
		| 'msSpace';
	details: {
		description: string;
		numberOfEditors: number;
		numberOfSfLicense: number;
		amount: string;
	};
	user: ObjectId;
}

export interface Salesforce {
	orgId: string;
	orgName: string;
	packageVersion: string;
	orgType: string;
	sandboxName: string;
	sync: {
		onlyType: string;
		chunkSize: any;
		excluded: any;
	};
	syncV2: {
		chunkSize: any;
	};
	isSandbox: boolean;
	secretKey: string;
	license: {
		SFDC: number;
		AUL: number;
	};
	scheduling: {
		enabled: boolean;
		token: boolean;
		time: string;
		hour: number;
		message: string;
	};
	linkType: 'Classic' | 'Lightning';
	configEnabled: boolean;
	syncVersion: 'v2';
	syncVersionMigrationDate: Date;
}

export interface SalesforceImplementation {
	name: string;
	description: string;
	suspendDate: Date;
	expiryDate: Date;
	sf: Salesforce[];
}

export interface Team {
	name: string;
	description: string;
	personal: boolean;
	state: 'active' | 'blocked' | 'deleted';
	sfImplementations: SalesforceImplementation[];
	domain: string;
	referrer: boolean;
	isPublic: boolean;
	global: boolean;
	planType: 'free' | 'pro' | 'suspended';
	plan: Plan;
	planTypeHistory: PlanTypeHistory[];
	prefix: string;
	lastBillDate: Date;
	customer: string;
	taxNumber: string;
	creditCard: string;
	createdBy: ObjectId;
	adminControlSpaceInvites: boolean;
	canImportUsers: boolean;
	corporateDefault: boolean;
	hadTrial: boolean;
	isSFAEnabled: boolean;
	supportDocPackages: boolean;
	isWebhooksEnabled: boolean;
	isPublicApiEnabled: boolean;
	isAdoptionCenterEnabled: boolean;
}
