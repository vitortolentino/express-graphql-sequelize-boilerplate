import { testQuerys } from './resources/test/test.schema';

export default `
    type Query {
        ${testQuerys}
    }
`;