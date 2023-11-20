export enum CloudType {
	PUBLIC = 'public',
	PRIVATE = 'private'
}

export declare enum CloudName {
	ELEMENTS = 'elements',
	US = 'us'
}

export interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
}

export type AppType =
	| 'team'
	| 'reports'
	| 'partner'
	| 'sysAdmin'
	| 'main'
	| 'refModel'
	| string;

export type Environment = Partial<{
	production: boolean;
	version: string;
	TEAM_APP: string;
	REPORTS_APP: string;
	PARTNER_APP: string;
	MAIN_APP_URL: string;
	SYS_ADMIN_APP: string;
	REF_MODEL_APP: string;
	API_ENDPOINT: string;
	API_STATIC_FILE_UPLOAD: string;
	REPORTS_API_ENDPOINT: string;
	SALESFORCE_CLIENT_ID: string;
	DATA_STRUCTURE_URL: string;
	SALESFORCE_REDIRECT_URL: string;
	SALESFORCE_URL: string;
	SALESFORCE_URL_TEST: string;
	CLOUD_TYPE: CloudType;
	CLOUD_NAME: CloudName;
	INTERCOM_APP_ID: string;
	NO_IMAGE_URL: string;
	ENTERPRISE_URL: string;
	PREVIEW_HOLDER: string;
	SECURE_COOKIES: boolean;
	RAVEN_DSN: string;
	RAVEN_ID: string;
	RELEASE_URL: string;
	REMOTE_UNLOCK_TTL: number;
	UNLOCK_TTL: number;
	fbConfig: Partial<FirebaseConfig>;
}>;
