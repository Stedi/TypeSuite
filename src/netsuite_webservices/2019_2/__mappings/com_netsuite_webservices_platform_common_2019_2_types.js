var com_netsuite_webservices_platform_common_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_platform_common_2019_2_types = {
    name: 'com_netsuite_webservices_platform_common_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'VsoeDeferral',
        values: ['_deferBundleUntilDelivered', '_deferUntilItemDelivered']
      }, {
        type: 'enumInfo',
        localName: 'RevenueCommitStatus',
        values: ['_committed', '_partiallyCommitted', '_pendingCommitment']
      }, {
        type: 'enumInfo',
        localName: 'PostingPeriodDate',
        values: ['_firstFiscalQuarterOfLastFy', '_firstFiscalQuarterOfThisFy', '_fiscalQuarterBeforeLast', '_fiscalYearBeforeLast', '_fourthFiscalQuarterOfLastFy', '_fourthFiscalQuarterOfThisFy', '_lastFiscalQuarter', '_lastFiscalQuarterOneFiscalYearAgo', '_lastFiscalQuarterToPeriod', '_lastFiscalYear', '_lastFiscalYearToPeriod', '_lastPeriod', '_lastPeriodOneFiscalQuarterAgo', '_lastPeriodOneFiscalYearAgo', '_lastRolling18periods', '_lastRolling6fiscalQuarters', '_periodBeforeLast', '_sameFiscalQuarterOfLastFy', '_sameFiscalQuarterOfLastFyToPeriod', '_samePeriodOfLastFiscalQuarter', '_samePeriodOfLastFy', '_secondFiscalQuarterOfLastFy', '_secondFiscalQuarterOfThisFy', '_thirdFiscalQuarterOfLastFy', '_thirdFiscalQuarterOfThisFy', '_thisFiscalQuarter', '_thisFiscalQuarterToPeriod', '_thisFiscalYear', '_thisFiscalYearToPeriod', '_thisPeriod']
      }, {
        type: 'enumInfo',
        localName: 'VsoePermitDiscount',
        values: ['_asAllowed', '_never']
      }, {
        type: 'enumInfo',
        localName: 'ShippingCarrier',
        values: ['_fedexUspsMore', '_ups']
      }, {
        type: 'enumInfo',
        localName: 'GlobalSubscriptionStatus',
        values: ['_confirmedOptIn', '_confirmedOptOut', '_softOptIn', '_softOptOut']
      }, {
        type: 'enumInfo',
        localName: 'ItemSource',
        values: ['_stock', '_phantom', '_workOrder', '_purchaseOrder']
      }, {
        type: 'enumInfo',
        localName: 'TransactionBillVarianceStatus',
        values: ['_journalNotPosted', '_journalPosted', '_noVariances']
      }, {
        type: 'enumInfo',
        localName: 'PermissionCode',
        values: ['_accessPaymentAuditLog', '_accessTokenManagement', '_accountDetail', '_accounting', '_accountingBook', '_accountingLists', '_accounts', '_accountsPayable', '_accountsPayableGraphing', '_accountsPayableRegister', '_accountsReceivable', '_accountsReceivableGraphing', '_accountsReceivableRegister', '_accountsReceivableUnbilled', '_address', '_adjustInventory', '_adjustInventoryWorksheet', '_admindocs', '_admindocsEu', '_admindocsNa', '_admindocsOther', '_adpImportData', '_adpSetup', '_advancedAnalytics', '_advancedGovernmentIssuedIds', '_advancedOrderManagement', '_advancedPDFHTMLTemplates', '_allocationSchedules', '_allowJsHtmlUploads', '_allowNonGLChanges', '_allowPendingBookJournalEntry', '_amendW4', '_amortizationReports', '_amortizationSchedules', '_analyticsAdministrator', '_applicationPublishers', '_approveDirectDeposit', '_approveEFT', '_approveOnlineBillPayments', '_approveVendorPayments', '_auditTrail', '_automatedCashApplication', '_backupYourData', '_balanceLocationCostingGroupAccounts', '_balanceSheet', '_balanceTransactionsBySegments', '_balancingJournals', '_bankAccountRegisters', '_bankConnectivityPlugInConfiguration', '_basicGovernmentIssuedIds', '_billInboundShipment', '_billingInformation', '_billingSchedules', '_billOfDistribution', '_billOfMaterials', '_billOfMaterialsInquiry', '_billPurchaseOrders', '_bills', '_billSalesOrders', '_bins', '_binTransfer', '_binWorksheet', '_blanketPurchaseOrder', '_blanketPurchaseOrderApproval', '_budget', '_buildAssemblies', '_buildWorkOrders', '_calculateTime', '_calendar', '_campaignHistory', '_caseAlerts', '_cases', '_cashFlowStatement', '_cashSale', '_cashSaleRefund', '_certificateAccess', '_certificateManagement', '_changeEmailOrPassword', '_changeRole', '_chargeRule', '_chargeRunRules', '_check', '_checkItemAvailability', '_classes', '_classMapping', '_closeAccount', '_closeWorkOrders', '_colorThemes', '_commerceCategories', '_commissionFeatureSetup', '_commissionReports', '_commitOrders', '_commitPayroll', '_companies', '_companyInformation', '_competitors', '_componentWhereUsed', '_contactRoles', '_contacts', '_controlSuitescriptAndWorkflowTriggersInWebServicesRequest', '_controlSuitescriptAndWorkflowTriggersPerCsvImport', '_convertClassesToDepartments', '_convertClassesToLocations', '_copyBudgets', '_copyChartOfAccountsToNewCompany', '_copyProjectTasks', '_coreAdministrationPermissions', '_costedBillOfMaterialsInquiry', '_costOfGoodsSoldRegisters', '_countInventory', '_createAllocationSchedules', '_createConsolidationCompany', '_createFiscalCalendar', '_createInventoryCounts', '_createJobsFromSalesTransactions', '_creditCard', '_creditCardProcessing', '_creditCardRefund', '_creditCardRegisters', '_creditMemo', '_creditReturns', '_crmGroups', '_crmLists', '_cspSetup', '_currency', '_currencyAdjustmentJournal', '_currencyRevaluation', '_customAddressForm', '_customBodyFields', '_customCenterCategories', '_customCenterLinks', '_customCenters', '_customCenterTabs', '_customColumnFields', '_customEntityFields', '_customEntryForms', '_customerCharge', '_customerDeposit', '_customerPayment', '_customerPaymentAuthorization', '_customerProfile', '_customerRefund', '_customers', '_customerStatus', '_customEventFields', '_customFields', '_customGlLinesPlugInAuditLog', '_customGlLinesPlugInAuditLogSegments', '_customHTMLLayouts', '_customItemFields', '_customItemNumberFields', '_customizeFieldLevelHelp', '_customizePage', '_customLists', '_customPDFLayouts', '_customRecognitionEventType', '_customRecordEntries', '_customRecordTypes', '_customSegments', '_customSublist', '_customSublists', '_customSubtabs', '_customTransactionFields', '_customTransactionForms', '_customTransactionTypes', '_deferredExpenseRegisters', '_deferredExpenseReports', '_deferredRevenueRegisters', '_deleteAllData', '_deletedRecords', '_deleteEvent', '_departmentMapping', '_departments', '_deposit', '_depositApplication', '_deviceIdManagement', '_directDepositStatus', '_distributeInventory', '_distributionNetwork', '_documentsAndFiles', '_duplicateCaseManagement', '_duplicateDetectionSetup', '_duplicateRecordManagement', '_editBankingInformation', '_editForecast', '_editManagerForecast', '_editProfile', '_eftStatus', '_emailReports', '_emailTemplate', '_employeeAccessTab', '_employeeAdministration', '_employeeCenterPublishing', '_employeeChangeReason', '_employeeChangeRequest', '_employeeChangeType', '_employeeCommissionSchedulesPlans', '_employeeCommissionTransaction', '_employeeCommissionTransactionApproval', '_employeeConfidential', '_employeeEffectiveDating', '_employeePublic', '_employeeRecord', '_employeeReminders', '_employees', '_employeeSelf', '_employeeSocialSecurityNumbers', '_enableFeatures', '_enterCompletions', '_enterOpeningBalances', '_enterVendorCredits', '_enterYearToDatePayrollAdjustments', '_entityAccountMapping', '_equityRegisters', '_escalationAssignment', '_escalationAssignmentRule', '_establishQuotas', '_estimate', '_events', '_expenseAmortizationPlan', '_expenseAmortizationRule', '_expenseCategories', '_expenseRegisters', '_expenseReport', '_expenses', '_exportAsIIF', '_exportLists', '_fairValueDimension', '_fairValueFormula', '_fairValuePrice', '_faxMessages', '_faxTemplate', '_financeCharge', '_financeChargePreferences', '_financialHistory', '_financialInstitutionRecords', '_financialStatementLayouts', '_financialStatements', '_financialStatementSections', '_findTransaction', '_fiscalCalendars', '_fixedAssetRegisters', '_foreignCurrencyVarianceMapping', '_form1099FederalMiscellaneousIncome', '_form940EmployersAnnualFederalUnemploymentTaxReturn', '_form941EmployersQuarterlyFederalTaxReturn', '_formW2WageAndTaxStatement', '_formW4EmployeesWithholdingAllowanceCertificate', '_fulfillmentExceptionReason', '_fulfillmentRequest', '_fulfillOrders', '_generalLedger', '_generalToken', '_generatePriceLists', '_generateRevenueCommitment', '_generateRevenueCommitmentReversals', '_generateSingleOrderRevenueContracts', '_generateStatements', '_genericResources', '_globalAccountMapping', '_globalInventoryRelationship', '_governmentIssuedIdTypes', '_grantingAccessToReports', '_gstSummaryReport', '_hideEmployeeInformationOnFinancialReports', '_importCSVFile', '_importOnlineBankingFile', '_importStateSalesTax', '_inboundShipment', '_income', '_incomeRegisters', '_incomeStatement', '_individualPaycheck', '_integration', '_integrationApplication', '_integrationApplications', '_intercompanyAdjustments', '_internalPublisher', '_inventory', '_inventoryCostTemplate', '_inventoryStatus', '_inventoryStatusChange', '_invoice', '_invoiceApproval', '_issueComponents', '_issueReports', '_issues', '_issueSetup', '_itemAccountMapping', '_itemCategoryLayouts', '_itemDemandPlan', '_itemFulfillment', '_itemProcessFamily', '_itemProcessGroup', '_itemReceipt', '_itemRevenueCategory', '_itemRevisions', '_items', '_itemSupplyPlan', '_itemTemplates', '_jobManagement', '_jobRequisitions', '_jobs', '_journalApproval', '_knowledgeBase', '_kpiScorecards', '_kudos', '_leadConversion', '_leadConversionMapping', '_leadSnapshotReminders', '_letterMessages', '_letterTemplate', '_locationCostingGroup', '_locationMapping', '_locations', '_lockTransactions', '_logInUsingAccessTokens', '_longTermLiabilityRegisters', '_mailMerge', '_makeJournalEntry', '_manageAccountingPeriods', '_manageCustomPermissions', '_managePayroll', '_manageRoles', '_manageTaxReportingPeriods', '_manageTranslation', '_manageUsers', '_manufacturingCostTemplate', '_manufacturingRouting', '_marketingCampaignReports', '_marketingCampaigns', '_marketingTemplate', '_markIssueAsShowStopper', '_markWorkOrdersBuilt', '_markWorkOrdersFirmed', '_markWorkOrdersReleased', '_massUpdates', '_matchingRulesForOnlineBanking', '_mediaFolders', '_memorizedTransactions', '_merchandiseHierarchyLevel', '_merchandiseHierarchyNode', '_merchandiseHierarchyVersion', '_migrateRevenueArrangementsAndPlans', '_mobileDeviceAccess', '_netWorth', '_newsItems', '_nonPostingRegisters', '_noPermissionNecessary', '_notesTab', '_notifications', '_onlineCaseForm', '_onlineCustomerForm', '_onlineCustomRecordForm', '_openidSingleSignOn', '_opportunity', '_organizationalValue', '_otherAssetRegisters', '_otherCurrentAssetRegisters', '_otherCurrentLiabilityRegisters', '_otherCustomFields', '_otherExpenseRegisters', '_otherIncomeRegisters', '_otherLists', '_otherNames', '_outboundRequest', '_outlookIntegration', '_outlookIntegration3', '_overrideEstimatedCostOnTransactions', '_overridePaymentHold', '_overridePeriodRestrictions', '_ownershipTransfer', '_partnerAuthorizedCommissionReports', '_partnerCommissionReports', '_partnerCommissionSchedulesPlans', '_partnerCommissionTransaction', '_partnerCommissionTransactionApproval', '_partnerContribution', '_partners', '_payBills', '_paycheckJournal', '_paychecks', '_paymentCard', '_paymentCardToken', '_paymentInstruments', '_paymentMethods', '_payrollCheckRegister', '_payrollHoursAndEarnings', '_payrollItems', '_payrollJournalReport', '_payrollLiabilityPayments', '_payrollLiabilityReport', '_payrollStateWithholding', '_payrollSummaryAndDetailReports', '_paySalesTax', '_payTaxLiability', '_pdfMessages', '_pdfTemplate', '_performSearch', '_periodClosingManagement', '_periodEndFinancialStatements', '_periodEndJournals', '_persistSearch', '_phasedProcesses', '_phoneCalls', '_pickStrategy', '_pickTask', '_plannedRevenue', '_plannedStandardCost', '_positions', '_postingPeriodOnTransactions', '_postTime', '_postVendorBillVariances', '_presentationCategories', '_printChecksAndForms', '_printEmailFax', '_printShipmentDocuments', '_processGSTRefund', '_processPayroll', '_projectProfitability', '_projectProfitabilitySetup', '_projectProjectTemplateConversion', '_projectRevenueRules', '_projectTasks', '_projectTemplates', '_promotionCode', '_provisioning', '_provisioningForQa', '_provisionNewAccountOnTestdrive', '_provisionTestDrive', '_pstSummaryReport', '_publicTemplateCategories', '_publishDashboards', '_publishEmployeeList', '_publishForms', '_publishKnowledgeBase', '_publishRSSFeeds', '_publishSearch', '_purchaseContract', '_purchaseContractApproval', '_purchaseOrder', '_purchaseOrderReports', '_purchases', '_quantityPricingSchedules', '_quotaReports', '_receiveOrder', '_receiveReturns', '_recognizeGiftCertificateIncome', '_reconcile', '_reconcileReporting', '_recordCustomField', '_refundReturns', '_relatedItems', '_reportCustomization', '_reportScheduling', '_requestForQuote', '_requisition', '_requisitionApproval', '_resource', '_resourceAllocationApproval', '_resourceAllocationReports', '_resourceAllocations', '_resourceGroups', '_restWebServices', '_returnAuthApproval', '_returnAuthorization', '_returnAuthorizationReports', '_revalueInventoryCost', '_revenueArrangement', '_revenueArrangementApproval', '_revenueCommitment', '_revenueCommitmentReversal', '_revenueContracts', '_revenueElement', '_revenueManagementVSOE', '_revenueRecognitionFieldMapping', '_revenueRecognitionPlan', '_revenueRecognitionReports', '_revenueRecognitionRule', '_revenueRecognitionSchedules', '_reviewCustomGlPlugInExecutions', '_runPayroll', '_sales', '_salesByPartner', '_salesByPromotionCode', '_salesCampaigns', '_salesForceAutomation', '_salesForceAutomationSetup', '_salesOrder', '_salesOrderApproval', '_salesOrderFulfillmentReports', '_salesOrderReports', '_salesOrderTransactionReport', '_salesRoles', '_salesTerritory', '_salesTerritoryRule', '_samlSingleSignOn', '_scheduleMassUpdates', '_setUpAccounting', '_setUpAchProcessing', '_setUpAdpPayroll', '_setUpBillPay', '_setUpBudgets', '_setUpCampaignEmailAddresses', '_setupCampaigns', '_setUpCompany', '_setUpCsvPreferences', '_setUpDomains', '_setUpImageResizing', '_setUpOpenidSingleSignOn', '_setUpPayroll', '_setUpReminders', '_setUpSamlSingleSignOn', '_setUpSnapshots', '_setUpWebServices', '_setUpWebSite', '_setUpYearStatus', '_shippingItems', '_shippingPartnerPackage', '_shippingPartnerRegistration', '_shippingPartnerShipment', '_shortcuts', '_siteSearch', '_standardCostVersion', '_statementCharge', '_statisticalAccountRegisters', '_storeCategories', '_storeContentCategories', '_storeContentItems', '_storePickupFulfillment', '_storeTabs', '_subscriptionPlan', '_subscriptions', '_subsidiaries', '_subsidiaryTaxEngineSelection', '_suiteAnalyticsConnectReadAll', '_suiteAnalyticsWorkbook', '_suiteAppDeployment', '_suiteAppManagement', '_suiteAppMarketplace', '_suiteBundlerAuditTrail', '_suiteBundlerUpgrades', '_suiteScript', '_suiteScriptNlCorpManagement', '_suiteScriptScheduling', '_suiteSignon', '_suitetaxMigration', '_supplyChainSnapshotList', '_support', '_supportCaseIssue', '_supportCaseOrigin', '_supportCasePriority', '_supportCaseSnapshotReminders', '_supportCaseStatus', '_supportCaseTerritory', '_supportCaseTerritoryRule', '_supportCaseType', '_supportSetup', '_swapPricesBetweenPriceLevels', '_systemEmailTemplate', '_systemStatus', '_tableauWorkbookExport', '_talentAdministration', '_tasks', '_tax', '_taxDetailsTab', '_taxItems', '_taxReports', '_taxSchedules', '_teamSellingContribution', '_tegataAccounts', '_tegataPayable', '_tegataReceivable', '_telephonyIntegration', '_templateCategories', '_terminationReasons', '_testdriveMasters', '_timeOffAdministration', '_timer', '_timeTracking', '_trackMessages', '_trackTime', '_transactionDetail', '_transactionNumberingAuditLog', '_transactionReceiveInboundShipment', '_transferFunds', '_transferInventory', '_transferOrder', '_transferOrderApproval', '_translation', '_trialBalance', '_twoFactorAuthentication', '_twoFactorAuthenticationBase', '_unbilledReceivableRegisters', '_unbuildAssemblies', '_uncategorizedPresentationItems', '_undeliveredEmails', '_units', '_updatePrices', '_upsellAssistant', '_upsellSetup', '_upsellWizard', '_usage', '_userAccessTokens', '_userPreferences', '_usersAndPasswords', '_vendorBillApproval', '_vendorInTransitPaymentApproval', '_vendorPaymentStatus', '_vendorRequestForQuote', '_vendorReturnAuthApproval', '_vendorReturnAuthorization', '_vendorReturns', '_vendors', '_viewGatewayAsynchronousNotifications', '_viewLoginAuditTrail', '_viewOnlineBillPayStatus', '_viewPaymentEvents', '_viewUnencryptedCreditCards', '_viewWebServicesLogs', '_wave', '_webServices', '_webSiteExternalPublisher', '_webSiteManagement', '_webSiteReport', '_webStoreEmailTemplate', '_webStoreReport', '_workCalendar', '_workflow', '_workforceAnalytics', '_workOrder', '_workOrderClose', '_workOrderCompletion', '_workOrderIssue', '_workplaces', '_zone']
      }, {
        type: 'enumInfo',
        localName: 'RecurrenceDowim',
        values: ['_first', '_second', '_third', '_fourth', '_last']
      }, {
        type: 'enumInfo',
        localName: 'Language',
        values: ['_afrikaans', '_albanian', '_arabic', '_armenian', '_bengali', '_bosnian', '_bulgarian', '_catalan', '_chineseSimplified', '_chineseTraditional', '_croatian', '_czech', '_danish', '_dutch', '_englishAu', '_englishCa', '_englishInternational', '_englishUK', '_englishUS', '_estonian', '_filipino', '_finnish', '_frenchCanada', '_frenchFrance', '_german', '_greek', '_gujarati', '_haitian', '_hebrew', '_hindi', '_hungarian', '_icelandic', '_indonesian', '_italian', '_japanese', '_kannada', '_korean', '_latinAmericanSpanish', '_latvian', '_lithuanian', '_luxembourgish', '_malay', '_marathi', '_norwegian', '_persianIran', '_polish', '_portugueseBrazil', '_portuguesePortugal', '_punjabi', '_romanian', '_russian', '_serbianCyrillic', '_serbianLatin', '_slovak', '_slovenian', '_spanish', '_swedish', '_tamil', '_telugu', '_thai', '_turkish', '_ukrainian', '_vietnamese']
      }, {
        type: 'enumInfo',
        localName: 'CurrencySymbolPlacement',
        values: ['_afterNumber', '_beforeNumber']
      }, {
        type: 'enumInfo',
        localName: 'LandedCostMethod',
        values: ['_quantity', '_value', '_weight', '_line']
      }, {
        type: 'enumInfo',
        localName: 'RevenueStatus',
        values: ['_pending', '_inProgress', '_completed', '_onRevCommitment']
      }, {
        type: 'enumInfo',
        localName: 'RecurrenceDow',
        values: ['_sunday', '_monday', '_tuesday', '_wednesday', '_thursday', '_friday', '_saturday']
      }, {
        type: 'enumInfo',
        localName: 'CscMatchCode',
        values: ['_n', '_x', '_y']
      }, {
        type: 'enumInfo',
        localName: 'AvsMatchCode',
        values: ['_n', '_x', '_y']
      }, {
        type: 'enumInfo',
        localName: 'PresentationItemType',
        values: ['_fileCabinetItem', '_informationItem', '_item', '_presentationCategory']
      }, {
        type: 'enumInfo',
        localName: 'VsoeSopGroup',
        values: ['_exclude', '_normal', '_software']
      }, {
        type: 'enumInfo',
        localName: 'Country',
        values: ['_afghanistan', '_alandIslands', '_albania', '_algeria', '_americanSamoa', '_andorra', '_angola', '_anguilla', '_antarctica', '_antiguaAndBarbuda', '_argentina', '_armenia', '_aruba', '_australia', '_austria', '_azerbaijan', '_bahamas', '_bahrain', '_bangladesh', '_barbados', '_belarus', '_belgium', '_belize', '_benin', '_bermuda', '_bhutan', '_bolivia', '_bonaireSaintEustatiusAndSaba', '_bosniaAndHerzegovina', '_botswana', '_bouvetIsland', '_brazil', '_britishIndianOceanTerritory', '_bruneiDarussalam', '_bulgaria', '_burkinaFaso', '_burundi', '_cambodia', '_cameroon', '_canada', '_canaryIslands', '_capeVerde', '_caymanIslands', '_centralAfricanRepublic', '_ceutaAndMelilla', '_chad', '_chile', '_china', '_christmasIsland', '_cocosKeelingIslands', '_colombia', '_comoros', '_congoDemocraticPeoplesRepublic', '_congoRepublicOf', '_cookIslands', '_costaRica', '_coteDIvoire', '_croatiaHrvatska', '_cuba', '_curacao', '_cyprus', '_czechRepublic', '_denmark', '_djibouti', '_dominica', '_dominicanRepublic', '_eastTimor', '_ecuador', '_egypt', '_elSalvador', '_equatorialGuinea', '_eritrea', '_estonia', '_ethiopia', '_falklandIslands', '_faroeIslands', '_fiji', '_finland', '_france', '_frenchGuiana', '_frenchPolynesia', '_frenchSouthernTerritories', '_gabon', '_gambia', '_georgia', '_germany', '_ghana', '_gibraltar', '_greece', '_greenland', '_grenada', '_guadeloupe', '_guam', '_guatemala', '_guernsey', '_guinea', '_guineaBissau', '_guyana', '_haiti', '_heardAndMcDonaldIslands', '_holySeeCityVaticanState', '_honduras', '_hongKong', '_hungary', '_iceland', '_india', '_indonesia', '_iranIslamicRepublicOf', '_iraq', '_ireland', '_isleOfMan', '_israel', '_italy', '_jamaica', '_japan', '_jersey', '_jordan', '_kazakhstan', '_kenya', '_kiribati', '_koreaDemocraticPeoplesRepublic', '_koreaRepublicOf', '_kosovo', '_kuwait', '_kyrgyzstan', '_laoPeoplesDemocraticRepublic', '_latvia', '_lebanon', '_lesotho', '_liberia', '_libya', '_liechtenstein', '_lithuania', '_luxembourg', '_macau', '_macedonia', '_madagascar', '_malawi', '_malaysia', '_maldives', '_mali', '_malta', '_marshallIslands', '_martinique', '_mauritania', '_mauritius', '_mayotte', '_mexico', '_micronesiaFederalStateOf', '_moldovaRepublicOf', '_monaco', '_mongolia', '_montenegro', '_montserrat', '_morocco', '_mozambique', '_myanmar', '_namibia', '_nauru', '_nepal', '_netherlands', '_newCaledonia', '_newZealand', '_nicaragua', '_niger', '_nigeria', '_niue', '_norfolkIsland', '_northernMarianaIslands', '_norway', '_oman', '_pakistan', '_palau', '_panama', '_papuaNewGuinea', '_paraguay', '_peru', '_philippines', '_pitcairnIsland', '_poland', '_portugal', '_puertoRico', '_qatar', '_reunionIsland', '_romania', '_russianFederation', '_rwanda', '_saintBarthelemy', '_saintHelena', '_saintKittsAndNevis', '_saintLucia', '_saintMartin', '_saintVincentAndTheGrenadines', '_samoa', '_sanMarino', '_saoTomeAndPrincipe', '_saudiArabia', '_senegal', '_serbia', '_seychelles', '_sierraLeone', '_singapore', '_sintMaarten', '_slovakRepublic', '_slovenia', '_solomonIslands', '_somalia', '_southAfrica', '_southGeorgia', '_southSudan', '_spain', '_sriLanka', '_stateOfPalestine', '_stPierreAndMiquelon', '_sudan', '_suriname', '_svalbardAndJanMayenIslands', '_swaziland', '_sweden', '_switzerland', '_syrianArabRepublic', '_taiwan', '_tajikistan', '_tanzania', '_thailand', '_togo', '_tokelau', '_tonga', '_trinidadAndTobago', '_tunisia', '_turkey', '_turkmenistan', '_turksAndCaicosIslands', '_tuvalu', '_uganda', '_ukraine', '_unitedArabEmirates', '_unitedKingdom', '_unitedStates', '_uruguay', '_uSMinorOutlyingIslands', '_uzbekistan', '_vanuatu', '_venezuela', '_vietnam', '_virginIslandsBritish', '_virginIslandsUSA', '_wallisAndFutunaIslands', '_westernSahara', '_yemen', '_zambia', '_zimbabwe']
      }, {
        type: 'enumInfo',
        localName: 'ItemCostEstimateType',
        values: ['_averageCost', '_custom', '_derivedFromMemberItems', '_itemDefinedCost', '_lastPurchasePrice', '_preferredVendorRate', '_purchaseOrderRate', '_purchasePrice']
      }, {
        type: 'enumInfo',
        localName: 'IntercoStatus',
        values: ['_paired', '_pending', '_rejected']
      }, {
        type: 'enumInfo',
        localName: 'Source',
        values: ['_adp', '_automatedMemorizedTransaction', '_csv', '_customerCenter', '_ebay', '_mobile', '_offlineClient', '_perquest', '_qif', '_quickbooks', '_scis', '_smbxml', '_sync', '_web', '_webServices', '_yahoo']
      }, {
        type: 'enumInfo',
        localName: 'TermRecurrenceFrequency',
        values: ['_annually', '_daily', '_monthly', '_weekly']
      }, {
        type: 'enumInfo',
        localName: 'RecurrenceFrequency',
        values: ['_none', '_day', '_week', '_month', '_year']
      }, {
        type: 'enumInfo',
        localName: 'LandedCostSource',
        values: ['_manual', '_otherTransaction', '_otherTransactionExcludeTax', '_thisTransaction']
      }, {
        type: 'enumInfo',
        localName: 'TimeItemTimeType',
        values: ['_actualTime', '_plannedTime']
      }, {
        type: 'enumInfo',
        localName: 'PermissionLevel',
        values: ['_create', '_edit', '_full', '_none', '_view']
      }, {
        type: 'enumInfo',
        localName: 'AlcoholRecipientType',
        values: ['_consumer', '_licensee']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_platform_common_2019_2_types: com_netsuite_webservices_platform_common_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_platform_common_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_platform_common_2019_2_types_Module = com_netsuite_webservices_platform_common_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_platform_common_2019_2_types = com_netsuite_webservices_platform_common_2019_2_types_Module.com_netsuite_webservices_platform_common_2019_2_types;
  }
  else {
    var com_netsuite_webservices_platform_common_2019_2_types = com_netsuite_webservices_platform_common_2019_2_types_Module.com_netsuite_webservices_platform_common_2019_2_types;
  }
}