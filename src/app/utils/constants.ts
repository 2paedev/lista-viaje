export const MESSAGES = {
  ERRORS: {
    LOGIN: {
      BASE: 'Incorrect username or password',
      USERNAME_REQUIRED: 'Username is required',
      PASSWORD_REQUIRED: 'Password is required'
    }
  },
  LOADING_SPINNER: 'Loading...',
  LOGIN: {
    TITLE: 'Login',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    SUBMIT: 'Enter'
  },
  BUTTONS: {
    SEARCH: {
      LABEL: 'Search',
      PLACEHOLDER: 'Search...'
    },
    REMOVE: 'Remove',
    CANCEL: 'Cancel',
    CREATE: 'Create'
  },
  MODALS: {
    TITLE: {
      EDIT: 'Edit person'
    },
    SURNAME: 'Surname',
    NAME: 'Name',
    CODE: 'Code',
    START_DATE: 'Start date',
    END_DATE: 'End date',
    WITHOUT_END_DATE: 'No end date',
    REMOVE_TEXT: {
      WARNING: 'Use only for invalid user (if never existed)',
      INFO:
        'If the person leaves the company, don\'t remove it, just indicate an end date.'
    }
  }
};

export const TABLE_COLUMNS = {
  NAME: {
    ID: 'name',
    NAME: 'Name',
    FLEX_GROW: 3
  },
  CODE: {
    ID: 'code',
    NAME: 'Code',
    FLEX_GROW: 1
  },
  START_DATE: {
    ID: 'startDate',
    NAME: 'Start date',
    FLEX_GROW: 1
  },
  END_DATE: {
    ID: 'endDate',
    NAME: 'End date',
    FLEX_GROW: 1,
    EMPTY_VALUE: 'NONE'
  }
};

export const TABLE_FILTER = {
  ACTIVE: {
    ID: 'active',
    LABEL: 'Active'
  },
  ALL: {
    ID: 'all',
    LABEL: 'All'
  }
};
