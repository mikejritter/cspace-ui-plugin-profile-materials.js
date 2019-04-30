export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:materials_common': {
        materialCompositionGroupList: {
          materialCompositionGroup: {
            materialCompositionFamilyName: {
              [config]: {
                view: {
                  props: {
                    source: 'concept/materialclassification,concept/sharedmaterialclassification',
                  },
                },
              },
            },
            materialCompositionClassName: {
              [config]: {
                view: {
                  props: {
                    source: 'concept/materialclassification,concept/sharedmaterialclassification',
                  },
                },
              },
            },
            materialCompositionGenericName: {
              [config]: {
                view: {
                  props: {
                    source: 'concept/materialclassification,concept/sharedmaterialclassification',
                  },
                },
              },
            },
          },
        },
        publishToList: {
          publishTo: {
            [config]: {
              defaultValue: 'urn:cspace:materials.collectionspace.org:vocabularies:name(publishto):item:name(none)\'None\'',
            },
          },
        },
      },
    },
  };
};
