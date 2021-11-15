import http from './githubAuth';

export const searchRepos = async (searhParam) => {
    const response = await http.post('graphql', {
        query: `query{
            search(type: REPOSITORY, query: "${searhParam}", first: 100) {
              nodes {
                ... on Repository {
                  id
                  nameWithOwner
                  description
                  pushedAt
                  updatedAt
                    stargazerCount
                    isPrivate
                  licenseInfo {
                    key
                  }
                  primaryLanguage {
                    name
                  }
                  stargazerCount
                }
              }
            }
          }`
    });
    return response;
}