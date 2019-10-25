console.clear();

controllersModule = '';
servicesModule = '' || controllersModule;

if (!controllersModule) {
  throw new Error('Must configure the variable `controllersModule` and `servicesModule`. \nJust set controllersModule = \'YOUR_CONTROLLERS_MODULE_NAME\'; and servicesModule = controllersModule || \'YOUR_SERVICES_MODULE_NAME\';.')
}

controller = angular.element($0).controller().constructor;

console.log('%c' + angular.module(controllersModule)._invokeQueue.find(q => q[0] === '$controllerProvider' && q[2][1].toString() === controller.toString())[2][0], 'font-size: 1.1em; font-weight: bold');

console.log('\n%cScope', 'font-size: 1.1em; font-weight: bold');

console.log(angular.element($0).scope());

console.log('\n%cSource', 'font-size: 1.1em; font-weight: bold');

console.log(controller);

dependencies = controller.$inject.filter(i => i[0] !== '$' && i[0] !== '_');

console.log('\n');

console.group('%cdependencies', 'font-size: 1.1em; font-weight: bold');

dependencies.forEach(d => {
  console.log('\n%c' + d, 'font-size: 1.1em; font-weight: bold');
  let service = angular.module(servicesModule)._invokeQueue.find(q => q[2][0] === d);

  if(service && service[2]) {
    console.log(service[2][1])
  } else {
    service = angular.module(controllersModule)._invokeQueue.find(q => q[2][0] === d);

    if(service && service[2]) {
      console.log(service[ 2 ][ 1 ])
    } else {
      console.log('no source code found.')
    }
  }
});

console.groupEnd();
