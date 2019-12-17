import createActions from '../../services/createActions';

const prefix = '@repositories_search_engine/app';

const types = ['GET_LIST'];

const { getList } = createActions(prefix, types);

export default { getList };
