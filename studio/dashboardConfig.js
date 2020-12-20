export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdfd985f818552c009e7697',
                  title: 'Sanity Studio',
                  name: 'test-sanity-eleventy-blog-studio-eueio83z',
                  apiId: '76087bac-2440-41e4-9948-f5fd9e2d8a9e'
                },
                {
                  buildHookId: '5fdfd98523860510f1790762',
                  title: 'Blog Website',
                  name: 'test-sanity-eleventy-blog-web-n4kk3jmw',
                  apiId: '0fa1c522-c3e8-4a87-be16-85f90e7235c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctolkien/test-sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-eleventy-blog-web-n4kk3jmw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
