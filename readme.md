<!-- @format -->

# @types/totvs-fluig

## TODO

- [ ] Style Guide 🚧
- [x] Libraries ✅
- [x] Variables ✅
- [ ] Methods 🚧
- [ ] ~~APIs 🤷~~
- [ ] ~~Datasets 🤷~~
- [ ] ~~Form events 🤷~~
- [ ] ~~Workflow events 🤷~~
- [ ] ~~Global events 🤷~~
- [ ] ~~Customized mechanism 🤷~~
- [ ] ~~BIRT (Report) 🤷~~
- [ ] ~~Layout 🤷~~

## Style Guide

### Javascript

Source: [Style Guide - JavaScript](https://style.fluig.com/javascript.html)

- [ ] Super widget
- [ ] Autocomplete
- [ ] Back to bottom
- [ ] Back to top
- [ ] Buttons
- [ ] Calendar
- [ ] Collapse
- [ ] Continuous scroll
- [ ] Copy
- [ ] Confirm, Alert and Error messages
- [ ] Datatable
- [ ] Dropdowns
- [ ] Desktop notification
- [ ] Editable
- [ ] Input form with clear
- [ ] Loading
- [ ] Modals
- [ ] Message page
- [ ] Password
- [ ] Periodical executor
- [ ] Popover
- [ ] Sidebar
- [ ] Sliders
- [x] Storage
- [ ] Switch button
- [ ] Time interaction
- [ ] Toast
- [ ] Toggleable tabs
- [ ] Tooltip
- [ ] Utilities
- [ ] Wizard modal

### Chart

Source: [Style Guide - Chart](https://style.fluig.com/chart.html)

- [ ] Line
- [ ] Bar
- [ ] Radar
- [ ] Polar
- [ ] Pie
- [ ] Doughnut
- [ ] Gauge
- [ ] Donut
- [ ] Line bar

### Miscellaneous

Source: [Style Guide - Miscellaneous](https://style.fluig.com/miscellaneous.html)

- [ ] Add to calendar
- [ ] Carousel
- [ ] Code editor
- [ ] Color picker
- [ ] Cropper
- [ ] Filter
- [ ] Organizational chart
- [ ] Player
- [ ] Rating stars
- [ ] Sounds
- [ ] Tags cloud
- [ ] Tree view

## Libraries

### DatasetFactory

Source: [vcXMLRPC.js](https://lab.fluig.com/webdesk/vcXMLRPC.js)

- [x] getDataset
- [x] getAvailableDatasets
- [x] getDatasetValues
- [x] createConstraint

### WCMAPI

Source: [WCM Global](https://lab.fluig.com/resources/js/wcm_global_pt_BR.js)

- [x] applicationCode
- [x] browserName
- [x] browserVersion
- [x] colorBackground
- [x] colorMenu
- [x] contextPath
- [x] debug
- [x] defaltDelays
- [x] enabledFeatures
- [x] envType
- [x] fluigInstanceVersionName
- [x] fluigPaas
- [x] fluigVersion
- [x] fluigVersionBuild
- [x] fluigVersionStatus
- [x] fluigVersionStatusInfo
- [x] friendlyURL
- [x] getBrowserName
- [x] getBrowserVersion
- [x] getDefaltDelays
- [x] googleAnalyticsAccount
- [x] googleAnalyticsEnabled
- [x] homePageCode
- [x] imageBackground
- [x] imageLogo
- [x] isEditMode
- [x] isFeatureServerEnabled
- [x] isLegacyAppsEnabled
- [x] isLegacyLMSEnabled
- [x] isMobileAppMode
- [x] isNewBuilder
- [x] isPreviewMode
- [x] isResponsiveLayout
- [x] isSAMLEnabled
- [x] listeners
- [x] locale
- [x] localeDisplayName
- [x] noCode
- [x] nocodeActive
- [x] organizationId
- [x] pageAuthType
- [x] pageCode
- [x] pageId
- [x] pageIsInternal
- [x] pageLayout
- [x] pageTitle
- [x] pageType
- [x] parentPageCode
- [x] protectedContextPath
- [x] replicationServerCentralized
- [x] replicationServerEnabled
- [x] searchTimer
- [x] serverContextURL
- [x] serverURL
- [x] sessExpired
- [x] sessTimeoutExpInt
- [x] sessTimeoutMsg
- [x] setDefaltDelays
- [x] spaceId
- [x] tenantCode
- [x] tenantPATH
- [x] tenantURI
- [x] tenantURL
- [x] themeId
- [x] timezone
- [x] uploadURL
- [x] user
- [x] userBar
- [x] userCode
- [x] userEmail
- [x] userId
- [x] userIsLogged
- [x] userLocationCode
- [x] userLocationId
- [x] userLocationUrl
- [x] userLogin
- [x] userType
- [x] version

### FORMS

Source: [forms.js](/ecm_resources/resources/assets/forms/forms.js)

- [x] userLang

## Variables

- [x] WKDef
- [x] WKDefField
- [x] WKNumProces
- [x] WKNumProcesField
- [x] WKNumState
- [x] WKNumStateField
- [x] WKVersDef
- [x] WKVersDefField

## Methods

Source: [forms.js](/ecm_resources/resources/assets/forms/forms.js)

- [x] getUserLang
- [x] JSInterface
- [ ] reloadZoomFilterValues
- [ ] removedZoomItem
- [ ] setSelectedZoomItem
- [x] wdkAddChild
- [x] fnWdkRemoveChild
- [x] beforeStateEntry
- [x] beforeSendValidate

## APIs

Source: [Fluig APIs](https://api.fluig.com/latest/index.html)

### Content management

- [ ] [Documents](https://api.fluig.com/latest/content-management/swagger-ui/#/Documents)
- [ ] [Pastas](https://api.fluig.com/latest/content-management/swagger-ui/#/Pastas)
- [ ] [Marca d'água](https://api.fluig.com/latest/content-management/swagger-ui/#/Marca d'água)

### Page management

- [ ] [Widgets](https://api.fluig.com/latest/page-management/swagger-ui/#/Widgets)
- [ ] [Layouts](https://api.fluig.com/latest/page-management/swagger-ui/#/Layouts)
- [ ] [Pages](https://api.fluig.com/latest/page-management/swagger-ui/#/Pages)
- [ ] [Themes](https://api.fluig.com/latest/page-management/swagger-ui/#/Themes)

### Process management

- [ ] [Exportador de Workflow](https://api.fluig.com/latest/process-management/swagger-ui/#/Exportador de Workflow)
- [ ] [Activities](https://api.fluig.com/latest/process-management/swagger-ui/#/Activities)
- [ ] [Date calculation](https://api.fluig.com/latest/process-management/swagger-ui/#/Date calculation)
- [ ] [Processes](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes)
- [ ] [Requests](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests)
- [ ] [Tasks](https://api.fluig.com/latest/process-management/swagger-ui/#/Tasks)
- [ ] [User substitution](https://api.fluig.com/latest/process-management/swagger-ui/#/User substitution)

### ECM forms

- [ ] [Form records](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Form records)
- [ ] [Forms](https://api.fluig.com/latest/ecm-forms/swagger-ui/#/Forms)

### Integration

- [ ] [Operations](https://api.fluig.com/latest/dataservice/swagger-ui/#/Operations)

### Social

- [ ] [Communities](https://api.fluig.com/latest/collaboration/swagger-ui/#/Communities)
- [ ] [Favorites](https://api.fluig.com/latest/collaboration/swagger-ui/#/Favorites)
- [ ] [Followers](https://api.fluig.com/latest/collaboration/swagger-ui/#/Followers)
- [ ] [Media](https://api.fluig.com/latest/collaboration/swagger-ui/#/Media)
- [ ] [Attendance](https://api.fluig.com/latest/collaboration/swagger-ui/#/Attendance)
- [ ] [Profile picture](https://api.fluig.com/latest/collaboration/swagger-ui/#/Profile picture)
- [ ] [Posts](https://api.fluig.com/latest/collaboration/swagger-ui/#/Posts)
- [ ] [Users](https://api.fluig.com/latest/collaboration/swagger-ui/#/Users)
- [ ] [Socials](https://api.fluig.com/latest/collaboration/swagger-ui/#/Socials)
- [ ] [Timeline](https://api.fluig.com/latest/collaboration/swagger-ui/#/Timeline)

### Administrator

- [ ] [Groups](https://api.fluig.com/latest/admin/swagger-ui/#/Groups)
- [ ] [Roles](https://api.fluig.com/latest/admin/swagger-ui/#/Roles)
- [ ] [Users](https://api.fluig.com/latest/admin/swagger-ui/#/Users)

### Dataset

- [ ] [Datasets](https://api.fluig.com/latest/dataset/swagger-ui/#/Datasets)
- [ ] [Dataset handle](https://api.fluig.com/latest/dataset/swagger-ui/#/Dataset handle)
- [ ] [Dataset history](https://api.fluig.com/latest/dataset/swagger-ui/#/Dataset history)

### Environment

- [ ] [Monitor status](https://api.fluig.com/latest/environment/swagger-ui/#/Monitor status)
- [ ] [Statistics](https://api.fluig.com/latest/environment/swagger-ui/#/Statistics)

### Use policy

- [ ] [Use policies](https://api.fluig.com/latest/use-policy/swagger-ui/#/Use policies)
