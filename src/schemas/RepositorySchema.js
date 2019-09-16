export default class RepositorySchema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    schemaVersion: 3,
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      fullName: 'string',
      description: { type: 'string', optional: true },
      stars: 'int',
      forks: 'int',
    },
  };
}
