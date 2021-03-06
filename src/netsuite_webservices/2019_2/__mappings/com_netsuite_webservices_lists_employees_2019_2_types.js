var com_netsuite_webservices_lists_employees_2019_2_types_Module_Factory = function () {
  var com_netsuite_webservices_lists_employees_2019_2_types = {
    name: 'com_netsuite_webservices_lists_employees_2019_2_types',
    typeInfos: [{
        type: 'enumInfo',
        localName: 'EmployeeBaseWageType',
        values: ['_annualSalary', '_hourly', '_monthlySalary']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeCompensationCurrency',
        values: ['_aed', '_afa', '_afn', '_all', '_amd', '_ang', '_aoa', '_ars', '_aud', '_awg', '_azn', '_bam', '_bbd', '_bdt', '_bgn', '_bhd', '_bif', '_bmd', '_bnd', '_bob', '_brl', '_bsd', '_btn', '_bwp', '_byn', '_byr', '_bzd', '_cad', '_cdf', '_chf', '_clp', '_cny', '_cop', '_crc', '_csd', '_cuc', '_cup', '_cve', '_cyp', '_czk', '_djf', '_dkk', '_dop', '_dzd', '_ecs', '_eek', '_egp', '_ern', '_etb', '_eur', '_fjd', '_fkp', '_gbp', '_gel', '_ggp', '_ghc', '_ghs', '_gip', '_gmd', '_gnf', '_gtq', '_gyd', '_hkd', '_hnl', '_hrk', '_htg', '_huf', '_idr', '_ils', '_imp', '_inr', '_iqd', '_irr', '_isk', '_jep', '_jmd', '_jod', '_jpy', '_kes', '_kgs', '_khr', '_kmf', '_kpw', '_krw', '_kwd', '_kyd', '_kzt', '_lak', '_lbp', '_lkr', '_lrd', '_lsl', '_ltl', '_lvl', '_lyd', '_mad', '_mdl', '_mfg', '_mga', '_mkd', '_mmk', '_mnt', '_mop', '_mro', '_mru', '_mtl', '_mur', '_mvr', '_mwk', '_mxn', '_myr', '_mzm', '_mzn', '_nad', '_ngn', '_nio', '_nok', '_npr', '_nzd', '_omr', '_pab', '_pen', '_pgk', '_php', '_pkr', '_pln', '_pyg', '_qar', '_rol', '_ron', '_rsd', '_rub', '_rur', '_rwf', '_sar', '_sbd', '_scr', '_sdd', '_sdg', '_sek', '_sgd', '_shp', '_sit', '_skk', '_sll', '_sos', '_spl', '_srd', '_srg', '_ssp', '_std', '_stn', '_svc', '_syp', '_szl', '_thb', '_tjs', '_tmm', '_tmt', '_tnd', '_top', '_trl', '_try', '_ttd', '_tvd', '_twd', '_tzs', '_uah', '_ugx', '_usd', '_uyu', '_uzs', '_veb', '_vef', '_ves', '_vnd', '_vuv', '_wst', '_wsx', '_xaf', '_xag', '_xau', '_xcd', '_xdr', '_xof', '_xop', '_xpd', '_xpf', '_xpt', '_yer', '_yum', '_zar', '_zmk', '_zmw', '_zrn', '_zwd', '_zwl']
      }, {
        type: 'enumInfo',
        localName: 'EmployeePayFrequency',
        values: ['_annually', '_custom', '_daily', '_endOfPeriod', '_everyFourWeeks', '_everyThreeYears', '_everyTwoMonths', '_everyTwoWeeks', '_everyTwoYears', '_hourly', '_monthly', '_never', '_oneTime', '_quarterly', '_startOfPeriod', '_twiceAMonth', '_twiceAYear', '_weekly']
      }, {
        type: 'enumInfo',
        localName: 'PayrollItemAccountCategory',
        values: ['_expense', '_liability']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeAccruedTimeAccrualMethod',
        values: ['_lumpSums', '_perHourWorked', '_perPayPeriod']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeUseTimeData',
        values: ['_wage', '_salary']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeWorkAssignment',
        values: ['_job', '_position']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeCommissionPaymentPreference',
        values: ['_accountsPayable', '_payroll', '_systemPreference']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeTerminationRegretted',
        values: ['_no', '_unspecified', '_yes']
      }, {
        type: 'enumInfo',
        localName: 'PayrollItemItemTypeNoHierarchy',
        values: ['_addition', '_commission', '_deduction', '_directDeposit', '_disability', '_earning', '_employerContribution', '_expense', '_federal', '_medicare', '_other', '_salary', '_sick', '_socialSecurity', '_state', '_tax', '_unemployment', '_vacation', '_wage']
      }, {
        type: 'enumInfo',
        localName: 'Gender',
        values: ['_omitted', '_female', '_male']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeDirectDepositAccountStatus',
        values: ['_active', '_pending', '_verifying', '_failed', '_inactive']
      }, {
        type: 'enumInfo',
        localName: 'EmployeeTerminationCategory',
        values: ['_involuntary', '_voluntary']
      }],
    elementInfos: []
  };
  return {
    com_netsuite_webservices_lists_employees_2019_2_types: com_netsuite_webservices_lists_employees_2019_2_types
  };
};
if (typeof define === 'function' && define.amd) {
  define([], com_netsuite_webservices_lists_employees_2019_2_types_Module_Factory);
}
else {
  var com_netsuite_webservices_lists_employees_2019_2_types_Module = com_netsuite_webservices_lists_employees_2019_2_types_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.com_netsuite_webservices_lists_employees_2019_2_types = com_netsuite_webservices_lists_employees_2019_2_types_Module.com_netsuite_webservices_lists_employees_2019_2_types;
  }
  else {
    var com_netsuite_webservices_lists_employees_2019_2_types = com_netsuite_webservices_lists_employees_2019_2_types_Module.com_netsuite_webservices_lists_employees_2019_2_types;
  }
}