export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '619bd108bfdc6b4b96a71abb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uv8x1g7j',
                  apiId: 'aa908107-093e-43f0-9ac9-a8f12be39487'
                },
                {
                  buildHookId: '619bd108f9db384bddfa5536',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dwq3a319',
                  apiId: '443b3752-1827-4fe9-a552-443d2da0095c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/domgaulton/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dwq3a319.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
