/** @format */

/// <reference types="jquery" />
/// <reference types="web" />

// =============================================================================
// SECTION: Types
// =============================================================================

// #region: Dataset
export type DatasetValue = boolean | null | number | Record<string, unknown> | string | undefined;
export type Dataset<T extends Record<string, DatasetValue>> = {
    columns: (keyof T)[];
    values: { [K in keyof T]: T[K] }[];
};
// #regionend

// #region: Constraints
declare const ConstraintType: {
    MUST: 1;
    SHOULD: 2;
    MUST_NOT: 3;
};
/**
 * Requires: /webdesk/vcXMLRPC.js
 */
export type ConstraintType = (typeof ConstraintType)[keyof typeof ConstraintType];
export class SearchConstraint {
    _field: string;
    _initialValue: string | '___NULL___VALUE___';
    _finalValue: string | '___NULL___VALUE___';
    _type: ConstraintType;
    _likeSearch: boolean;

    constructor(field: string, initialValue?: string, finalValue?: string, type?: ConstraintType, likeSearch?: boolean);
}
// #regionend

// #region: Callback
export type Callback<T> = {
    success: (data: T) => void;
    error: (jqXHR: JQuery.jqXHR, textStatus: string, errorThrown: string) => void;
};
// #regionend

// =============================================================================
// SECTION: VARIABLES
// =============================================================================

// #region: WK
export const WKDef: string | null;
export const WKDefField: string | null;
export const WKNumProces: number | null;
export const WKNumProcesField: number | null;
export const WKNumState: number | null;
export const WKNumStateField: number | null;
export const WKVersDef: number | null;
export const WKVersDefField: number | null;
// #regionend

// #region: Form
/**
 * PS: Only available within a Form
 */
export const userLang: 'PT_BR' | 'ES' | 'EN_US';
// #regionend

// =============================================================================
// SECTION: METHODS
// =============================================================================

export function reloadZoomFilterValues(): void; // TODO: Add arguments
export function removedZoomItem(): void; // TODO: Add arguments
export function setSelectedZoomItem(): void; // TODO: Add arguments
/**
 * Remove a child (tr row) from a tablename.
 * PS: Only available within a Form
 */
export function fnWdkRemoveChild(tr: HTMLElement): void;
/**
 * PS: Only available within a Form
 */
export function getUserLang(): 'PT_BR' | 'ES' | 'EN_US';
/**
 * Add a new child (tr row) to a tablename and returns the row index
 * PS: Only available within a Form
 */
export function wdkAddChild(tableName: string): number;
/**
 * `beforeMovementOptions` event
 * PS: Only available within a Form
 */
export function beforeStateEntry(sequenceId: number): void;
/**
 * `beforeSendValidate` event
 * PS: Only available within a Form
 */
export function beforeSendValidate(numState: number, nextState: number): void;

// =============================================================================
// SECTION: NAMESPACES
// =============================================================================

// #region: JSInterface
/**
 * Prompt the user to attach a new file (can be used on button events).
 * PS: Only available within a Form
 */
export namespace JSInterface {
    export function showCamera(fileName: string): void;
}
// #regionend

// #region: DatasetFactory
/**
 * Requires: /webdesk/vcXMLRPC.js
 */
export namespace DatasetFactory {
    /**
     * Create a new constraint
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function createConstraint(field: string, initialValue: string | null, finalValue: string | null, type: ConstraintType, likeSearch?: boolean): SearchConstraint;
    /**
     * Obtain a string array of all available datasets
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function getAvailableDatasets(): string[];
    /**
     * Obtain a string array of all available datasets
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function getAvailableDatasets(callback: Callback<string[]>): void;
    /**
     * Obtain data from a dataset
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function getDataset<T extends Record<string, string | number | boolean | null>>(name: string, fields?: string[] | null, constraints?: SearchConstraint[] | null, order?: (`${string};asc` | `${string};desc` | string)[] | null): Dataset<T>;
    /**
     * Obtain data from a dataset
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function getDataset<T extends Record<string, string | number | boolean | null>>(name: string, fields: string[] | null, constraints: SearchConstraint[] | null, order: (`${string};asc` | `${string};desc` | string)[] | null, callback: Callback<Dataset<T>>): void;
    /**
     * Obtain  just the values from a dataset
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function getDatasetValues<T extends Record<string, string | number | boolean | null>>(name: string | number, filter?: { [K in keyof T]?: T[K] } | null): T[];
    /**
     * Obtain  just the values from a dataset
     * Requires: /webdesk/vcXMLRPC.js
     */
    export function getDatasetValues<T extends Record<string, string | number | boolean | null>>(name: string | number, filter: { [K in keyof T]?: T[K] } | null, callback: Callback<T[]>): void;
}
// #regionend

// #region: FLUIGC
export namespace FLUIGC {
    // ajax: function ajax(c, d)​
    // autocomplete: function autocomplete(c, d, e)​
    // backToBottom: function backToBottom(a)​
    // backToTop: function backToTop(a)​
    // calendar: function calendar(a, d)​
    // copy: function copy(c, d, e)​
    // datatable: function datatable(e, f, g)​
    // editable: function editable(a, e)​
    // icons: function icons()​
    // export function loading(a, d);
    // message: Object { alert: i(d, e), confirm: j(d, e), error: k(d, e) }
    // messagePage: function messagePage(a, d)​
    // modal: function modal(f, g)​
    // notification: function notification(d)​
    // password: function password(a, c)​
    // periodicalExecutor: function periodicalExecutor(a, c)​
    // popover: function popover(a, c)​
    // rightbar: function rightbar(a)​
    /**
     * The Storage provides mechanisms by which browsers can securely store
     * key/value pairs, in a much more intuitive fashion than using cookies.
     *
     * `sessionStorage` maintains a separate storage area for each given origin
     * that's available for the duration of the page session
     * (as long as the browser is open, including page reloads and restores).
     */
    export namespace sessionStorage {
        /**
         * Stores an item.
         */
        export function setItem(key: string, value: any): void;
        /**
         * Remove any items.
         */
        export function removeItem(key: string): void;
        /**
         * Returns an item.
         */
        export function getItem<T>(key: string): T;
        /**
         * Clears all stored data.
         */
        export function clear(): void;
    }
    /**
     * The Storage provides mechanisms by which browsers can securely store
     * key/value pairs, in a much more intuitive fashion than using cookies.
     *
     * `localStorage` maintains a separate storage area for each given origin
     * that persists even when the browser is closed and reopened.
     */
    export namespace localStorage {
        /**
         * Stores an item.
         */
        export function setItem(key: string, value: any): void;
        /**
         * Remove any items.
         */
        export function removeItem(key: string): void;
        /**
         * Returns an item.
         */
        export function getItem<T>(key: string): T;
        /**
         * Clears all stored data.
         */
        export function clear(): void;
    }
    // slider: Object { init: a(a, c), getValue: c(a), setValue: d(a, c, d) , … }
    // switcher: Object { init: c(a), getState: d(a), setTrue: e(a) , … }
    // tagscloud: function tagscloud(a, c, d)​
    // timeInteraction: Object { init: init(f), destroy: destroy() }
    // toast: function toast(a)​
    // utilities: Object { ctrlIsPressed: ctrlIsPressed(a), parseBoolean: parseBoolean(a), randomUUID: randomUUID(), … }
}
// #regionend

// #region: WCMAPI
export namespace WCMAPI {
    export function _isAppleMobile(): boolean;
    export function _isMobile(): boolean;
    export function getBrowserName(): string;
    export function getBrowserVersion(): number;
    export function getDefaltDelays(): number;
    export function isMobileAppMode(): boolean;
    export function setDefaltDelays(delay: number): void;
    export const applicationCode: string;
    export const browserName: string;
    export const browserVersion: number;
    export const colorBackground: string;
    export const colorMenu: string;
    export const contextPath: string;
    export const debug: boolean;
    export const defaltDelays: number;
    export const enabledFeatures: unknown[];
    export const envType: string;
    export const fluigInstanceVersionName: string;
    export const fluigPaas: boolean;
    export const fluigVersion: string;
    export const fluigVersionBuild: string;
    export const fluigVersionStatus: string;
    export const fluigVersionStatusInfo: string;
    export const friendlyURL: string;
    export const googleAnalyticsAccount: string;
    export const googleAnalyticsEnabled: boolean;
    export const homePageCode: string;
    export const imageBackground: 'false' | 'true';
    export const imageLogo: 'false' | 'true';
    export const isEditMode: 'false' | 'true';
    export const isFeatureServerEnabled: boolean;
    export const isLegacyAppsEnabled: boolean;
    export const isLegacyLMSEnabled: boolean;
    export const isNewBuilder: boolean;
    export const isPreviewMode: 'false' | 'true';
    export const isResponsiveLayout: boolean;
    export const isSAMLEnabled: boolean;
    export const listeners: {
        'change-system-properties': Record<string, unknown>[];
        'keep-theme-responsive': Record<string, unknown>[];
        'switch-to-old-theme': Record<string, unknown>[];
        'toggle-main-menu': Record<string, unknown>[];
        closePopoverNotify: Record<string, unknown>[];
        closePopoverProfile: Record<string, unknown>[];
        countunreadalerts: Record<string, unknown>[];
        documentCheckOut: Record<string, unknown>[];
        logoff: Record<string, unknown>[];
        refreshNotificationList: Record<string, unknown>[];
        undefined: unknown[];
    };
    export const locale: 'es' | 'pt_BR' | 'en_US';
    export const localeDisplayName: 'português (Brasil)' | 'string' | 'string';
    export const noCode: boolean;
    export const nocodeActive: boolean;
    export const organizationId: string;
    export const pageAuthType: string;
    export const pageCode: string;
    export const pageId: string;
    export const pageIsInternal: boolean;
    export const pageLayout: string;
    export const pageTitle: string;
    export const pageType: string;
    export const parentPageCode: string;
    export const protectedContextPath: string;
    export const replicationServerCentralized: boolean;
    export const replicationServerEnabled: boolean;
    export const searchTimer: unknown | null;
    export const serverContextURL: string;
    export const serverURL: string;
    export const sessExpired: boolean;
    export const sessTimeoutExpInt: boolean;
    export const sessTimeoutMsg: boolean;
    export const spaceId: string;
    export const tenantCode: string;
    export const tenantPATH: string;
    export const tenantURI: string;
    export const tenantURL: string;
    export const themeId: string;
    export const timezone: string;
    export const uploadURL: string;
    export const user: string;
    export const userBar: unknown | null;
    export const userCode: string;
    export const userEmail: string;
    export const userId: string;
    export const userIsLogged: boolean;
    export const userLocationCode: string;
    export const userLocationId: string;
    export const userLocationUrl: string;
    export const userLogin: string;
    export const userType: string;
    export const version: string;
}
declare global {
    interface Window {
        WCMAPI: typeof WCMAPI;
    }
}
// #regionend

// =============================================================================
// SECTION: APIs
// =============================================================================

// #region: Dataset
export type Constraint = {
    constraintsField: string;
    constraintsInitialValue: string;
    constraintsFinalValue: string;
    constraintsType: 'MUST' | 'SHOULD' | 'MUST_NOT' | 'SHOULD_NOT';
    constraintsLikeSearch: 'false' | 'true';
};
// #regionend
