var com_netsuite_webservices_lists_support_2019_2_Module_Factory = function () {
  var com_netsuite_webservices_lists_support_2019_2 = {
    name: 'com_netsuite_webservices_lists_support_2019_2',
    defaultElementNamespaceURI: 'urn:support_2019_2.lists.webservices.netsuite.com',
    dependencies: ['com_netsuite_webservices_platform_core_2019_2', 'com_netsuite_webservices_platform_common_2019_2', 'com_netsuite_webservices_lists_support_2019_2_types'],
    typeInfos: [{
        localName: 'Solution',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'customForm',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'solutionCode'
          }, {
            name: 'title'
          }, {
            name: 'message'
          }, {
            name: 'status',
            typeInfo: 'com_netsuite_webservices_lists_support_2019_2_types.SolutionStatus'
          }, {
            name: 'displayOnline',
            typeInfo: 'Boolean'
          }, {
            name: 'assigned',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'longDescription'
          }, {
            name: 'topicsList',
            typeInfo: '.SolutionTopicsList'
          }, {
            name: 'createdDate',
            typeInfo: 'DateTime'
          }, {
            name: 'lastModifiedDate',
            typeInfo: 'DateTime'
          }, {
            name: 'solutionsList',
            typeInfo: '.SolutionsList'
          }, {
            name: 'customFieldList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomFieldList'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseStatus',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'insertBefore',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'stage',
            typeInfo: 'com_netsuite_webservices_lists_support_2019_2_types.SupportCaseStatusStage'
          }, {
            name: 'caseOnHold',
            typeInfo: 'Boolean'
          }, {
            name: 'autoCloseCase',
            typeInfo: 'Boolean'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Issue',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'customForm',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'issueNumber'
          }, {
            name: 'createdDate',
            typeInfo: 'DateTime'
          }, {
            name: 'issueType',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'product',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'module',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'item',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'productTeam',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'source',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'reportedBy',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'reproduce',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'versionBroken',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'buildBroken',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'versionTarget',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'buildTarget',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'versionFixed',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'buildFixed',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'severity',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'priority',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'isShowStopper',
            typeInfo: 'Boolean'
          }, {
            name: 'assigned',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'reviewer',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'isReviewed',
            typeInfo: 'Boolean'
          }, {
            name: 'issueStatus',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'lastModifiedDate',
            typeInfo: 'DateTime'
          }, {
            name: 'issueTagsList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRefList'
          }, {
            name: 'issueAbstract'
          }, {
            name: 'newDetails'
          }, {
            name: 'isOwner',
            typeInfo: 'Boolean'
          }, {
            name: 'trackCode',
            typeInfo: 'com_netsuite_webservices_lists_support_2019_2_types.IssueTrackCode'
          }, {
            name: 'emailAssignee',
            typeInfo: 'Boolean'
          }, {
            name: 'emailEmployeesList',
            typeInfo: '.EmailEmployeesList'
          }, {
            name: 'emailCellsList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRefList'
          }, {
            name: 'externalAbstract'
          }, {
            name: 'externalDetails'
          }, {
            name: 'brokenInVersionList',
            typeInfo: '.IssueVersionList'
          }, {
            name: 'targetVersionList',
            typeInfo: '.IssueVersionList'
          }, {
            name: 'fixedInVersionList',
            typeInfo: '.IssueVersionList'
          }, {
            name: 'relatedIssuesList',
            typeInfo: '.IssueRelatedIssuesList'
          }, {
            name: 'customFieldList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomFieldList'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IssueSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.IssueSearchRowBasic'
          }, {
            name: 'caseJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SupportCaseSearchRowBasic'
          }, {
            name: 'employeeJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }, {
            name: 'fileJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchRowBasic'
          }, {
            name: 'productTeamJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EntityGroupSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }, {
            name: 'userNotesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.NoteSearchRowBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
          }]
      }, {
        localName: 'SupportCaseEscalateToList',
        propertyInfos: [{
            name: 'escalateTo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SupportCaseEscalateTo'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseOrigin',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'insertBefore',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IssueRelatedIssues',
        propertyInfos: [{
            name: 'relationship',
            typeInfo: 'com_netsuite_webservices_lists_support_2019_2_types.IssueRelationship'
          }, {
            name: 'issueNumber',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'relationshipComment'
          }]
      }, {
        localName: 'IssueSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.IssueSearch'
          }, {
            name: 'columns',
            typeInfo: '.IssueSearchRow'
          }, {
            name: 'savedSearchId',
            attributeName: {
              localPart: 'savedSearchId'
            },
            type: 'attribute'
          }, {
            name: 'savedSearchScriptId',
            attributeName: {
              localPart: 'savedSearchScriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopicSolution',
        propertyInfos: [{
            name: 'solution',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'message'
          }]
      }, {
        localName: 'IssueRelatedIssuesList',
        propertyInfos: [{
            name: 'issueRelatedIssues',
            minOccurs: 0,
            collection: true,
            typeInfo: '.IssueRelatedIssues'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopicSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.TopicSearch'
          }, {
            name: 'columns',
            typeInfo: '.TopicSearchRow'
          }, {
            name: 'savedSearchId',
            attributeName: {
              localPart: 'savedSearchId'
            },
            type: 'attribute'
          }, {
            name: 'savedSearchScriptId',
            attributeName: {
              localPart: 'savedSearchScriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IssueVersionList',
        propertyInfos: [{
            name: 'issueVersion',
            minOccurs: 0,
            collection: true,
            typeInfo: '.IssueVersion'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseType',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'insertBefore',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseSolutions',
        propertyInfos: [{
            name: 'solution',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'message'
          }, {
            name: 'dateApplied',
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'SolutionTopics',
        propertyInfos: [{
            name: 'topic',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }]
      }, {
        localName: 'SupportCaseEscalateTo',
        propertyInfos: [{
            name: 'escalatee',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'email'
          }, {
            name: 'phone'
          }]
      }, {
        localName: 'SolutionTopicsList',
        propertyInfos: [{
            name: 'topics',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SolutionTopics'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopicSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TopicSearchRowBasic'
          }, {
            name: 'solutionJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SolutionSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }]
      }, {
        localName: 'Solutions',
        propertyInfos: [{
            name: 'solution',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'message'
          }]
      }, {
        localName: 'EmailEmployeesList',
        propertyInfos: [{
            name: 'emailEmployees',
            required: true,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }]
      }, {
        localName: 'SupportCaseSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SupportCaseSearchRowBasic'
          }, {
            name: 'companyJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EntitySearchRowBasic'
          }, {
            name: 'contactJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ContactSearchRowBasic'
          }, {
            name: 'customerJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomerSearchRowBasic'
          }, {
            name: 'employeeJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }, {
            name: 'fileJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchRowBasic'
          }, {
            name: 'issueJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.IssueSearchRowBasic'
          }, {
            name: 'itemJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchRowBasic'
          }, {
            name: 'messagesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.MessageSearchRowBasic'
          }, {
            name: 'timeJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TimeBillSearchRowBasic'
          }, {
            name: 'transactionJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TransactionSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }, {
            name: 'userNotesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.NoteSearchRowBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
          }]
      }, {
        localName: 'TopicSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TopicSearchBasic'
          }, {
            name: 'solutionJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SolutionSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }]
      }, {
        localName: 'SolutionSearchRow',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRow',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SolutionSearchRowBasic'
          }, {
            name: 'caseJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SupportCaseSearchRowBasic'
          }, {
            name: 'relatedSolutionJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SolutionSearchRowBasic'
          }, {
            name: 'topicJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TopicSearchRowBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchRowBasic'
          }, {
            name: 'userNotesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.NoteSearchRowBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchRowBasic'
          }]
      }, {
        localName: 'SupportCaseSolutionsList',
        propertyInfos: [{
            name: 'solutions',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SupportCaseSolutions'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCasePriority',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'insertBefore',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SolutionsList',
        propertyInfos: [{
            name: 'solutions',
            minOccurs: 0,
            collection: true,
            typeInfo: '.Solutions'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.SupportCaseSearch'
          }, {
            name: 'columns',
            typeInfo: '.SupportCaseSearchRow'
          }, {
            name: 'savedSearchId',
            attributeName: {
              localPart: 'savedSearchId'
            },
            type: 'attribute'
          }, {
            name: 'savedSearchScriptId',
            attributeName: {
              localPart: 'savedSearchScriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseTimeItemList',
        propertyInfos: [{
            name: 'timeItem',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TimeItem'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IssueVersion',
        propertyInfos: [{
            name: 'primary',
            typeInfo: 'Boolean'
          }, {
            name: 'version',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'build',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }]
      }, {
        localName: 'SolutionSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SolutionSearchBasic'
          }, {
            name: 'caseJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SupportCaseSearchBasic'
          }, {
            name: 'relatedSolutionJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SolutionSearchBasic'
          }, {
            name: 'topicJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TopicSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }, {
            name: 'userNotesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.NoteSearchBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
          }]
      }, {
        localName: 'SupportCase',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'escalationMessage'
          }, {
            name: 'lastReopenedDate',
            typeInfo: 'DateTime'
          }, {
            name: 'endDate',
            typeInfo: 'DateTime'
          }, {
            name: 'incomingMessage'
          }, {
            name: 'insertSolution',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'outgoingMessage'
          }, {
            name: 'searchSolution'
          }, {
            name: 'emailForm',
            typeInfo: 'Boolean'
          }, {
            name: 'newSolutionFromMsg'
          }, {
            name: 'internalOnly',
            typeInfo: 'Boolean'
          }, {
            name: 'customForm',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'title'
          }, {
            name: 'caseNumber'
          }, {
            name: 'startDate',
            typeInfo: 'DateTime'
          }, {
            name: 'createdDate',
            typeInfo: 'DateTime'
          }, {
            name: 'lastModifiedDate',
            typeInfo: 'DateTime'
          }, {
            name: 'lastMessageDate',
            typeInfo: 'DateTime'
          }, {
            name: 'company',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'profile',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'subsidiary',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'contact',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'email'
          }, {
            name: 'phone'
          }, {
            name: 'product',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'module',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'item',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'serialNumber',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'inboundEmail'
          }, {
            name: 'issue',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'status',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'priority',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'origin',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'category',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'assigned',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'helpDesk',
            typeInfo: 'Boolean'
          }, {
            name: 'emailEmployeesList',
            typeInfo: '.EmailEmployeesList'
          }, {
            name: 'escalateToList',
            typeInfo: '.SupportCaseEscalateToList'
          }, {
            name: 'timeItemList',
            typeInfo: '.SupportCaseTimeItemList'
          }, {
            name: 'solutionsList',
            typeInfo: '.SupportCaseSolutionsList'
          }, {
            name: 'customFieldList',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.CustomFieldList'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Topic',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'title'
          }, {
            name: 'parentTopic',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'longDescription'
          }, {
            name: 'solutionList',
            typeInfo: '.TopicSolutionList'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SolutionSearchAdvanced',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'criteria',
            typeInfo: '.SolutionSearch'
          }, {
            name: 'columns',
            typeInfo: '.SolutionSearchRow'
          }, {
            name: 'savedSearchId',
            attributeName: {
              localPart: 'savedSearchId'
            },
            type: 'attribute'
          }, {
            name: 'savedSearchScriptId',
            attributeName: {
              localPart: 'savedSearchScriptId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SupportCaseIssue',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.Record',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'insertBefore',
            typeInfo: 'com_netsuite_webservices_platform_core_2019_2.RecordRef'
          }, {
            name: 'description'
          }, {
            name: 'isInactive',
            typeInfo: 'Boolean'
          }, {
            name: 'internalId',
            attributeName: {
              localPart: 'internalId'
            },
            type: 'attribute'
          }, {
            name: 'externalId',
            attributeName: {
              localPart: 'externalId'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IssueSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.IssueSearchBasic'
          }, {
            name: 'caseJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SupportCaseSearchBasic'
          }, {
            name: 'employeeJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }, {
            name: 'fileJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchBasic'
          }, {
            name: 'productTeamJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EntityGroupSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }, {
            name: 'userNotesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.NoteSearchBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
          }]
      }, {
        localName: 'SupportCaseSearch',
        baseTypeInfo: 'com_netsuite_webservices_platform_core_2019_2.SearchRecord',
        propertyInfos: [{
            name: 'basic',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.SupportCaseSearchBasic'
          }, {
            name: 'companyJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EntitySearchBasic'
          }, {
            name: 'contactJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ContactSearchBasic'
          }, {
            name: 'customerJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomerSearchBasic'
          }, {
            name: 'employeeJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }, {
            name: 'fileJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.FileSearchBasic'
          }, {
            name: 'issueJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.IssueSearchBasic'
          }, {
            name: 'itemJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.ItemSearchBasic'
          }, {
            name: 'messagesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.MessageSearchBasic'
          }, {
            name: 'timeJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TimeBillSearchBasic'
          }, {
            name: 'transactionJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.TransactionSearchBasic'
          }, {
            name: 'userJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.EmployeeSearchBasic'
          }, {
            name: 'userNotesJoin',
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.NoteSearchBasic'
          }, {
            name: 'customSearchJoin',
            minOccurs: 0,
            collection: true,
            typeInfo: 'com_netsuite_webservices_platform_common_2019_2.CustomSearchJoin'
          }]
      }, {
        localName: 'TopicSolutionList',
        propertyInfos: [{
            name: 'solution',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TopicSolution'
          }, {
            name: 'replaceAll',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'replaceAll'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: '.SupportCaseIssue',
        elementName: 'SupportCaseIssue'
      }, {
        typeInfo: '.TopicSearch',
        elementName: 'topicSearch'
      }, {
        typeInfo: '.SupportCaseStatus',
        elementName: 'SupportCaseStatus'
      }, {
        typeInfo: '.Solution',
        elementName: 'Solution'
      }, {
        typeInfo: '.SupportCase',
        elementName: 'SupportCase'
      }, {
        typeInfo: '.Topic',
        elementName: 'Topic'
      }, {
        typeInfo: '.SolutionSearch',
        elementName: 'solutionSearch'
      }, {
        typeInfo: '.IssueSearch',
        elementName: 'issueSearch'
      }, {
        typeInfo: '.SupportCaseOrigin',
        elementName: 'SupportCaseOrigin'
      }, {
        typeInfo: '.Issue',
        elementName: 'Issue'
      }, {
        typeInfo: '.SupportCaseSearch',
        elementName: 'supportCaseSearch'
      }, {
        typeInfo: '.SupportCaseType',
        elementName: 'SupportCaseType'
      }, {
        typeInfo: '.SupportCasePriority',
        elementName: 'SupportCasePriority'
      }]
  };
  return {
    com_netsuite_webservices_lists_support_2019_2: com_netsuite_webservices_lists_support_2019_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_support_2019_2_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_support_2019_2_Module = com_netsuite_webservices_lists_support_2019_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_support_2019_2 = com_netsuite_webservices_lists_support_2019_2_Module.com_netsuite_webservices_lists_support_2019_2;
  }
  else {
    var com_netsuite_webservices_lists_support_2019_2 = com_netsuite_webservices_lists_support_2019_2_Module.com_netsuite_webservices_lists_support_2019_2;
  }
}