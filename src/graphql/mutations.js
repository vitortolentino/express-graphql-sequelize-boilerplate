import { testMutations }  from './resources/test/test.schema'

export const Mutation = `
    type Mutation {
        ${testMutations}
    }
`;