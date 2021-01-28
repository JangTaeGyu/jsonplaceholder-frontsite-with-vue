export const moduleContext = require.context('@/store/modules', false, /.*\.js$/);

export function getStoreModules() {
  return moduleContext
    .keys()
    .map((file) => [file.replace(/(^.\/)|(\.js$)/g, ''), moduleContext(file)])
    .reduce((modules, [name, module]) => {
      const _module = module;
      if (_module.namespaced === undefined) {
        _module.namespaced = true;
      }

      return { ...modules, [name]: _module };
    }, {});
}
