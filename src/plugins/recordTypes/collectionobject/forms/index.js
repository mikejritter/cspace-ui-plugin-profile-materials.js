import defaultForm from './default';
import miniForm from './mini';
import publicForm from './public';

export default (configContext) => ({
  default: defaultForm(configContext),
  mini: miniForm(configContext),
  public: publicForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
  timebased: {
    disabled: true,
  },
});
