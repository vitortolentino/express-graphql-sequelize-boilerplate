import { testMutations }  from './resources/test/test.schema'

const Mutation = `
    type Mutation {
        ${testMutations}
    }
`;

export {
    Mutation
}