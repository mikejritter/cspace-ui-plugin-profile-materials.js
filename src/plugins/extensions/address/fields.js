export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    addrGroupList: {
      addrGroup: {
        addressMunicipality: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        addressStateOrProvince: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        addressCountry: {
          [config]: {
            view: {
              type: OptionPickerInput,
              props: {
                source: 'addressCountries',
              },
            },
          },
        },
      },
    },
  };
};
